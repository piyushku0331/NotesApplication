import React, { useState } from 'react';

export default function Blog() {
  const [BlogCount, setBlogCount] = useState(1);
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>📝 Blog</h2>
      <p>Welcome to our blog! Read our latest posts below:</p>

      <div style={{ marginTop: '30px' }}>
        <article style={{ marginBottom: '20px' }}>
          <h3>🚀 Getting Started with React</h3>
          <p>React is a powerful JavaScript library for building user interfaces. It makes UI code easier to manage using components...</p>
        </article>

        <article style={{ marginBottom: '20px' }}>
          <h3>🔧 Understanding React Router</h3>
          <p>React Router helps you build single-page apps with navigation. It uses routes to map components to URLs...</p>
        </article>

        <article>
          <h3>💡 Tips for Clean Code in React</h3>
          <p>Clean code is crucial for maintainability. Use meaningful names, modular components, and proper formatting...</p>
        </article>
      </div>
      <h1>Total Blogs : {BlogCount}</h1>
      <button onClick={()=>{setBlogCount(BlogCount+1)}}>Add Blog</button>
      <button onClick={()=>{setBlogCount(BlogCount-1)}}>Delete Blog</button>
    </div>
  );
}
