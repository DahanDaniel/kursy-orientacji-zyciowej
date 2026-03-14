import { useUser } from '@clerk/react';
import { allCoursesFlat } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

const MyCourses = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div className="container mt-32 text-center">
        <p className="text-secondary">Ładowanie Twoich kursów...</p>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="container mt-32 text-center">
        <h2 className="text-3xl font-bold mb-4">Zaloguj się</h2>
        <p className="text-secondary mb-8">Zaloguj się, aby zobaczyć swoje kursy.</p>
        <Link to="/" className="btn btn-primary">Wróć do strony głównej</Link>
      </div>
    );
  }

  const access = user?.publicMetadata?.access || [];
  // Automatycznie dodaje "regulacja" bo to darmowy kurs dla zalogowanych
  const effectiveAccess = [...new Set([...access, 'regulacja'])];
  const myCourses = allCoursesFlat.filter(course => effectiveAccess.includes(course.id));

  return (
    <div className="my-courses-page container mt-16 pb-32">
      <div className="bg-glow"></div>
      
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Moje kursy</h1>
        <p className="text-secondary text-lg">Twoja biblioteka odblokowanych materiałów.</p>
      </header>

      {myCourses.length > 0 ? (
        <div className="course-grid">
          {myCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="glass-panel p-12 text-center max-w-2xl mx-auto">
          <BookOpen size={48} className="mx-auto mb-6 text-accent-primary" />
          <h2 className="text-2xl font-bold mb-4">Nie masz jeszcze żadnych kursów</h2>
          <p className="text-secondary mb-8">
            Twoja biblioteka jest obecnie pusta. Przeglądaj dostępne kursy i wybierz coś dla siebie, aby zacząć naukę.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#library" className="btn btn-primary flex items-center justify-center gap-2">
              Przeglądaj bibliotekę <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .my-courses-page {
          position: relative;
        }

        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
        }

        .bg-glow {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--accent-primary-alpha) 0%, transparent 70%);
          filter: blur(80px);
          z-index: -1;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default MyCourses;
