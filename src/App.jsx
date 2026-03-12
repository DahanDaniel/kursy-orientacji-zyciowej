import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';
import HowItWorksPage from './pages/HowItWorksPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to it
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const SpaRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If there is a redirect query string from the 404.html page, replace the URL
    if (location.search.includes('?')) {
      const q = location.search.split('?');
      if (q.length > 1) {
        const path = q[1].replace(/~and~/g, '&');
        navigate(path + location.hash, { replace: true });
      }
    }
  }, [location, navigate]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SpaRedirect />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/course/:id" element={<CoursePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
