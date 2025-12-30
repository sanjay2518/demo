import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Hero from '../components/Hero';
import InsightCard from '../components/InsightCard';
import './Insights.css';

const Insights = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Handle URL query params for category filtering
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            // Map URL params to filter values
            const categoryMap = {
                'tax': 'tax',
                'reports': 'industry',
                'industry': 'industry',
                'webinars': 'webinar',
                'webinar': 'webinar',
                'audit': 'audit',
                'advisory': 'advisory'
            };
            setActiveFilter(categoryMap[categoryParam] || 'all');
        } else {
            setActiveFilter('all');
        }
    }, [searchParams]);

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

    const categories = [
        { value: 'all', label: 'All' },
        { value: 'tax', label: 'Tax Updates' },
        { value: 'audit', label: 'Audit' },
        { value: 'advisory', label: 'Advisory' },
        { value: 'industry', label: 'Industry Reports' },
        { value: 'webinar', label: 'Webinars' },
    ];

    const insights = [
        {
            id: 1,
            title: '2024 Tax Planning Strategies for Small Businesses',
            excerpt: 'Discover essential tax-saving strategies that can help your small business minimize liability and maximize growth potential in the new year.',
            category: 'tax',
            categoryLabel: 'Tax Update',
            date: 'December 15, 2024',
            readTime: '5 min read',
            path: '/insights/tax-planning-2024',
            featured: true
        },
        {
            id: 2,
            title: 'Understanding the New Audit Standards',
            excerpt: 'A comprehensive guide to the latest changes in audit requirements and how they affect your business compliance.',
            category: 'audit',
            categoryLabel: 'Audit',
            date: 'December 10, 2024',
            readTime: '4 min read',
            path: '/insights/new-audit-standards'
        },
        {
            id: 3,
            title: 'CFO Insights: Managing Cash Flow in Uncertain Times',
            excerpt: 'Expert tips on maintaining healthy cash flow and financial stability during periods of economic uncertainty.',
            category: 'advisory',
            categoryLabel: 'Advisory',
            date: 'December 5, 2024',
            readTime: '6 min read',
            path: '/insights/cfo-cash-flow'
        },
        {
            id: 4,
            title: 'Healthcare Industry Financial Trends 2025',
            excerpt: 'Key financial trends shaping the healthcare industry and what they mean for your organization.',
            category: 'industry',
            categoryLabel: 'Industry Report',
            date: 'November 28, 2024',
            readTime: '8 min read',
            path: '/insights/healthcare-trends-2025'
        },
        {
            id: 5,
            title: 'Webinar: R&D Tax Credit Maximization',
            excerpt: 'Join our experts as they discuss strategies to maximize your R&D tax credits while maintaining compliance.',
            category: 'webinar',
            categoryLabel: 'Webinar',
            date: 'November 20, 2024',
            readTime: '45 min watch',
            path: '/insights/webinars/rd-tax-credit'
        },
        {
            id: 6,
            title: 'State Tax Nexus: What You Need to Know',
            excerpt: 'Understanding state tax nexus requirements in the post-Wayfair era and how to maintain multi-state compliance.',
            category: 'tax',
            categoryLabel: 'Tax Update',
            date: 'November 15, 2024',
            readTime: '7 min read',
            path: '/insights/state-tax-nexus'
        },
        {
            id: 7,
            title: 'M&A Due Diligence Best Practices',
            excerpt: 'Essential due diligence practices to protect your interests in mergers and acquisitions.',
            category: 'advisory',
            categoryLabel: 'Advisory',
            date: 'November 10, 2024',
            readTime: '6 min read',
            path: '/insights/ma-due-diligence'
        },
        {
            id: 8,
            title: 'Technology Sector Financial Outlook',
            excerpt: 'Analysis of financial trends in the technology sector and strategic considerations for tech companies.',
            category: 'industry',
            categoryLabel: 'Industry Report',
            date: 'November 5, 2024',
            readTime: '10 min read',
            path: '/insights/tech-outlook'
        },
        {
            id: 9,
            title: 'Internal Control Assessments: A Practical Guide',
            excerpt: 'Step-by-step guidance on evaluating and strengthening your organization\'s internal controls.',
            category: 'audit',
            categoryLabel: 'Audit',
            date: 'October 30, 2024',
            readTime: '5 min read',
            path: '/insights/internal-controls'
        },
    ];

    const filteredInsights = insights.filter(insight => {
        const matchesFilter = activeFilter === 'all' || insight.category === activeFilter;
        const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <main className="insights-page">
            <Hero
                size="medium"
                subtitle="Our Thinking"
                title="Insights & Resources"
                description="Stay informed with the latest tax updates, industry trends, and expert perspectives from our team."
                primaryCTA={{ label: "Subscribe", path: "/subscribe" }}
            />

            {/* Filters */}
            <section className="insights-filters">
                <div className="container">
                    <div className="filters-bar">
                        <div className="filter-categories">
                            {categories.map(category => (
                                <button
                                    key={category.value}
                                    className={`filter-btn ${activeFilter === category.value ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(category.value)}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>

                        <div className="filter-search">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search insights..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights Grid */}
            <section className="insights-content section-lg">
                <div className="container">
                    {filteredInsights.length > 0 ? (
                        <div className="insights-grid">
                            {filteredInsights.map((insight, index) => (
                                <InsightCard
                                    key={insight.id}
                                    title={insight.title}
                                    excerpt={insight.excerpt}
                                    category={insight.categoryLabel}
                                    date={insight.date}
                                    readTime={insight.readTime}
                                    path={insight.path}
                                    featured={index === 0 && activeFilter === 'all'}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <div className="no-results-icon">🔍</div>
                            <h3>No results found</h3>
                            <p>Try adjusting your search or filter criteria.</p>
                            <button
                                className="btn btn-dark"
                                onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="newsletter-section section-lg bg-dark">
                <div className="container">
                    <div className="newsletter-content">
                        <div className="newsletter-text">
                            <span className="section-subtitle">Stay Informed</span>
                            <h2>Subscribe to Our Newsletter</h2>
                            <p>
                                Get the latest insights, tax updates, and industry news delivered
                                straight to your inbox.
                            </p>
                        </div>

                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="newsletter-input-group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                />
                                <button type="submit" className="btn btn-primary">
                                    Subscribe
                                </button>
                            </div>
                            <p className="newsletter-disclaimer">
                                By subscribing, you agree to our privacy policy. You can unsubscribe at any time.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="resources-section section-lg">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-subtitle">Free Resources</span>
                        <h2>Helpful Tools & Guides</h2>
                    </div>

                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="resource-icon">📅</div>
                            <h3>Tax Calendar 2025</h3>
                            <p>Never miss an important tax deadline with our comprehensive calendar.</p>
                            <a href="#" className="resource-link">
                                Download PDF
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                            </a>
                        </div>

                        <div className="resource-card">
                            <div className="resource-icon">📊</div>
                            <h3>Business Financial Checklist</h3>
                            <p>Essential checklist to keep your business finances in order.</p>
                            <a href="#" className="resource-link">
                                Download PDF
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                            </a>
                        </div>

                        <div className="resource-card">
                            <div className="resource-icon">📖</div>
                            <h3>Small Business Tax Guide</h3>
                            <p>Complete guide to understanding and managing your business taxes.</p>
                            <a href="#" className="resource-link">
                                Download PDF
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Insights;
