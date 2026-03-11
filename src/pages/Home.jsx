import { courseCategories, specificCourseContent } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { Sparkles, Brain, ArrowRight, Zap, Target, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="bg-glow"></div>
      
      {/* HERO SECTION */}
      <section className="hero container flex-center">
        <div className="hero-content text-center">
          <div className="badge glass-panel mb-6 inline-flex">
            <Sparkles size={16} className="text-accent" style={{ color: 'var(--accent-primary)' }}/>
            <span className="ml-2 text-sm font-medium">Nowy paradygmat rozumienia siebie</span>
          </div>
          <h1 className="hero-title">
            <span className="block">Zrozum mechanizmy</span>
            <span className="block text-gradient">własnego życia.</span>
          </h1>
          <p className="hero-subtitle">
            Krótkie kursy tekstowe wyjaśniające działanie umysłu, decyzje i relacje. Zamiast motywacji — precyzyjne modele. Zamiast rad — protokoły wdrożenia.
          </p>
          <div className="hero-actions pt-4">
            <a href="#library" className="btn btn-primary btn-lg">
              Przeglądaj Bibliotekę <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="how-it-works container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">Jak działają kursy LifeOS?</h2>
          <p className="section-subtitle">Struktura oparta na modelowaniu i eksperymentach</p>
        </div>
        
        <div className="process-grid">
          <div className="process-card glass-panel">
            <div className="process-icon-wrap">
              <span className="process-num">1</span>
              <Brain size={32} color="var(--accent-primary)" />
            </div>
            <h3>Rozpoznaj problem</h3>
            <p className="text-secondary">Zaczynamy od namacalnego problemu z życia — tam gdzie czujesz napięcie lub blokadę.</p>
          </div>
          <div className="process-arrow"><ArrowRight className="text-muted" /></div>
          
          <div className="process-card glass-panel">
            <div className="process-icon-wrap">
              <span className="process-num">2</span>
              <Zap size={32} color="var(--accent-secondary)" />
            </div>
            <h3>Poznaj model</h3>
            <p className="text-secondary">Wyjaśniamy precyzyjny mechanizm odpowiadający za ten stan. Minimalna, praktyczna teoria.</p>
          </div>
          <div className="process-arrow"><ArrowRight className="text-muted" /></div>
          
          <div className="process-card glass-panel">
            <div className="process-icon-wrap">
              <span className="process-num">3</span>
              <Target size={32} color="#10b981" />
            </div>
            <h3>Wdrożenie</h3>
            <p className="text-secondary">Otrzymujesz konkretne narzędzia i protokół 14-dniowego eksperymentu w swoim życiu.</p>
          </div>
        </div>
      </section>

      {/* EXAMPLE PEEK */}
      <section className="example-peek-section container">
        <div className="example-peek glass-panel">
          <div className="peek-content">
            <span className="badge-small mb-4">Przykładowy Kurs</span>
            <h2>{specificCourseContent.title}</h2>
            <p className="text-secondary mb-6">{specificCourseContent.freeSection.problem.experiences[0]}</p>
            <Link to="/course/regulacja" className="btn btn-outline">
              Zobacz strukturę kursu
            </Link>
          </div>
          <div className="peek-visual">
            <div className="mockup-window glass-panel">
              <div className="mockup-header">
                <span className="dot bg-red"></span><span className="dot bg-yellow"></span><span className="dot bg-green"></span>
              </div>
              <div className="mockup-body blur-sm">
                <div className="mockup-line w-3/4"></div>
                <div className="mockup-line w-full"></div>
                <div className="mockup-line w-5/6"></div>
                <div className="mockup-box mt-4"></div>
              </div>
              <div className="mockup-overlay flex-center">
                <Lock size={32} className="text-muted" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIBRARY SECTION */}
      <section id="library" className="library-section container">
        <div className="section-header text-center mb-16">
          <h2 className="section-title">Biblioteka Kursów</h2>
          <p className="section-subtitle">Wybierz moduł, którego teraz najbardziej potrzebujesz</p>
        </div>

        <div className="categories-wrapper">
          {courseCategories.map((category, idx) => (
            <div key={idx} className="category-group mb-16">
              <h3 className="category-title mb-8 flex items-center">
                <span className="category-line"></span>
                {category.name}
              </h3>
              <div className="courses-grid">
                {category.courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUNDLES SECTION */}
      <section id="bundles" className="bundles-section container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">Pakiety LifeOS</h2>
          <p className="section-subtitle">Dostęp do całej wiedzy w lepszej cenie</p>
        </div>
        
        <div className="bundles-grid">
          <div className="bundle-card glass-panel">
            <h3>Starter Bundle</h3>
            <div className="bundle-price">700 zł</div>
            <p className="bundle-desc">Wybrane 5 modułów na start.</p>
            <ul className="bundle-features">
              <li>Dowolne 5 kursów z biblioteki</li>
              <li>Podstawowe pule narzędzi</li>
              <li>Bezterminowy dostęp</li>
            </ul>
            <button className="btn btn-outline w-full mt-6">Wybierz Starter</button>
          </div>
          
          <div className="bundle-card glass-panel featured border-accent">
            <div className="featured-ribbon">Najczęstszy wybór</div>
            <h3>LifeOS Core</h3>
            <div className="bundle-price text-accent-gradient">1200 zł</div>
            <p className="bundle-desc">10 kursów rozwiązujących 80% życiowych tarć.</p>
            <ul className="bundle-features">
              <li>10 kursów</li>
              <li>Dostęp do przyszłych aktualizacji</li>
              <li>Wszystkie protokoły wdrożenia</li>
            </ul>
            <button className="btn btn-primary w-full mt-6">Wybierz Core</button>
          </div>
          
          <div className="bundle-card glass-panel">
            <h3>Full Library</h3>
            <div className="bundle-price">2000 zł</div>
            <p className="bundle-desc">Pełny dostęp do 20+ modułów.</p>
            <ul className="bundle-features">
              <li>Wszystkie 20+ kursów</li>
              <li>Architektura całego LifeOS</li>
              <li>Własna ścieżka integracji</li>
            </ul>
            <button className="btn btn-outline w-full mt-6">Wybierz Full</button>
          </div>
        </div>
      </section>

      <style>{`
        /* Utils */
        .mb-4 { margin-bottom: 16px; }
        .mb-6 { margin-bottom: 24px; }
        .mb-8 { margin-bottom: 32px; }
        .mb-12 { margin-bottom: 48px; }
        .mb-16 { margin-bottom: 64px; }
        .mt-4 { margin-top: 16px; }
        .mt-6 { margin-top: 24px; }
        .pt-4 { padding-top: 16px; }
        .w-full { width: 100%; }
        .w-3\\/4 { width: 75%; }
        .w-5\\/6 { width: 83%; }
        .text-center { text-align: center; }
        .inline-flex { display: inline-flex; align-items: center; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .text-sm { font-size: 0.875rem; }
        .font-medium { font-weight: 500; }
        .ml-2 { margin-left: 8px; }
        .block { display: block; }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 1rem;
          transition: all var(--transition-normal);
        }
        
        .btn-lg {
          padding: 16px 32px;
          font-size: 1.125rem;
        }
        
        .btn-primary {
          background: var(--accent-primary);
          color: white;
          box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39);
        }
        
        .btn-primary:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        .btn-outline {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .badge {
          padding: 6px 16px;
          border-radius: 100px;
          border: 1px solid var(--glass-border);
        }

        .badge-small {
          display: inline-block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          color: var(--accent-primary);
          padding: 4px 10px;
          border-radius: 4px;
          background: rgba(59, 130, 246, 0.1);
        }

        /* Hero */
        .hero {
          min-height: 85vh;
          padding-top: 40px;
        }
        
        .hero-content {
          max-width: 800px;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          max-width: 600px;
          margin-inline: auto;
          line-height: 1.6;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Sections common */
        .section-header {
          max-width: 600px;
          margin-inline: auto;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
        }

        /* How it works */
        .how-it-works, .library-section, .bundles-section, .example-peek-section {
          padding: 80px 0;
        }

        .process-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .process-card {
          flex: 1;
          padding: 40px 32px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 280px;
        }

        .process-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .process-icon-wrap {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 24px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
        }

        .process-num {
          position: absolute;
          top: -4px;
          right: 0;
          background: var(--bg-surface);
          border: 1px solid var(--glass-border);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .process-card h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .process-grid {
            flex-direction: column;
          }
          .process-arrow {
            transform: rotate(90deg);
            padding: 20px 0;
          }
        }

        /* Example Peek */
        .example-peek {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 60px;
          border-radius: var(--radius-lg);
          align-items: center;
        }

        .peek-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .mockup-window {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
          height: 300px;
        }

        .mockup-header {
          display: flex;
          gap: 8px;
          padding: 16px;
          background: rgba(255,255,255,0.02);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .bg-red { background: #ef4444; }
        .bg-yellow { background: #f59e0b; }
        .bg-green { background: #10b981; }

        .mockup-body {
          padding: 32px;
        }

        .blur-sm {
          filter: blur(4px);
          opacity: 0.5;
        }

        .mockup-line {
          height: 12px;
          background: rgba(255,255,255,0.1);
          border-radius: 6px;
          margin-bottom: 16px;
        }

        .mockup-box {
          height: 100px;
          background: rgba(255,255,255,0.05);
          border-radius: var(--radius-sm);
        }

        .mockup-overlay {
          position: absolute;
          inset: 0;
          background: rgba(20,20,22, 0.4);
        }

        @media (max-width: 900px) {
          .example-peek {
            grid-template-columns: 1fr;
            padding: 40px 24px;
            gap: 40px;
          }
        }

        /* Library */
        .category-line {
          width: 40px;
          height: 2px;
          background: var(--accent-primary);
          display: inline-block;
          margin-right: 16px;
        }

        .category-title {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        /* Bundles */
        .bundles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: center;
        }

        .bundle-card {
          padding: 48px 32px;
          position: relative;
        }

        .bundle-card.featured {
          transform: scale(1.05);
          border-color: rgba(59, 130, 246, 0.4);
          background: linear-gradient(180deg, rgba(20,20,22,0.8) 0%, rgba(59, 130, 246, 0.05) 100%);
          z-index: 10;
        }

        .featured-ribbon {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent-primary);
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 4px 16px;
          border-radius: 100px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .bundle-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .bundle-price {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .bundle-desc {
          color: var(--text-secondary);
          margin-bottom: 32px;
          line-height: 1.5;
        }

        .bundle-features {
          list-style: none;
          margin-bottom: 32px;
        }

        .bundle-features li {
          padding: 12px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          font-size: 0.95rem;
          display: flex;
          align-items: center;
        }

        .bundle-features li::before {
          content: '✓';
          color: #10b981;
          margin-right: 12px;
          font-weight: bold;
        }

        @media (max-width: 900px) {
          .bundles-grid {
            grid-template-columns: 1fr;
          }
          .bundle-card.featured {
            transform: scale(1);
          }
          .hero-title { font-size: 3rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
