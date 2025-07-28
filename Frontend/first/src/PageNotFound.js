import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '48px', color: 'red' }}>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go back to Home
      </Link>
    </div>
  );
}
