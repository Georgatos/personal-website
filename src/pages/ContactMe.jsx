import React, { useState, useRef, useEffect } from 'react';
import '../styles/contactme.css';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [focusedField, setFocusedField] = useState(null);
    const [errors, setErrors] = useState({});

    const formRef = useRef(null);
    const contactInfoRef = useRef(null);

    // ✅ Correct base URL
    const API_BASE_URL = '/api';

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (formRef.current) observer.observe(formRef.current);
        if (contactInfoRef.current) observer.observe(contactInfoRef.current);

        return () => observer.disconnect();
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch(`${API_BASE_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error(data.message || 'Failed to send message');
            }

        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus('error');

            if (error.message.includes('fetch')) {
                setErrors({ submit: 'Unable to connect to server. Please check your internet connection.' });
            } else {
                setErrors({ submit: error.message || 'Something went wrong. Please try again.' });
            }
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setSubmitStatus(null);
                setErrors(prev => ({ ...prev, submit: '' }));
            }, 5000);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">
                        <span className="title-gradient">Get In Touch</span>
                        <div className="title-underline"></div>
                    </h2>
                    <p className="contact-subtitle">
                        Have a project in mind? Let's work together to bring your ideas to life.
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Information */}
                    <div className="contact-info" ref={contactInfoRef}>
                        <h3 className="info-title">Let's Connect</h3>
                        <p className="info-description">
                            I'm always excited to collaborate on new projects and help businesses
                            establish their digital presence.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Email</span>
                                    <a href="mailto:contact@andreasgeorgatos.dev" className="info-value info-link">
                                        contact@andreasgeorgatos.dev
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="contact-decoration">
                            <div className="decoration-circle circle-1"></div>
                            <div className="decoration-circle circle-2"></div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        ref={formRef}
                    >
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    className={`form-input ${focusedField === 'name' ? 'focused' : ''} ${errors.name ? 'error' : ''}`}
                                    required
                                />
                                <div className="input-underline"></div>
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className={`form-input ${focusedField === 'email' ? 'focused' : ''} ${errors.email ? 'error' : ''}`}
                                    required
                                />
                                <div className="input-underline"></div>
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('subject')}
                                onBlur={() => setFocusedField(null)}
                                className={`form-input ${focusedField === 'subject' ? 'focused' : ''} ${errors.subject ? 'error' : ''}`}
                                required
                            />
                            <div className="input-underline"></div>
                            {errors.subject && <span className="error-message">{errors.subject}</span>}
                        </div>

                        <div className="form-group textarea-group">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <div className="textarea-wrapper">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={() => setFocusedField(null)}
                                    className={`form-textarea ${focusedField === 'message' ? 'focused' : ''} ${errors.message ? 'error' : ''}`}
                                    rows="6"
                                    placeholder="Please type your message here."
                                    required
                                ></textarea>
                                <div className="textarea-border"></div>
                                <div className="character-count">
                                    {formData.message.length}/500
                                </div>
                            </div>
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${Object.keys(errors).length > 0 ? 'has-errors' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg className="send-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </>
                            )}
                        </button>

                        {errors.submit && (
                            <div className="submit-message error">
                                <div className="error-content">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="15" y1="9" x2="9" y2="15"></line>
                                        <line x1="9" y1="9" x2="15" y2="15"></line>
                                    </svg>
                                    <p>{errors.submit}</p>
                                </div>
                            </div>
                        )}

                        {submitStatus && (
                            <div className={`submit-message ${submitStatus}`}>
                                {submitStatus === 'success' ? (
                                    <div className="success-content">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                        <p>Thank you! Your message has been sent successfully. I'll get back to you soon!</p>
                                    </div>
                                ) : (
                                    <div className="error-content">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                        <p>Oops! Something went wrong. Please try again or reach out directly via email.</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}