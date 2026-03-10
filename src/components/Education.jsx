import { useEffect, useRef } from "react";
import { education } from "../data/portfolioData";

export default function Education() {
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
    <section id="education" ref={ref}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">Background</p>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-grid">
          {education.map((edu, i) => (
            <div
              key={edu.id}
              className="education-card card fade-in"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="edu-degree-badge">{edu.degree}</div>
              <div className="edu-content">
                <h3 className="edu-degree">{edu.field}</h3>
                <p className="edu-institution">{edu.institution}</p>
                <div className="edu-meta">
                  <span className="edu-year">{edu.year}</span>
                  <span className="edu-location">📍 {edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
