import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import './Careers.css';

const Careers = () => {
    const location = useLocation();
    const [activeFilter, setActiveFilter] = useState('all');

    // Handle hash navigation for scrolling to sections
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

    const departments = [
        { value: 'all', label: 'All Departments' },
        { value: 'audit', label: 'Audit & Assurance' },
        { value: 'tax', label: 'Tax' },
        { value: 'advisory', label: 'Advisory' },
        { value: 'operations', label: 'Operations' },
    ];

    const benefits = [
        { icon: '💰', title: 'Competitive Compensation', description: 'Industry-leading salaries and annual bonuses based on performance.' },
        { icon: '🏥', title: 'Health & Wellness', description: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
        { icon: '📚', title: 'Learning & Development', description: 'Continuous training, CPA support, and professional development opportunities.' },
        { icon: '🏖️', title: 'Generous PTO', description: 'Flexible time off, holidays, and sabbatical programs for work-life balance.' },
        { icon: '💼', title: 'Retirement Benefits', description: '401(k) with company match and financial planning resources.' },
        { icon: '🏠', title: 'Flexible Work', description: 'Hybrid work arrangements and remote work opportunities.' },
    ];

    const jobs = [
        {
            id: 1,
            title: 'Senior Audit Manager',
            department: 'audit',
            location: 'New York, NY',
            type: 'Full-time',
            experience: '8+ years',
            path: '/careers/jobs/senior-audit-manager'
        },
        {
            id: 2,
            title: 'Tax Senior Associate',
            department: 'tax',
            location: 'Chicago, IL',
            type: 'Full-time',
            experience: '3-5 years',
            path: '/careers/jobs/tax-senior-associate'
        },
        {
            id: 3,
            title: 'M&A Advisory Consultant',
            department: 'advisory',
            location: 'Los Angeles, CA',
            type: 'Full-time',
            experience: '5-7 years',
            path: '/careers/jobs/ma-advisory-consultant'
        },
        {
            id: 4,
            title: 'Staff Accountant',
            department: 'audit',
            location: 'Boston, MA',
            type: 'Full-time',
            experience: '0-2 years',
            path: '/careers/jobs/staff-accountant'
        },
        {
            id: 5,
            title: 'International Tax Manager',
            department: 'tax',
            location: 'Remote',
            type: 'Full-time',
            experience: '6-8 years',
            path: '/careers/jobs/international-tax-manager'
        },
        {
            id: 6,
            title: 'Operations Coordinator',
            department: 'operations',
            location: 'New York, NY',
            type: 'Full-time',
            experience: '2-4 years',
            path: '/careers/jobs/operations-coordinator'
        },
    ];

    const filteredJobs = jobs.filter(job =>
        activeFilter === 'all' || job.department === activeFilter
    );

    const values = [
        { title: 'Growth Mindset', description: 'We invest in our people and support continuous learning.' },
        { title: 'Collaboration', description: 'We work together, share knowledge, and celebrate success.' },
        { title: 'Diversity & Inclusion', description: 'We embrace diverse perspectives and foster belonging.' },
        { title: 'Work-Life Balance', description: 'We believe personal well-being drives professional success.' },
    ];

    return (
        <main className="careers-page">
            <Hero
                size="medium"
                subtitle="Join Our Team"
                title="Build Your Career at Precision Accounting"
                description="Join a team of passionate professionals who are committed to making a difference for our clients and communities."
                primaryCTA={{ label: "View Open Positions", path: "#jobs" }}
                secondaryCTA={{ label: "Our Culture", path: "#culture" }}
            />

            {/* Why Join Us */}
            <section className="why-join section-lg">
                <div className="container">
                    <div className="why-join-content">
                        <div className="why-join-text">
                            <span className="section-subtitle">Why Precision</span>
                            <h2>More Than a Job—A Career You'll Love</h2>
                            <p>
                                At Precision Accounting, we believe in investing in our people.
                                We provide the resources, mentorship, and opportunities you need
                                to grow your career and achieve your goals.
                            </p>
                            <ul className="why-join-list">
                                <li>Work with Fortune 500 clients and innovative startups</li>
                                <li>Access world-class training and development programs</li>
                                <li>Build lasting relationships with supportive colleagues</li>
                                <li>Make a real impact in your community</li>
                            </ul>
                        </div>
                        <div className="why-join-image">
                            <div className="image-placeholder">
                                <span>👥</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="benefits-section section-lg bg-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-subtitle">Benefits</span>
                        <h2>Taking Care of Our People</h2>
                        <p className="section-description">
                            We offer comprehensive benefits designed to support your health,
                            wealth, and overall well-being.
                        </p>
                    </div>

                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-item">
                                <span className="benefit-icon">{benefit.icon}</span>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture */}
            <section id="culture" className="culture-section section-lg bg-dark">
                <div className="container">
                    <div className="culture-content">
                        <div className="culture-text">
                            <span className="section-subtitle">Our Culture</span>
                            <h2 className="text-white">What Makes Us Different</h2>
                            <p>
                                Our culture is built on shared values that guide how we work
                                with each other and serve our clients.
                            </p>
                        </div>

                        <div className="culture-values">
                            {values.map((value, index) => (
                                <div key={index} className="culture-value">
                                    <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
                                    <div className="value-content">
                                        <h4>{value.title}</h4>
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="jobs-section section-lg">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <span className="section-subtitle">Open Positions</span>
                            <h2>Find Your Next Opportunity</h2>
                        </div>

                        <div className="jobs-filters">
                            {departments.map(dept => (
                                <button
                                    key={dept.value}
                                    className={`filter-btn ${activeFilter === dept.value ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(dept.value)}
                                >
                                    {dept.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="jobs-list">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map(job => (
                                <Link key={job.id} to={job.path} className="job-card">
                                    <div className="job-info">
                                        <h3>{job.title}</h3>
                                        <div className="job-meta">
                                            <span className="job-department">{departments.find(d => d.value === job.department)?.label}</span>
                                            <span className="job-location">
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                                </svg>
                                                {job.location}
                                            </span>
                                            <span className="job-type">{job.type}</span>
                                            <span className="job-experience">{job.experience}</span>
                                        </div>
                                    </div>
                                    <div className="job-arrow">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="no-jobs">
                                <p>No positions available in this department. Check back soon!</p>
                            </div>
                        )}
                    </div>

                    <div className="jobs-cta text-center">
                        <p>Don't see a position that fits? We're always looking for talented people.</p>
                        <Link to="/contact" className="btn btn-dark btn-lg">
                            Submit General Application
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="employee-stories section-lg bg-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-subtitle">Employee Stories</span>
                        <h2>Hear From Our Team</h2>
                    </div>

                    <div className="stories-grid">
                        <div className="story-card">
                            <p className="story-quote">
                                "Joining Precision was the best career decision I've made. The mentorship
                                and growth opportunities have been incredible."
                            </p>
                            <div className="story-author">
                                <div className="author-avatar">AM</div>
                                <div className="author-info">
                                    <h4>Alex Morgan</h4>
                                    <span>Audit Manager, 5 years</span>
                                </div>
                            </div>
                        </div>

                        <div className="story-card">
                            <p className="story-quote">
                                "The work-life balance here is real. I feel supported both professionally
                                and personally."
                            </p>
                            <div className="story-author">
                                <div className="author-avatar">JC</div>
                                <div className="author-info">
                                    <h4>Jessica Chen</h4>
                                    <span>Tax Senior, 3 years</span>
                                </div>
                            </div>
                        </div>

                        <div className="story-card">
                            <p className="story-quote">
                                "The diverse client base keeps every day interesting. I'm constantly
                                learning and growing."
                            </p>
                            <div className="story-author">
                                <div className="author-avatar">MR</div>
                                <div className="author-info">
                                    <h4>Marcus Rodriguez</h4>
                                    <span>Advisory Consultant, 2 years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="careers-cta section-lg bg-dark">
                <div className="container">
                    <div className="cta-content text-center">
                        <h2>Ready to Start Your Journey?</h2>
                        <p>
                            Explore our open positions and take the first step toward an amazing career.
                        </p>
                        <Link to="#jobs" className="btn btn-primary btn-lg">
                            View All Positions
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Careers;
