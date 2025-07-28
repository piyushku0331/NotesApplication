import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ textAlign: 'center', padding: '40px 0' }}>
        <h1>🏠 Welcome to the Home Page of React App 🏠</h1>
      </main>
      <Footer />
    </div>
  );
}
