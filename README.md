# 📝 Notes Application (Express.js + File System)

A simple yet powerful RESTful Notes API built with **Node.js** and **Express.js**, storing data in a local JSON file. It supports full CRUD functionality along with features like trash, restore, pinning, and searching notes.

---

## 📚 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Future Scope](#-future-scope)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✅ Features

- Create, update, delete, and restore notes
- Soft delete (Trash bin)
- Permanent deletion
- Search notes by keyword (title/content)
- Pinning important notes
- JSON file storage for simplicity
- Clean and modular Express.js code

---

## 💻 Installation:
### 1️⃣ Prerequisites
- [Node.js](https://nodejs.org/) installed
- [Postman](https://www.postman.com/) or `curl` for API testing
- Basic terminal/command prompt knowledge

---

 ### 2️⃣ Clone the repository:

```bash
git clone https://github.com/your-username/notes-application.git
cd notes-application
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run the Application

```bash
nodemon server.js
```

## 📦 Usage:
✅ Example 1:Create a Node

```bash
curl -X POST http://localhost:3000/notes \
-H "Content-Type: application/json" \
-d '{"title": "Grocery List", "content": "Buy milk, bread, and eggs", "tags": ["shopping"], "pinned": false}'
```

✅ Example 2:Get All Notes

```bash
curl http://localhost:3000/notes
```

✅ Example 3:Search Notes

```bash
curl http://localhost:3000/notes/search/grocery
```

✅ Example 4:Soft Delete a Note

```bash
curl -X DELETE http://localhost:3000/notes/1
```

✅ Example 4:Restore a Note

```bash
curl -X PATCH http://localhost:3000/notes/1/restore
```

## 📬 API Endpoints

Here is a complete list of all available REST API endpoints:

---

### 📄 Notes CRUD

| Method | Endpoint          | Description                        |
|--------|-------------------|------------------------------------|
| GET    | `/notes`          | Get all non-deleted notes          |
| GET    | `/notes/:id`      | Get a specific note by ID          |
| POST   | `/notes`          | Create a new note                  |
| PUT    | `/notes/:id`      | Update an existing note by ID      |

---

### 🗑️ Trash Management

| Method | Endpoint               | Description                         |
|--------|------------------------|-------------------------------------|
| DELETE | `/notes/:id`           | Soft delete a note (moves to trash) |
| GET    | `/notes/trash`         | View all trashed (soft deleted) notes |
| PATCH  | `/notes/:id/restore`   | Restore a single trashed note       |
| PATCH  | `/notes/restore-all`   | Restore all trashed notes           |
| DELETE | `/notes/:id/force`     | Permanently delete a note           |

---

### 📌 Extra Features

| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| PATCH  | `/notes/:id/pin`            | Pin a note                           |
| GET    | `/notes/search/:keyword`    | Search notes by title or content     |

---

📝 **Note:**
- All endpoints expect and return data in **JSON** format.
- Make sure to set `Content-Type: application/json` when sending data via POST or PUT.

## 🛠 Tech Stack

This project is built using the following technologies:

| Layer       | Technology         |
|-------------|--------------------|
| 🧠 Backend   | Node.js, Express.js |
| 📁 Storage   | File System (JSON) |
| 🔧 Tools     | Nodemon, Postman, Git |

---

### 🔍 Description

- **Express.js** – Manages API endpoints and business logic for CRUD operations on notes.
- **File System (fs)** – Stores note data in a structured local `notes.json` file (no external database).

## 🔮 Future Scope

This Notes Application is currently a backend-only project powered by Express and file-based JSON storage. Future enhancements aim to turn this into a complete full-stack application.

---

### 🖥️ Frontend with React + CSS (Planned)

A responsive and interactive frontend will be built using **React.js** and **CSS** to enhance usability and visual appeal.

#### Planned Frontend Features:

- 🔲 View all notes, pinned notes, and trashed notes
- ✍️ Create and edit notes through a user-friendly form
- 📌 Pin/unpin notes visually
- 🗑️ Move notes to trash and restore them easily
- 🔍 Live search bar for title/content filtering
- 🌙 Light/Dark theme toggle
- 🎨 Styled UI with clean layouts using custom CSS or frameworks like Tailwind

---

### 🧱 Additional Backend Enhancements

- 🔐 User authentication (JWT-based login system)
- 🌐 Replace JSON with a database (MongoDB or SQLite)
- 📁 File uploads for image attachments in notes
- 📤 Export notes as PDF/Markdown
- 📅 Scheduled reminders or due dates for notes
- 🧠 Tags, categories, and sorting/filtering features

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 🎉

If you would like to contribute to this project, please follow the steps below:

---

### 🧾 Steps to Contribute

1. **Fork the repository**
   - Click the **"Fork"** button at the top-right of this repository page.

2. **Clone your forked repository**
   ```bash
   git clone https://github.com/your-username/notes-application.git
   cd notes-application
   ```

3. **Create a new Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Add your feature or fix a bug
   - Ensure the code is clean, readable, and well-documented

5. **Commit and push your changes**
   ```bash
   git add .
   git commit -m "✨ Add: Your feature description"
   git push origin feature/your-feature-name
   ```
   
6. **Create a Pull Request**
   - Go to your forked repo on GitHub
   - Click "Compare & pull request"
   - Provide a clear and concise description of your changes
   - Submit the PR 🎉

---

✅ Contribution Guidelines
  - Follow consistent code style and project structure
  -  Add comments where necessary
  - Ensure the project runs without errors
  - Be respectful and constructive during code reviews
