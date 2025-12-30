import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Search from './pages/Search';
import './index.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:section" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceType" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:industryType" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:section" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
