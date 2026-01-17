import { useState } from 'react';
import { submitContactForm } from '../services/contactStorage';
import './ContactForm.css';

const ContactForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        subscribe: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const services = [
        { value: '', label: 'Select a service' },
        { value: 'audit', label: 'Audit & Assurance' },
        { value: 'tax', label: 'Tax Services' },
        { value: 'advisory', label: 'Financial Advisory' },
        { value: 'bookkeeping', label: 'Bookkeeping' },
        { value: 'payroll', label: 'Payroll Services' },
        { value: 'consulting', label: 'Business Consulting' },
        { value: 'other', label: 'Other' },
    ];

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        if (submitError) {
            setSubmitError(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError(null);

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const result = await submitContactForm(formData);
            console.log('Contact form submitted to database:', result);

            if (onSubmit) {
                onSubmit(result.data);
            }

            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                message: '',
                subscribe: false
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError(
                error.message === 'Failed to fetch'
                    ? 'Unable to connect to server. Please try again later.'
                    : error.message || 'There was an error submitting your message. Please try again.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="contact-form-success">
                <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                </div>
                <h3>Thank You!</h3>
                <p>Your message has been received successfully.</p>
                <p className="response-note">
                    Our team will respond to you within 24 hours from:<br />
                    <strong>reliableprofessionals.co@gmail.com</strong>
                </p>
                <p className="check-spam">Please check your spam folder if you don't receive our response.</p>
                <button
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            {submitError && (
                <div className="form-error-banner">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    <span>{submitError}</span>
                </div>
            )}

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                        placeholder="John Smith"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        placeholder="john@company.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="service">Service Interest</label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                >
                    {services.map((service, index) => (
                        <option key={index} value={service.value}>
                            {service.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tell us about your needs..."
                    rows={5}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <div className="form-group checkbox-group">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleChange}
                    />
                    <span className="checkbox-custom"></span>
                    <span>Subscribe to our newsletter for tax updates and insights</span>
                </label>
            </div>

            <button
                type="submit"
                className={`btn btn-primary btn-lg submit-btn ${isSubmitting ? 'submitting' : ''}`}
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
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                    </>
                )}
            </button>
        </form>
    );
};

export default ContactForm;
