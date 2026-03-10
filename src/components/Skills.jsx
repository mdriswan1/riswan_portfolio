import { useEffect, useRef } from "react";
import { skills } from "../data/portfolioData";

function SkillBar({ name, level, delay }) {
  return (
    <div className="skill-item">
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ width: `${level}%`, "--delay": `${delay}s` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" ref={ref}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">Proficiency</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], ci) => (
            <div
              key={category}
              className="skill-category-card card fade-in"
              style={{ transitionDelay: `${ci * 0.1}s` }}
            >
              <h4 className="skill-category-title">{category}</h4>
              {items.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={ci * 0.1 + i * 0.05}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
