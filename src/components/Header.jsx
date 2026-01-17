import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  }, [location]);

  const menuItems = [
    {
      label: 'Who We Are',
      path: '/about',
      submenu: [
        { label: 'Overview', path: '/about' },
        { label: 'Our Leadership', path: '/about#leadership' },
        { label: 'Our Values', path: '/about#values' },
        { label: 'Recognition', path: '/about#recognition' },
        { label: 'Newsroom', path: '/insights' },
      ]
    },
    {
      label: 'What We Do',
      path: '/services',
      submenu: [
        {
          label: 'Services',
          items: [
            { label: 'Audit & Assurance', path: '/services/audit', icon: '📊' },
            { label: 'Tax Services', path: '/services/tax', icon: '📑' },
            { label: 'Financial Advisory', path: '/services/advisory', icon: '💼' },
            { label: 'Bookkeeping', path: '/services/bookkeeping', icon: '📒' },
            { label: 'Payroll Services', path: '/services/payroll', icon: '💰' },
            { label: 'Business Consulting', path: '/services/consulting', icon: '🎯' },
          ]
        },
        {
          label: 'Industries',
          items: [
            { label: 'Healthcare', path: '/industries/healthcare', icon: '🏥' },
            { label: 'Technology', path: '/industries/technology', icon: '💻' },
            { label: 'Manufacturing', path: '/industries/manufacturing', icon: '🏭' },
            { label: 'Real Estate', path: '/industries/real-estate', icon: '🏢' },
            { label: 'Retail', path: '/industries/retail', icon: '🛒' },
            { label: 'Non-Profit', path: '/industries/non-profit', icon: '🤝' },
          ]
        }
      ]
    },
    {
      label: 'Insights',
      path: '/insights',
      submenu: [
        { label: 'All Insights', path: '/insights' },
        { label: 'Tax Updates', path: '/insights?category=tax' },
        { label: 'Industry Reports', path: '/insights?category=reports' },
        { label: 'Webinars', path: '/insights?category=webinars' },
        { label: 'Resources', path: '/insights#resources' },
      ]
    },
    {
      label: 'Careers',
      path: '/careers',
      submenu: [
        { label: 'Why Join Us', path: '/careers#why-join' },
        { label: 'Open Positions', path: '/careers#positions' },
        { label: 'Culture', path: '/careers#culture' },
        { label: 'Benefits', path: '/careers#benefits' },
      ]
    },
  ];

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
    setActiveSubmenu(null);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Quick search from suggestion tags
  const handleQuickSearch = (term) => {
    navigate(`/search?q=${encodeURIComponent(term)}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-icon">◆</span>
            <span className="logo-text">
              <span className="logo-primary">Precision</span>
              <span className="logo-secondary">Accounting</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="nav-item"
                  onMouseEnter={() => handleDropdownEnter(index)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link to={item.path} className="nav-link">
                    {item.label}
                    <svg className="nav-arrow" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {item.submenu && activeDropdown === index && (
                    <div className="mega-menu">
                      <div className="mega-menu-content">
                        {item.submenu[0]?.items ? (
                          // Multi-column submenu (Services)
                          <div className="mega-menu-grid">
                            {item.submenu.map((category, catIndex) => (
                              <div key={catIndex} className="mega-menu-column">
                                <h4 className="mega-menu-title">{category.label}</h4>
                                <ul className="mega-menu-list">
                                  {category.items.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <Link to={subItem.path} className="mega-menu-link">
                                        <span className="mega-menu-icon">{subItem.icon}</span>
                                        <span>{subItem.label}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          // Single column submenu
                          <ul className="mega-menu-simple">
                            {item.submenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link to={subItem.path} className="mega-menu-link">
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <button
              className="action-btn search-btn"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            <Link to="/contact" className="btn btn-primary header-cta">
              Contact Us
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {menuItems.map((item, index) => (
            <div key={index} className="mobile-nav-item">
              <button
                className="mobile-nav-link"
                onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
              >
                {item.label}
                <svg className={`mobile-arrow ${activeSubmenu === index ? 'rotated' : ''}`} viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" fill="currentColor" />
                </svg>
              </button>

              {item.submenu && activeSubmenu === index && (
                <div className="mobile-submenu">
                  {item.submenu[0]?.items ? (
                    item.submenu.map((category, catIndex) => (
                      <div key={catIndex} className="mobile-submenu-category">
                        <h5>{category.label}</h5>
                        {category.items.map((subItem, subIndex) => (
                          <Link key={subIndex} to={subItem.path} className="mobile-submenu-link">
                            <span>{subItem.icon}</span> {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ))
                  ) : (
                    item.submenu.map((subItem, subIndex) => (
                      <Link key={subIndex} to={subItem.path} className="mobile-submenu-link">
                        {subItem.label}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="mobile-menu-footer">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="search-modal" onClick={() => setIsSearchOpen(false)}>
          <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearch} className="search-form">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search services, insights, industries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="button" className="search-close" onClick={() => setIsSearchOpen(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </form>
            <div className="search-suggestions">
              <h4>Popular Searches</h4>
              <div className="search-tags">
                <span onClick={() => handleQuickSearch('Tax Planning')}>Tax Planning</span>
                <span onClick={() => handleQuickSearch('Audit Services')}>Audit Services</span>
                <span onClick={() => handleQuickSearch('Payroll')}>Payroll</span>
                <span onClick={() => handleQuickSearch('Business Advisory')}>Business Advisory</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
};

export default Header;
