import React from 'react';

export default function Contact() {
  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>📞 Contact Us</h2>
      <p>We’d love to hear from you! Reach out using the form below or email us directly.</p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
