import React from 'react';

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', background: '#f4f4f4' }}>
      <h2>Connect with us</h2>
      <div style={{ marginTop: '10px' }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |{' '}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <p style={{ marginTop: '10px', fontSize: '14px' }}>
        &copy; {new Date().getFullYear()} My React App. All rights reserved.
      </p>
    </footer>
  );
}
