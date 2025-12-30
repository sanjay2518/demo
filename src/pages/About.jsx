import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import TeamCard from '../components/TeamCard';
import './About.css';

const About = () => {
    const stats = [
        { value: 25, suffix: '+', label: 'Years Experience', icon: '📅' },
        { value: 5000, suffix: '+', label: 'Clients Served', icon: '👥' },
        { value: 50, prefix: '$', suffix: 'B+', label: 'Assets Managed', icon: '💰' },
        { value: 150, suffix: '+', label: 'Team Members', icon: '👨‍💼' },
    ];

    const values = [
        {
            icon: '🎯',
            title: 'Integrity',
            description: 'We uphold the highest ethical standards in everything we do, ensuring trust and transparency in all client relationships.'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'We continuously embrace new technologies and methodologies to deliver cutting-edge solutions for our clients.'
        },
        {
            icon: '🤝',
            title: 'Collaboration',
            description: 'We work as partners with our clients, understanding their goals and delivering personalized service.'
        },
        {
            icon: '⭐',
            title: 'Excellence',
            description: 'We are committed to delivering the highest quality work, exceeding expectations at every opportunity.'
        },
    ];

    const leadership = [
        {
            name: 'Robert Anderson',
            role: 'Managing Partner',
            bio: '30+ years of experience in public accounting and advisory services.',
            linkedin: '#',
            email: 'randerson@precisionaccounting.com'
        },
        {
            name: 'Jennifer Martinez',
            role: 'Partner, Tax Services',
            bio: 'Expert in corporate taxation and international tax planning.',
            linkedin: '#',
            email: 'jmartinez@precisionaccounting.com'
        },
        {
            name: 'David Chen',
            role: 'Partner, Audit & Assurance',
            bio: 'Specializes in complex audit engagements for public companies.',
            linkedin: '#',
            email: 'dchen@precisionaccounting.com'
        },
        {
            name: 'Sarah Thompson',
            role: 'Partner, Advisory Services',
            bio: 'Leads M&A advisory and business transformation initiatives.',
            linkedin: '#',
            email: 'sthompson@precisionaccounting.com'
        },
    ];

    const timeline = [
        { year: '1999', title: 'Founded', description: 'Precision Accounting established with a vision to provide excellent financial services.' },
        { year: '2005', title: 'National Expansion', description: 'Opened offices in major cities across the country.' },
        { year: '2012', title: 'Technology Integration', description: 'Launched cloud-based accounting platform for clients.' },
        { year: '2018', title: 'Advisory Services', description: 'Expanded into strategic advisory and consulting services.' },
        { year: '2024', title: 'Industry Leader', description: 'Recognized as one of the top accounting firms in the nation.' },
    ];

    // Scroll to section if hash is present in URL
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <main className="about-page">
            <Hero
                size="medium"
                subtitle="About Precision Accounting"
                title="Building Financial Excellence Since 1999"
                description="We are a team of dedicated professionals committed to helping businesses achieve their financial goals through expert guidance and innovative solutions."
                primaryCTA={{ label: "Meet Our Team", path: "/about/leadership" }}
                secondaryCTA={{ label: "Our Services", path: "/services" }}
            />

            {/* Mission Section */}
            <section className="mission-section section-lg">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-content">
                            <span className="section-subtitle">Our Mission</span>
                            <h2>Empowering Businesses Through Financial Clarity</h2>
                            <p>
                                At Precision Accounting, our mission is to provide exceptional accounting,
                                tax, and advisory services that empower our clients to make informed decisions
                                and achieve sustainable growth.
                            </p>
                            <p>
                                We believe that every business, regardless of size, deserves access to
                                world-class financial expertise. Our approach combines deep technical knowledge
                                with a genuine understanding of your business challenges.
                            </p>
                            <div className="mission-features">
                                <div className="feature">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                    <span>Personalized Service</span>
                                </div>
                                <div className="feature">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                    <span>Industry Expertise</span>
                                </div>
                                <div className="feature">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                    <span>Proactive Guidance</span>
                                </div>
                            </div>
                        </div>
                        <div className="mission-image">
                            <div className="image-placeholder">
                                <span>🏢</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <Stats
                stats={stats}
                variant="minimal"
                subtitle="By The Numbers"
                title="A Track Record of Excellence"
            />

            {/* Values Section */}
            <section id="values" className="values-section section-lg bg-dark">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-subtitle">Our Values</span>
                        <h2 className="text-white">The Principles That Guide Us</h2>
                    </div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <span className="value-icon">{value.icon}</span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section section-lg">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-subtitle">Our Journey</span>
                        <h2>25 Years of Growth & Excellence</h2>
                    </div>

                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-marker">
                                    <span className="timeline-year">{item.year}</span>
                                </div>
                                <div className="timeline-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section id="leadership" className="leadership-section section-lg bg-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-subtitle">Leadership</span>
                        <h2>Meet Our Partners</h2>
                        <p className="section-description">
                            Our leadership team brings decades of combined experience across
                            all areas of accounting and advisory services.
                        </p>
                    </div>

                    <div className="leadership-grid">
                        {leadership.map((member, index) => (
                            <TeamCard key={index} {...member} />
                        ))}
                    </div>

                    <div className="section-footer text-center">
                        <Link to="/about/leadership" className="btn btn-dark btn-lg">
                            View Full Team
                        </Link>
                    </div>
                </div>
            </section>

            {/* Recognition Section */}
            <section id="recognition" className="recognition-section section-lg">
                <div className="container">
                    <div className="recognition-content">
                        <div className="recognition-text">
                            <span className="section-subtitle">Recognition</span>
                            <h2>Industry Awards & Accolades</h2>
                            <p>
                                Our commitment to excellence has been recognized by leading industry
                                organizations and publications.
                            </p>
                        </div>

                        <div className="awards-grid">
                            <div className="award-item">
                                <div className="award-icon">🏆</div>
                                <h4>Top 100 Accounting Firms</h4>
                                <p>Accounting Today, 2024</p>
                            </div>
                            <div className="award-item">
                                <div className="award-icon">⭐</div>
                                <h4>Best Places to Work</h4>
                                <p>Forbes, 2024</p>
                            </div>
                            <div className="award-item">
                                <div className="award-icon">🎖️</div>
                                <h4>Excellence in Client Service</h4>
                                <p>AICPA, 2023</p>
                            </div>
                            <div className="award-item">
                                <div className="award-icon">💎</div>
                                <h4>Most Innovative Firm</h4>
                                <p>CPA Practice Advisor, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta section-lg bg-dark">
                <div className="container">
                    <div className="cta-content text-center">
                        <h2>Ready to Work with Us?</h2>
                        <p>
                            Let's discuss how our team can help your business achieve its financial goals.
                        </p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Contact Us
                            </Link>
                            <Link to="/careers" className="btn btn-outline btn-lg">
                                Join Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
