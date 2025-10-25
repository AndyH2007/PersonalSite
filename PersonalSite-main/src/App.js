import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, User, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      background: isScrolled ? 'rgba(10, 15, 30, 0.95)' : 'rgba(10, 15, 30, 0.7)',
      backdropFilter: 'blur(20px)',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1.25rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 50%, #ec4899 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: '#06b6d4',
      display: 'inline-block',
      letterSpacing: '-0.5px',
      textDecoration: 'none',
      transition: 'transform 0.2s ease'
    },
    navLinks: {
      display: 'flex',
      gap: '2.5rem',
      alignItems: 'center'
    },
    navLink: (active) => ({
      color: active ? '#06b6d4' : 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: active ? '600' : '500',
      padding: '0.5rem 0',
      position: 'relative',
      transition: 'color 0.2s ease',
      borderBottom: active ? '2px solid #06b6d4' : '2px solid transparent',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }),
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    },
    socialLink: {
      color: 'rgba(255, 255, 255, 0.6)',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      padding: '0.5rem',
      borderRadius: '0.5rem'
    },
    mobileMenuButton: {
      display: 'none',
      background: 'transparent',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: '0.5rem'
    },
    mobileMenu: {
      display: 'none',
      position: 'fixed',
      top: '80px',
      left: 0,
      right: 0,
      background: 'rgba(10, 15, 30, 0.98)',
      backdropFilter: 'blur(20px)',
      padding: '2rem',
      flexDirection: 'column',
      gap: '1.5rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.navContent}>
        <Link
          to="/"
          style={styles.logo}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Andy Hou
        </Link>

        <div style={styles.navLinks} className="desktop-nav">
          <Link
            to="/"
            style={styles.navLink(isActive('/'))}
            onMouseEnter={(e) => !isActive('/') && (e.target.style.color = '#06b6d4')}
            onMouseLeave={(e) => !isActive('/') && (e.target.style.color = 'rgba(255, 255, 255, 0.8)')}
          >
            <HomeIcon size={18} />
            Home
          </Link>
          
          <Link
            to="/about"
            style={styles.navLink(isActive('/about'))}
            onMouseEnter={(e) => !isActive('/about') && (e.target.style.color = '#06b6d4')}
            onMouseLeave={(e) => !isActive('/about') && (e.target.style.color = 'rgba(255, 255, 255, 0.8)')}
          >
            <User size={18} />
            About
          </Link>

          <div style={styles.socialLinks}>
            <a
              href="https://github.com/AndyH2007"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#06b6d4';
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <Github size={20} />
            </a>
            
            <a
              href="https://linkedin.com/in/andyhou2007/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#a855f7';
                e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <Linkedin size={20} />
            </a>
            
            <a
              href="mailto:ahnoduy77@gmail.com"
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#10b981';
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <button
          style={styles.mobileMenuButton}
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div style={styles.mobileMenu} className="mobile-menu">
          <Link
            to="/"
            style={{ ...styles.navLink(isActive('/')), fontSize: '1.125rem' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <HomeIcon size={20} />
            Home
          </Link>
          
          <Link
            to="/about"
            style={{ ...styles.navLink(isActive('/about')), fontSize: '1.125rem' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <User size={20} />
            About
          </Link>

          <div style={{ ...styles.socialLinks, marginTop: '1rem', justifyContent: 'center' }}>
            <a href="https://github.com/AndyH2007" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/andyhou2007/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:ahnoduy77@gmail.com" style={styles.socialLink}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

function App() {
  const styles = {
    app: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0f1e 0%, #1a1347 50%, #0a0f1e 100%)',
      color: 'white',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      position: 'relative'
    },
    backgroundPattern: {
      position: 'fixed',
      inset: 0,
      opacity: 0.15,
      backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"0.08\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      pointerEvents: 'none',
      zIndex: 0
    },
    content: {
      position: 'relative',
      zIndex: 1
    }
  };

  return (
    <Router>
      <div style={styles.app}>
        <div style={styles.backgroundPattern}></div>
        <div style={styles.content}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;