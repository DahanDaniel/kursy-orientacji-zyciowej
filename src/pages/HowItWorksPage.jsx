import { ArrowRight, Lightbulb, Workflow, Target, PlayCircle, BookOpen } from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      id: 1,
      icon: <Lightbulb />,
      element: "Problem doświadczeniowy",
      purpose: "Czytelnik rozpoznaje siebie w tym doświadczeniu i widzi, że nie jest z nim „coś nie tak”.",
      exampleTitle: "Przykład: Regulacja układu nerwowego",
      exampleText: "Czasami umysł nie przestaje produkować myśli. Analizujesz przeszłość, planujesz przyszłość, wracasz do sytuacji z rozmów i konfliktów. Pojawia się napięcie, zmęczenie i poczucie utraty kontroli nad własnym umysłem."
    },
    {
      id: 2,
      icon: <Workflow />,
      element: "Zrozumienie mechanizmu działania",
      purpose: "Wprowadzamy sprawdzone modele mentalne, dzięki którym można precyzyjnie nazwać i zaadresować problem.",
      exampleTitle: "Model Mentalny",
      exampleText: (
        <>
          Mózg działa w różnych trybach. Jednym z nich jest Default Mode Network (DMN), który generuje narrację o sobie i świecie. To nie problem psychologiczny. To problem regulacji układu nerwowego.
          <br /><br />
          Model: Nadaktywne DMN → nadmiar narracji → cierpienie psychiczne.
        </>
      )
    },
    {
      id: 3,
      icon: <BookOpen />,
      element: "Reinterpretacja doświadczenia",
      purpose: "Zmiana perspektywy i zasada działania na podstawie nowej wiedzy.",
      exampleTitle: "Przesunięcie optyki",
      exampleText: (
        <>
          Doświadczenie: pojawia się dużo myśli.<br />
          Realny mechanizm: Regulacja polega na przełączaniu mózgu z trybu narracji do trybu obecności i działania.<br />
          Zmiana interpretacji z „coś jest ze mną nie tak” na „mózg działa w trybie DMN”.
        </>
      )
    },
    {
      id: 4,
      icon: <Target />,
      element: "Mechanizmy i Narzędzia",
      purpose: "Prezentacja i nauka konkretnych technik i narzędzi do radzenia sobie z problemem w codzienności.",
      exampleTitle: "Narzędzia",
      exampleText: "Konkretne praktyki regulujące układ autonomiczny i uspokajające umysł. Synchronizacja oddechu i uwagi zmienia aktywność sieci neuronalnych. Oddech, spacer, sport, medytacja, cisza, kontakt z naturą. Mechanizmy te bazują na rytmie, ruchu i uwadze sensorycznej."
    },
    {
      id: 5,
      icon: <PlayCircle />,
      element: "Protokół wdrożenia",
      purpose: "Szczegółowe zalecenia i wyzwanie do podjęcia.",
      exampleTitle: "14-dniowy eksperyment",
      exampleText: "Codzienna praktyka: 10–20 minut wybranego narzędzia oddechowego + ruch fizyczny (spacer, sport) + okna ciszy. Regulacja stabilizuje umysł i zwiększa zdolność do działania w nieprzewidywalnym Świecie."
    }
  ];

  return (
    <div className="how-it-works-page">
      <div className="bg-glow"></div>
      
      {/* HEADER */}
      <header className="hiw-header container text-center">
        <h1 className="hiw-title mb-6">Architektura <span className="text-accent-gradient">Rozumienia</span></h1>
        <p className="hiw-subtitle max-w-2xl mx-auto">
          Każdy kurs na platformie jest zbudowany według precyzyjnego Metamodelu. 
          Przeprowadzamy Cię od bolesnego doświadczenia, przez dogłębne zrozumienie mechanizmu, aż po praktyczny protokół działania. Zobacz, jak to wygląda w praktyce.
        </p>
      </header>

      {/* METAMODEL JOURNEY */}
      <section className="metamodel-journey container">
        <div className="timeline-container relative">
          <div className="timeline-line"></div>
          
          {steps.map((step, index) => (
            <div key={step.id} className="timeline-step">
              <div className="step-marker">
                <div className="marker-icon">{step.icon}</div>
              </div>
              
              <div className="step-content">
                <div className="glass-panel p-8 timeline-card flex flex-col md:flex-row gap-8">
                  <div className="card-theory flex-1 pr-6 border-r border-glass">
                    <span className="badge-small mb-4">Krok {step.id}: Metamodel</span>
                    <h2 className="text-xl font-bold mb-3">{step.element}</h2>
                    <p className="text-secondary">{step.purpose}</p>
                  </div>
                  <div className="card-practice flex-1">
                    <span className="badge-small accent mb-4">{step.exampleTitle}</span>
                    <p className="text-primary leading-relaxed">{step.exampleText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bottom-cta container text-center pt-12 pb-24">
        <div className="glass-panel p-12 inline-block max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Gotowy na własny protokół wdrożenia?</h2>
          <p className="text-secondary mb-8">
            Dostęp do pełnych modeli i narzędzi znajdziesz w Bibliotece Kursów.
          </p>
          <a href="/#library" className="btn btn-primary btn-lg">
            Przejdź do biblioteki <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <style>{`
        .how-it-works-page {
          padding-top: 60px;
        }

        .hiw-header {
          margin-bottom: 80px;
          animation: fadeUp 0.8s ease-out forwards;
        }

        .hiw-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hiw-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .metamodel-journey {
          padding: 20px 0 80px;
        }

        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        /* The vertical connecting line */
        .timeline-line {
          position: absolute;
          left: 28px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, 
            transparent 0%, 
            var(--accent-primary) 10%, 
            var(--accent-secondary) 90%, 
            transparent 100%
          );
          opacity: 0.3;
          z-index: 1;
        }

        .timeline-step {
          display: flex;
          gap: 40px;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .timeline-step:last-child {
          margin-bottom: 0;
        }

        .step-marker {
          flex-shrink: 0;
          position: relative;
          z-index: 3;
        }

        .marker-icon {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 2px solid var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
        }

        .step-content {
          flex: 1;
        }

        .timeline-card {
          border-radius: var(--radius-lg);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px -10px rgba(59, 130, 246, 0.15);
        }

        .border-glass {
          border-color: rgba(255, 255, 255, 0.08);
        }

        /* Utils */
        .badge-small {
          display: inline-block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 4px;
          background: rgba(255,255,255,0.05);
          color: var(--text-muted);
        }

        .badge-small.accent {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-primary);
        }

        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-1 { flex: 1; }
        .gap-8 { gap: 32px; }
        .p-8 { padding: 32px; }
        .p-12 { padding: 48px; }
        .pr-6 { padding-right: 24px; }
        .mb-3 { margin-bottom: 12px; }
        .mb-4 { margin-bottom: 16px; }
        .mb-6 { margin-bottom: 24px; }
        .mb-8 { margin-bottom: 32px; }
        .pb-24 { padding-bottom: 96px; }
        .pt-12 { padding-top: 48px; }
        .text-xl { font-size: 1.25rem; }
        .text-3xl { font-size: 1.875rem; }
        .font-bold { font-weight: 700; }
        .text-center { text-align: center; }
        .max-w-2xl { max-width: 672px; }
        .max-w-3xl { max-width: 768px; }
        .mx-auto { margin-inline: auto; }
        .inline-block { display: inline-block; }
        .leading-relaxed { line-height: 1.7; }

        @media (min-width: 768px) {
          .md\\:flex-row { flex-direction: row; }
        }

        @media (max-width: 768px) {
          .timeline-card { flex-direction: column; }
          .card-theory { 
            padding-right: 0; 
            border-right: none; 
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 24px;
            margin-bottom: 8px;
          }
          .hiw-title { font-size: 3rem; }
          .timeline-step { flex-direction: column; gap: 20px; }
          .timeline-line { left: 45px; }
          .step-marker { padding-left: 16px; }
        }
      `}</style>
    </div>
  );
};

export default HowItWorksPage;
