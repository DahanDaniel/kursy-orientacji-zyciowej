import { Link, useLocation } from 'react-router-dom';
import { Compass, Sun, Moon, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        {location.pathname !== '/' ? (
          <Link to="/" className="brand back-btn">
            <ArrowLeft size={20} />
            <span className="brand-text">Wróć do biblioteki</span>
          </Link>
        ) : (
          <Link to="/" className="brand">
            <div className="brand-icon">
              <Compass size={24} color="var(--accent-primary)" />
            </div>
            <span className="brand-text">Kursy Orientacji Życiowej</span>
          </Link>
        )}
        <nav className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Odkryj</Link>
          <a href="/#library">Biblioteka</a>
          <Link to="/how-it-works" className={location.pathname === '/how-it-works' ? 'active' : ''}>Jak to działa?</Link>
          <a href="/#bundles">Pakiety</a>
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="btn-secondary">Zaloguj</button>
        </div>
      </div>
      
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 16px 0;
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-primary);
          transition: opacity var(--transition-normal);
        }
        
        .brand.back-btn:hover {
          opacity: 0.8;
        }
        
        .brand-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(59, 130, 246, 0.1);
        }

        .brand-text {
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: -0.02em;
        }

        .text-secondary {
          color: var(--text-secondary);
          font-weight: 400;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-links a {
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--text-primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          transition: all var(--transition-normal);
        }

        .theme-toggle:hover {
          color: var(--text-primary);
          background: rgba(150, 150, 150, 0.1);
        }

        .btn-secondary {
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          transition: background var(--transition-normal);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
        }
          
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
