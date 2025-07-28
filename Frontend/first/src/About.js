import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1>🙋 About Us</h1>
        <p style={{ marginTop: '20px' }}>
          Welcome to our React app! This project demonstrates routing, layout components like Navbar and Footer,
          and how to build clean, reusable UI in React. We're constantly adding new features and improvements.
        </p>
      </main>
      <Footer />
    </div>
  );
}
