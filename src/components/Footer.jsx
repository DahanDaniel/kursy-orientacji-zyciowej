const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="brand-text">LifeOS <span className="text-secondary">Courses</span></span>
          <p className="footer-desc">Zrozum mechanizmy własnego doświadczenia. Uporządkuj życie.</p>
        </div>
        <div className="footer-links">
          <span>&copy; {new Date().getFullYear()} Kursy Orientacji Życiowej</span>
          <div className="footer-nav">
            <a href="#">Regulamin</a>
            <a href="#">Polityka prywatności</a>
          </div>
        </div>
      </div>
      
      <style>{`
        .footer {
          margin-top: 80px;
          padding: 60px 0 40px;
          border-top: 1px solid var(--glass-border);
          background: var(--bg-surface);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .footer-brand .brand-text {
          font-weight: 700;
          font-size: 1.25rem;
          display: block;
          margin-bottom: 12px;
        }

        .footer-desc {
          color: var(--text-secondary);
          max-width: 300px;
        }

        .footer-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .footer-nav {
          display: flex;
          gap: 24px;
        }

        .footer-nav a:hover {
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .footer-links {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
