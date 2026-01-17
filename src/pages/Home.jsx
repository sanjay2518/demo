import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Stats from '../components/Stats';
import InsightCard from '../components/InsightCard';
import Testimonials from '../components/Testimonials';
import './Home.css';

const Home = () => {
    const services = [
        {
            icon: '📊',
            title: 'Audit & Assurance',
            description: 'Comprehensive audit services that provide stakeholder confidence and enhance credibility.',
            path: '/services/audit',
            tag: 'Most Popular'
        },
        {
            icon: '📑',
            title: 'Tax Services',
            description: 'Strategic tax planning and compliance services to maximize your financial efficiency.',
            path: '/services/tax'
        },
        {
            icon: '💼',
            title: 'Financial Advisory',
            description: 'Expert guidance on mergers, acquisitions, and business transformations.',
            path: '/services/advisory'
        },
        {
            icon: '📒',
            title: 'Bookkeeping',
            description: 'Accurate and timely bookkeeping to keep your financials in perfect order.',
            path: '/services/bookkeeping'
        },
        {
            icon: '💰',
            title: 'Payroll Services',
            description: 'Efficient payroll processing with full compliance and employee self-service.',
            path: '/services/payroll'
        },
        {
            icon: '🎯',
            title: 'Business Consulting',
            description: 'Strategic insights to help your business grow and overcome challenges.',
            path: '/services/consulting'
        },
    ];

    const stats = [
        { value: 2026, suffix: '', label: 'Founded', icon: '🚀' },
        { value: 50, suffix: '+', label: 'Clients Served', icon: '👥' },
        { value: 100, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
        { value: 4, suffix: '+', label: 'Expert Team', icon: '👨‍💼' },
    ];

    const industries = [
        { name: 'Healthcare', icon: '🏥', path: '/industries/healthcare' },
        { name: 'Technology', icon: '💻', path: '/industries/technology' },
        { name: 'Manufacturing', icon: '🏭', path: '/industries/manufacturing' },
        { name: 'Real Estate', icon: '🏢', path: '/industries/real-estate' },
        { name: 'Retail', icon: '🛒', path: '/industries/retail' },
        { name: 'Non-Profit', icon: '🤝', path: '/industries/non-profit' },
    ];

    const insights = [
        {
            title: '2026 Tax Planning Strategies for Startups',
            excerpt: 'Discover essential tax-saving strategies that can help your startup minimize liability and maximize growth potential.',
            category: 'Tax Update',
            date: 'January 10, 2026',
            readTime: '5 min read',
            path: '/insights/tax-planning-2026',
            featured: true
        },
        {
            title: 'Understanding the New Audit Standards',
            excerpt: 'A comprehensive guide to the latest changes in audit requirements and how they affect your business.',
            category: 'Audit',
            date: 'January 8, 2026',
            readTime: '4 min read',
            path: '/insights/new-audit-standards'
        },
        {
            title: 'CFO Insights: Managing Cash Flow for New Businesses',
            excerpt: 'Expert tips on maintaining healthy cash flow and financial stability during your startup phase.',
            category: 'Advisory',
            date: 'January 5, 2026',
            readTime: '6 min read',
            path: '/insights/cfo-cash-flow'
        },
    ];

    const testimonials = [
        {
            text: "Precision Accounting has transformed how we manage our finances. Their strategic tax planning saved us over $200,000 in our first year working together.",
            name: "Sarah Johnson",
            role: "CEO",
            company: "TechVentures Inc.",
            rating: 5
        },
        {
            text: "The audit team was professional, thorough, and provided invaluable insights that helped strengthen our internal controls. Highly recommended!",
            name: "Michael Chen",
            role: "CFO",
            company: "Global Manufacturing Co.",
            rating: 5
        },
        {
            text: "Their payroll services have been a game-changer for our HR department. Accurate, on-time, and their support team is always there when we need them.",
            name: "Emily Rodriguez",
            role: "HR Director",
            company: "Healthcare Solutions",
            rating: 5
        },
    ];

    return (
        <main className="home-page">
            {/* Hero Section */}
            <Hero
                subtitle="Your Modern Financial Partner – Est. 2026"
                title={<>Precision in Every <span>Number.</span> Excellence in Every <span>Solution.</span></>}
                description="We are a fresh, innovative accounting startup providing comprehensive tax, and advisory services that help businesses achieve financial clarity and sustainable growth."
                primaryCTA={{ label: "Get Started", path: "/contact" }}
                secondaryCTA={{ label: "Our Services", path: "/services" }}
            />

            {/* Value Proposition */}
            <section className="value-prop section">
                <div className="container">
                    <div className="value-prop-content">
                        <div className="value-prop-text">
                            <span className="section-subtitle">Why Choose Us</span>
                            <h2>Connecting Financial Expertise with Business Success</h2>
                            <p>
                                At Precision Accounting, we believe that every business deserves access to
                                world-class financial expertise. Our team of dedicated professionals works
                                alongside you to understand your unique challenges and opportunities,
                                delivering customized solutions that drive real results.
                            </p>
                        </div>
                        <div className="value-prop-actions">
                            <Link to="/about" className="btn btn-primary btn-lg">
                                About Us
                            </Link>
                            <Link to="/services" className="btn btn-dark btn-lg">
                                Our Approach
                            </Link>
                            <Link to="/careers" className="btn btn-outline btn-lg">
                                Join Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section section-lg bg-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-subtitle">What We Do</span>
                        <h2>Comprehensive Financial Services</h2>
                        <p className="section-description">
                            From day-to-day bookkeeping to strategic business consulting,
                            we offer a full spectrum of services tailored to your needs.
                        </p>
                    </div>

                    <div className="services-grid grid grid-cols-3">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>

                    <div className="section-footer text-center">
                        <Link to="/services" className="btn btn-primary btn-lg">
                            View All Services
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <Stats
                stats={stats}
                variant="dark"
                subtitle="Our Impact"
                title="Numbers That Speak for Themselves"
            />

            {/* Industries Section */}
            <section className="industries-section section">
                <div className="container">
                    <div className="industries-content">
                        <div className="industries-text">
                            <span className="section-subtitle">Industries We Serve</span>
                            <h2>Deep Expertise Across Sectors</h2>
                            <p>
                                We bring specialized knowledge to each industry we serve, understanding
                                the unique financial challenges and regulatory requirements that affect
                                your business.
                            </p>
                            <Link to="/industries" className="btn btn-dark btn-lg">
                                Explore Industries
                            </Link>
                        </div>

                        <div className="industries-grid">
                            {industries.map((industry, index) => (
                                <Link
                                    key={index}
                                    to={industry.path}
                                    className="industry-card"
                                >
                                    <span className="industry-icon">{industry.icon}</span>
                                    <span className="industry-name">{industry.name}</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials
                testimonials={testimonials}
                subtitle="Client Success Stories"
                title="What Our Clients Say"
            />

            {/* Insights Section */}
            <section className="insights-section section-lg bg-gray">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <span className="section-subtitle">Insights & Updates</span>
                            <h2>The Latest from Precision Accounting</h2>
                        </div>
                        <Link to="/insights" className="btn btn-dark">
                            View All Insights
                        </Link>
                    </div>

                    <div className="insights-grid">
                        {insights.map((insight, index) => (
                            <InsightCard key={index} {...insight} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="home-cta section-lg">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2>Ready to Get Started?</h2>
                            <p>
                                Schedule a free consultation with one of our expert advisors
                                and discover how we can help your business thrive.
                            </p>
                            <div className="cta-actions">
                                <Link to="/contact" className="btn btn-primary btn-lg">
                                    Schedule Consultation
                                </Link>
                                <a href="tel:+918920473074" className="btn btn-outline btn-lg">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                    +91 8920473074
                                </a>
                            </div>
                        </div>
                        <div className="cta-decoration">
                            <div className="cta-circle"></div>
                            <div className="cta-circle"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
