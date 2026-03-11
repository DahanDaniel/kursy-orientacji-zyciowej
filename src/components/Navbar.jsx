import { Link, useLocation } from 'react-router-dom';
import { Compass } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="navbar glass-panel">
      <div className="container nav-container">
        <Link to="/" className="brand">
          <div className="brand-icon">
            <Compass size={24} color="var(--accent-primary)" />
          </div>
          <span className="brand-text">LifeOS <span className="text-secondary">Courses</span></span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Odkryj</Link>
          <a href="#library">Biblioteka</a>
          <a href="#bundles">Pakiety</a>
        </nav>
        <div className="nav-actions">
          <button className="btn-secondary">Zaloguj</button>
        </div>
      </div>
      
      <style>{`
        .navbar {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 32px);
          max-width: var(--max-width);
          z-index: 1000;
          padding: 12px 24px;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
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
