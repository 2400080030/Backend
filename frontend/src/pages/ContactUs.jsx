import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './ContactUs.css';
import { Mail, Phone, MapPin, X, CheckCircle } from 'lucide-react';

export default function ContactUs() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOpenModal = (name) => {
    setSelectedContact(name);
    setMessage('');
    setIsSuccess(false);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // We will leave the modal open on success so they can see the success message
    }, 1000);
  };

  return (
    <div className="page-wrapper light-page relative">
      <Navbar />
      <div className="contact-container">
        
        <div className="contact-header">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-subheading">
            Having problems with the platform? Get in touch with our core team.
          </p>
        </div>

        <div className="contact-cards">
          
          <div className="contact-card">
            <div className="card-top mohan-color"></div>
            <div className="card-content">
              <h2>Mohan</h2>
              <p className="role">Platform Support Lead</p>
              
              <div className="contact-info">
                <div className="info-row">
                  <Phone size={18} className="icon" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="info-row">
                  <Mail size={18} className="icon" />
                  <span>mohan.support@voteforchange.in</span>
                </div>
                <div className="info-row">
                  <MapPin size={18} className="icon" />
                  <span>Hyderabad Branch</span>
                </div>
              </div>
              <button className="contact-btn" onClick={() => handleOpenModal('Mohan')}>Message Mohan</button>
            </div>
          </div>

          <div className="contact-card">
            <div className="card-top phani-color"></div>
            <div className="card-content">
              <h2>Phani</h2>
              <p className="role">Technical Systems Head</p>
              
              <div className="contact-info">
                <div className="info-row">
                  <Phone size={18} className="icon" />
                  <span>+91 87654 32109</span>
                </div>
                <div className="info-row">
                  <Mail size={18} className="icon" />
                  <span>phani.tech@voteforchange.in</span>
                </div>
                <div className="info-row">
                  <MapPin size={18} className="icon" />
                  <span>Bangalore HQ</span>
                </div>
              </div>
              <button className="contact-btn" onClick={() => handleOpenModal('Phani')}>Message Phani</button>
            </div>
          </div>

        </div>

      </div>

      {/* Modal overlay */}
      {selectedContact && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-btn" onClick={handleCloseModal}>
              <X size={24} />
            </button>
            
            {isSuccess ? (
              <div className="success-state">
                <CheckCircle size={60} className="success-icon" />
                <h2>Message Sent!</h2>
                <p>Your problem has been successfully submitted to {selectedContact}. They will get back to you shortly.</p>
                <button className="btn btn-primary" onClick={handleCloseModal}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="message-form">
                <h2>Message {selectedContact}</h2>
                <p>Describe your issue or question below.</p>
                <textarea 
                  className="form-input problem-textarea"
                  placeholder="Type your problem here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="5"
                ></textarea>
                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
