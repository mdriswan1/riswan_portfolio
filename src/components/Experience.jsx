import { useEffect, useRef } from "react";
import { experience } from "../data/portfolioData";

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">Career</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item fade-in">
              <div className="timeline-dot" />
              <div className="experience-card card">
                <div className="exp-header">
                  <h3 className="exp-title">{exp.title}</h3>
                  <span className="exp-badge">{exp.type}</span>
                </div>
                <p className="exp-company">{exp.company}</p>
                <div className="exp-meta">
                  <span>📍 {exp.location}</span>
                  <span>🕐 {exp.duration}</span>
                </div>
                <ul className="exp-responsibilities">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
