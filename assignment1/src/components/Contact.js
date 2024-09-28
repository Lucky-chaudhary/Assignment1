import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/');
    };
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <main className="contact-form">
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </main>

        <aside className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email:  lucky.handles11@gmail.com </p>
          <p>Phone: 0007777777 </p>
          <p>Address:  941 Progress Ave, Scarborough, Ontario </p>
          
        </aside>
      </div>
    </div>
  );
}

export default Contact;
