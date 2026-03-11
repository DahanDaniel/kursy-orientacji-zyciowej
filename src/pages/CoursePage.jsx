import { useParams, Link } from 'react-router-dom';
import { specificCourseContent, allCoursesFlat } from '../data/courses';
import { Lock, Settings, Shuffle, ArrowRight, Zap, Target } from 'lucide-react';

const CoursePage = () => {
  const { id } = useParams();
  
  // For MVP, we use the detailed metamodel for "regulacja" if it matches,
  // otherwise, we just show a generic placeholder based on the basic course data.
  const course = id === 'regulacja' 
    ? specificCourseContent 
    : allCoursesFlat.find(c => c.id === id);

  if (!course) {
    return <div className="container mt-16 text-center">Kurs nie istnieje.</div>;
  }

  const isDetailed = id === 'regulacja';

  return (
    <div className="course-page">
      <div className="bg-glow"></div>
      
      {/* HEADER SECTION */}
      <header className="course-header container">
        <Link to="/" className="back-link">
          <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
          <span>Wróć do biblioteki</span>
        </Link>
        <div className="badge-small mb-6">Moduł LifeOS</div>
        <h1 className="course-title-main">{course.title}</h1>
      </header>

      {/* FREE SECTION */}
      <section className="free-section container">
        <div className="glass-panel p-12 mb-12">
          <div className="section-head flex items-center mb-8">
            <div className="icon-wrap bg-accent">
              <Zap size={24} />
            </div>
            <h2 className="text-2xl font-bold ml-4">
              {isDetailed ? course.freeSection.problem.title : "Problem doświadczeniowy"}
            </h2>
          </div>
          <div className="problem-content">
            {isDetailed ? (
              <ul className="experience-list">
                {course.freeSection.problem.experiences.map((exp, idx) => (
                  <li key={idx} className="exp-item">{exp}</li>
                ))}
              </ul>
            ) : (
              <p className="text-lg">{course.problem}</p>
            )}
          </div>
        </div>

        <div className="glass-panel p-12 mb-12 border-accent-subtle">
          <div className="section-head flex items-center mb-8">
            <div className="icon-wrap bg-secondary">
              <Settings size={24} />
            </div>
            <h2 className="text-2xl font-bold ml-4">
              {isDetailed ? course.freeSection.modelIntro.title : "Model rzeczywistości (Zarys)"}
            </h2>
          </div>
          <div className="model-intro-content">
            {isDetailed ? (
              <>
                <p className="text-xl font-medium mb-6 text-accent-gradient">
                  {course.freeSection.modelIntro.description}
                </p>
                <div className="model-details-grid">
                  {course.freeSection.modelIntro.details.map((detail, idx) => (
                    <div key={idx} className="model-detail-card">
                      {detail}
                    </div>
                  ))}
                </div>
                <div className="hypothesis-box mt-8">
                  <strong>Mechanika:</strong> {course.freeSection.modelIntro.assumption}
                </div>
              </>
            ) : (
              <p className="text-lg">{course.model}</p>
            )}
          </div>
        </div>
      </section>

      {/* PAYWALL CTA */}
      <div className="paywall-container container">
        <div className="paywall-card glass-panel text-center">
          <Lock size={40} className="mx-auto mb-6 text-accent-secondary" />
          <h2 className="text-3xl font-bold mb-4">Odblokuj pełny mechanizm</h2>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Uzyskaj dostęp do narzędzi, protokołu wdrożenia i pełnej reinterpretacji, aby trwale rozwiązać ten problem.
          </p>
          <button className="btn btn-primary btn-lg w-full max-w-sm">
            Kup pełny kurs – {course.price} zł
          </button>
        </div>
      </div>

      {/* BLURRED PAID SECTION */}
      <section className="paid-section-blurred container">
        <div className="blur-overlay">
          <div className="glass-panel p-12 mb-8">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Shuffle className="mr-4" /> Reinterpretacja doświadczenia
            </h2>
            <div className="mockup-lines">
              <div className="line line-100"></div>
              <div className="line line-80"></div>
              <div className="line line-90"></div>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="box w-1-3 h-32"></div>
              <div className="box w-1-3 h-32"></div>
              <div className="box w-1-3 h-32"></div>
            </div>
            <div className="line line-60 mt-8"></div>
          </div>

          <div className="glass-panel p-12 mb-8">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Target className="mr-4" /> Narzędzia i Protokół Wdrożenia (14 dni)
            </h2>
            <div className="mt-8 flex gap-6 flex-col">
              <div className="box w-100 h-24"></div>
              <div className="box w-100 h-24"></div>
              <div className="box w-100 h-24"></div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .course-page {
          padding-top: 40px;
          padding-bottom: 80px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 32px;
          transition: color var(--transition-normal);
        }

        .back-link:hover {
          color: var(--text-primary);
        }

        .course-title-main {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 60px;
          background: linear-gradient(135deg, #fff, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Utils inside component */
        .p-12 { padding: 48px; }
        .mb-4 { margin-bottom: 16px; }
        .mb-6 { margin-bottom: 24px; }
        .mb-8 { margin-bottom: 32px; }
        .mb-12 { margin-bottom: 48px; }
        .mt-8 { margin-top: 32px; }
        .mt-16 { margin-top: 64px; }
        .ml-4 { margin-left: 16px; }
        .mr-4 { margin-right: 16px; }
        .mx-auto { margin-inline: auto; }
        .text-center { text-align: center; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-3xl { font-size: 2rem; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .gap-4 { gap: 16px; }
        .gap-6 { gap: 24px; }
        .max-w-2xl { max-width: 672px; }
        .max-w-sm { max-width: 384px; }
        .text-secondary { color: var(--text-secondary); }
        .text-accent-secondary { color: var(--accent-secondary); }

        .badge-small {
          display: inline-block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          color: var(--accent-primary);
          padding: 6px 12px;
          border-radius: 4px;
          background: rgba(59, 130, 246, 0.1);
        }

        .icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          color: white;
        }

        .bg-accent { background: var(--accent-primary); }
        .bg-secondary { background: var(--accent-secondary); }

        .border-accent-subtle {
          border-color: rgba(139, 92, 246, 0.2);
        }

        /* Free section specific */
        .experience-list {
          list-style: none;
        }

        .exp-item {
          font-size: 1.25rem;
          padding: 16px 24px;
          margin-bottom: 12px;
          background: rgba(255, 255, 255, 0.03);
          border-left: 3px solid var(--accent-primary);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          color: var(--text-primary);
        }

        .model-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .model-detail-card {
          padding: 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: var(--radius-md);
          font-size: 1.1rem;
        }

        .hypothesis-box {
          padding: 20px 24px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: var(--radius-sm);
          color: #34d399;
          font-size: 1.1rem;
        }

        /* Paywall */
        .paywall-container {
          position: relative;
          z-index: 10;
          transform: translateY(40px);
        }
        
        .paywall-card {
          padding: 60px 40px;
          background: linear-gradient(to bottom, var(--bg-surface-elevated), var(--bg-surface));
          border: 1px solid rgba(139, 92, 246, 0.3);
          box-shadow: 0 20px 50px -10px rgba(0,0,0,0.5), 0 +10px 30px rgba(139, 92, 246, 0.1);
        }

        /* Blurred content */
        .paid-section-blurred {
          position: relative;
        }

        .blur-overlay {
          filter: blur(8px);
          opacity: 0.4;
          pointer-events: none;
          user-select: none;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%);
        }

        /* Placeholders */
        .line {
          height: 16px;
          background: rgba(255,255,255,0.1);
          border-radius: 8px;
          margin-bottom: 16px;
        }
        .line-100 { width: 100%; }
        .line-90 { width: 90%; }
        .line-80 { width: 80%; }
        .line-60 { width: 60%; }
        .box {
          background: rgba(255,255,255,0.05);
          border-radius: var(--radius-md);
        }
        .w-1-3 { width: 33.333%; }
        .w-100 { width: 100%; }
        .h-32 { height: 128px; }
        .h-24 { height: 96px; }

        @media (max-width: 900px) {
          .course-title-main { font-size: 2.5rem; }
          .p-12 { padding: 32px 24px; }
          .model-details-grid { grid-template-columns: 1fr; }
          .mt-8.flex.gap-4 { flex-direction: column; }
          .w-1-3 { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default CoursePage;
