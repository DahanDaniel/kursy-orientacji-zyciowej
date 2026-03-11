import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Unlock } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`} className="course-card glass-panel">
      <div className="card-top">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-desc">{course.problem}</p>
      </div>
      <div className="card-bottom">
        <div className="price-tag">
          <span className="price">{course.price} zł</span>
        </div>
        <div className="card-action">
          <ArrowRight size={20} className="action-icon" />
        </div>
      </div>

      <style>{`
        .course-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
          height: 100%;
          min-height: 280px;
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .course-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          opacity: 0;
          transition: opacity var(--transition-normal);
        }

        .course-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
        }

        .course-card:hover::before {
          opacity: 1;
        }

        .course-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .course-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .price-tag {
          font-weight: 600;
          color: var(--text-primary);
        }

        .card-action {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          transition: all var(--transition-normal);
        }

        .course-card:hover .card-action {
          background: var(--accent-primary);
          color: white;
          transform: translateX(4px);
        }
      `}</style>
    </Link>
  );
};

export default CourseCard;
