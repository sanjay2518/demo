import { useEffect, useState, useRef } from 'react';
import './Stats.css';

const Stats = ({ stats, variant = 'default', title, subtitle }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={`stats-section stats-${variant}`}>
            <div className="container">
                {(title || subtitle) && (
                    <div className="stats-header">
                        {subtitle && <span className="stats-subtitle">{subtitle}</span>}
                        {title && <h2 className="stats-title">{title}</h2>}
                    </div>
                )}

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`stat-item ${isVisible ? 'visible' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="stat-icon">
                                {stat.icon}
                            </div>
                            <div className="stat-content">
                                <span className="stat-number">
                                    {isVisible && (
                                        <CountUp end={stat.value} suffix={stat.suffix || ''} prefix={stat.prefix || ''} />
                                    )}
                                </span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Count up animation component
const CountUp = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <>{prefix}{count.toLocaleString()}{suffix}</>;
};

export default Stats;
