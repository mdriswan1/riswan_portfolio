import { useEffect, useRef } from "react";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
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
    <section id="certifications" className="certifications-section" ref={ref}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className="cert-card card fade-in"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="cert-icon"
                style={{
                  background: `rgba(${cert.color === "#f89820" ? "248,152,32" : "0,255,157"}, 0.08)`,
                  borderColor: `rgba(${cert.color === "#f89820" ? "248,152,32" : "0,255,157"}, 0.2)`,
                }}
              >
                {cert.icon}
              </div>
              <div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">🏫 {cert.issuer}</p>
                <p className="cert-desc">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
