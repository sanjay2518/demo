import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
    const offices = [
        {
            city: 'New York',
            address: '123 Financial District',
            address2: 'New York, NY 10004',
            phone: '(555) 123-4567',
            email: 'newyork@precisionaccounting.com'
        },
        {
            city: 'Chicago',
            address: '456 Michigan Avenue',
            address2: 'Chicago, IL 60601',
            phone: '(555) 234-5678',
            email: 'chicago@precisionaccounting.com'
        },
        {
            city: 'Los Angeles',
            address: '789 Wilshire Blvd',
            address2: 'Los Angeles, CA 90017',
            phone: '(555) 345-6789',
            email: 'losangeles@precisionaccounting.com'
        },
    ];

    const handleFormSubmit = (data) => {
        console.log('Form submitted:', data);
        // Handle form submission - API call, etc.
    };

    return (
        <main className="contact-page">
            <Hero
                size="small"
                subtitle="Get in Touch"
                title="Let's Start a Conversation"
                description="Have a question or want to discuss your needs? We're here to help."
            />

            {/* Contact Section */}
            <section className="contact-section section-lg">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <div className="form-header">
                                <h2>Send Us a Message</h2>
                                <p>
                                    Fill out the form below and a member of our team will get back
                                    to you within 24 hours.
                                </p>
                            </div>
                            <ContactForm onSubmit={handleFormSubmit} />
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-card">
                                <h3>Quick Contact</h3>
                                <div className="info-items">
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                            </svg>
                                        </div>
                                        <div className="info-content">
                                            <h4>Phone</h4>
                                            <a href="tel:+15551234567">(555) 123-4567</a>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <div className="info-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                        </div>
                                        <div className="info-content">
                                            <h4>Email</h4>
                                            <a href="mailto:contact@precisionaccounting.com">contact@precisionaccounting.com</a>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <div className="info-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                            </svg>
                                        </div>
                                        <div className="info-content">
                                            <h4>Office Hours</h4>
                                            <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="social-card">
                                <h3>Follow Us</h3>
                                <div className="social-links">
                                    <a href="#" aria-label="LinkedIn" className="social-link">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Twitter" className="social-link">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Facebook" className="social-link">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="YouTube" className="social-link">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offices Section */}
            <section className="offices-section section-lg bg-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-subtitle">Our Locations</span>
                        <h2>Office Locations</h2>
                    </div>

                    <div className="offices-grid">
                        {offices.map((office, index) => (
                            <div key={index} className="office-card">
                                <div className="office-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                <h3>{office.city}</h3>
                                <p className="office-address">
                                    {office.address}<br />
                                    {office.address2}
                                </p>
                                <div className="office-contacts">
                                    <a href={`tel:${office.phone.replace(/[^0-9]/g, '')}`}>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                        {office.phone}
                                    </a>
                                    <a href={`mailto:${office.email}`}>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                        Email
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-placeholder">
                    <div className="map-content">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <p>Interactive map would be displayed here</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section section-lg">
                <div className="container">
                    <div className="faq-content">
                        <div className="faq-header">
                            <span className="section-subtitle">FAQ</span>
                            <h2>Common Questions</h2>
                        </div>

                        <div className="faq-list">
                            <details className="faq-item">
                                <summary>How do I schedule a consultation?</summary>
                                <p>
                                    You can schedule a consultation by filling out the contact form above,
                                    calling us directly, or sending an email. We typically respond within
                                    24 hours to set up a meeting at your convenience.
                                </p>
                            </details>

                            <details className="faq-item">
                                <summary>What should I bring to the initial meeting?</summary>
                                <p>
                                    For the initial consultation, please bring any relevant financial documents,
                                    prior tax returns, and a list of questions or concerns you'd like to discuss.
                                    This helps us understand your situation and provide relevant guidance.
                                </p>
                            </details>

                            <details className="faq-item">
                                <summary>Do you offer virtual consultations?</summary>
                                <p>
                                    Yes, we offer virtual consultations via video conferencing for clients
                                    who prefer remote meetings or are located outside our office areas.
                                    Just let us know your preference when scheduling.
                                </p>
                            </details>

                            <details className="faq-item">
                                <summary>How are your fees structured?</summary>
                                <p>
                                    Our fees vary based on the complexity and scope of services required.
                                    We offer transparent pricing and will provide a detailed quote after
                                    understanding your specific needs during the initial consultation.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
