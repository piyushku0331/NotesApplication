import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>------------------ Navbar ------------------</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      <h1>------------------------------------------</h1>
    </nav>
  );
}
