const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const NOTES_FILE = path.join(__dirname,"notes.json");

app.use(express.json());

const readNotes = async()=>{
    try{
        if(fs.existsSync(NOTES_FILE)){
            const data = await fs.promises.readFile(NOTES_FILE, 'utf-8');
            return JSON.parse(data);
        }
        else{
            return [];
        }
    }
    catch(err){
        console.error("Error Reading File : ", err);
        return [];  
    }
};

const writeNotes = async(notes)=>{
    try{
        await fs.promises.writeFile(NOTES_FILE,JSON.stringify(notes, null, 2));
    }
    catch(err){
        console.error("Error Writing File : ", err);        
    }
};

app.post('/notes', async(req, res)=>{
    const {title, content, tags = [], pinned = false} = req.body;
    const notes = await readNotes();

    const newId = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;

    const newNote = {
        id : newId,
        title,
        content,
        tags,
        pinned,
        createdAt: new Date().toISOString(),
        deleted: false
    };

    notes.push(newNote);
    await writeNotes(notes);

    res.status(201).json(newNote);
});

app.get('/notes', async(req, res)=>{
    const notes = await readNotes();
    const filtered = notes.filter(note => !note.deleted);
    res.json(filtered);
});

app.get('/notes/:id', async(req, res)=>{
    const notes = await readNotes();
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if(!note) return res.status(404).json({message: "Note Not Found..."});
    res.json(note);
});

app.get('/notes/trash', async(req, res)=>{
    const notes = await readNotes();
    const trashed = notes.filter(note => note.deleted);
    res.json(trashed);
})

app.get('/notes/search/:keyword', async (req, res) => {
  const keyword = req.params.keyword.toLowerCase();
  const notes = await readNotes();
  const result = notes.filter(n =>
    !n.deleted &&
    (n.title.toLowerCase().includes(keyword) || n.content.toLowerCase().includes(keyword))
  );
  res.json(result);
});

app.put('/notes/:id', async(req, res)=>{
    const notes = await readNotes();
    const id = parseInt(req.params.id);
    const index = notes.findIndex(n => n.id === id);
    if(index === -1) return res.status(404).json({message: "Note Does Not Exist..."});
    const updatedFields = req.body;
    notes[index] = {...notes[index], ...updatedFields};
    await writeNotes(notes);
    res.json(notes[index]);
});

app.patch('/notes/:id/pin',async(req, res)=>{
    const notes = await readNotes();
    const id = parseInt(req.params.id);
    const index = notes.findIndex(n => n.id === id);
    if(index === -1) return res.status(404).json({message: "Note Does Not Exist..."});
    notes[index].pinned = true;
    await writeNotes(notes);
    res.json({
        message: `Note ${notes[index].pinned ? 'Pinned' : 'Unpinned'} Successfully...`,
        note: notes[index]
    })
})

app.patch('/notes/:id/restore', async(req, res)=>{
    const notes = await readNotes();
    const id = parseInt(req.params.id);
    const index = notes.findIndex(n => n.id === id);
    if(index === -1) return res.status(404).json({message: "Note Not Found..."});
    if(!notes[index].deleted) return res.status(400).json({message: "Note is not Deleted..."});
    notes[index].deleted = false;
    await writeNotes(notes);
    res.json({
        message: "Note Restored Successfully...",
        note: notes[index]
    });
});

app.patch('/notes/restore-all', async(req, res)=>{
    const notes = await readNotes();
    let restoredCount = 0;
    for(let i = 0; i < notes.length; i++){
        if (notes[i].deleted) {
            notes[i].deleted = false;
            restoredCount++;
        }
    }
    if(restoredCount === 0) return res.status(400).json({message: "No Note In Trash Bin..."});
    await writeNotes(notes);
    res.json({message: `${restoredCount} Note(s) restored Successfully...`});
})

app.delete('/notes/:id', async(req, res)=>{
    const notes = await readNotes();
    const id = parseInt(req.params.id);
    const index = notes.findIndex(n => n.id === id);
    if(index === -1) return res.status(404).json({message: "Note Not Found..."});
    notes[index].deleted = true;
    await writeNotes(notes);
    res.json({message: "Note Deleted Successfully..."});
});

app.delete('/notes/:id/force', async(req, res)=>{
    const notes = await readNotes();
    const id = parseInt(req.params.id);
    const oldLength = notes.length;
    const updatedNotes = notes.filter(n => n.id !== id);
    if(updatedNotes.length === oldLength) return res.status(404).json({message: "Note Not Found..."});
    await writeNotes(updatedNotes);
    res.json({message: "Note Permanently Deleted..."});
})

app.listen(PORT,()=>{
    console.log(`Server Running At: http://localhost:${PORT}`);
});