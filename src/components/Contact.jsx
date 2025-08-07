// src/Contact.jsx
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [message, setMessage] = useState(''); // Success/error message state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to send message');
            }
            const result = await response.text();
            setMessage(result); // Show success message
            setFormData({ name: '', email: '', message: '' }); // Clear form
        } catch (err) {
            setMessage('Error sending message');
            console.error('Error:', err);
        }
    };

    return (
        <footer id="contact">
            <div className="footer-section">
                <h3>Contact Info</h3>
                <p>Email: <a href="alamshahnwaz516@gmail.com">alamshahnwaz516@gmail.com</a></p>
                <p>Phone: <a href="tel:+917653431234">+91 765-343-1234</a></p>
            </div>
            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Send a Message</h3>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="btn">Send Message</button>
                    {message && <p style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>}
                </form>
            </div>
        </footer>
    );
};

export default Contact;