import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/portfolioData";

const EMAILJS_SERVICE_ID  = "service_8h829sa";
const EMAILJS_TEMPLATE_ID = "template_ev98189";
const EMAILJS_PUBLIC_KEY  = "rvAuTJkDgftP0M8GN";

emailjs.init(EMAILJS_PUBLIC_KEY);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const [form, setForm]         = useState({ name: "", email: "", message: "" });
  const [status, setStatus]     = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill in all fields.");
      return;
    }
    setErrorMsg("");
    setStatus("sending");

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          to_name:    "Mohamed Riswan",
          reply_to:   form.email,
          to_email:   "mdrriswan20042002@gmail.com",
        }
      );
      console.log("EmailJS success:", result.status, result.text);
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", JSON.stringify(err));
      const msg = err?.text || err?.message || "Unknown error";
      setErrorMsg(`Failed: ${msg}. Please email me directly.`);
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-wrapper">
          {/* Info Side */}
          <div className="contact-info fade-in">
            <p className="contact-text">
              I'm currently open to new opportunities and collaborations. Whether you have a
              project in mind, a question, or just want to say hello — my inbox is always open.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div className="contact-item-info">
                  <div className="contact-item-label">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="contact-item-value">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><GitHubIcon /></div>
                <div className="contact-item-info">
                  <div className="contact-item-label">GitHub</div>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-item-value">
                    github.com/mdriswan1
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><LinkedInIcon /></div>
                <div className="contact-item-info">
                  <div className="contact-item-label">LinkedIn</div>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item-value">
                    Mohamed Riswan
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-info">
                  <div className="contact-item-label">Location</div>
                  <span className="contact-item-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <GitHubIcon />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form fade-in" style={{ transitionDelay: "0.15s" }}>
            <p className="form-title">// send a message</p>

            {status === "success" ? (
              <div className="form-success">
                <div className="form-success-icon">✅</div>
                <h4>Message Sent!</h4>
                <p>Thanks for reaching out, {form.name}. I'll reply to {form.email} soon!</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    id="name" name="name" type="text"
                    className="form-input" placeholder="Your name"
                    value={form.name} onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email"
                    className="form-input" placeholder="your@email.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    className="form-textarea"
                    placeholder="Tell me about your project or just say hello..."
                    value={form.message} onChange={handleChange}
                  />
                </div>

                {errorMsg && (
                  <p style={{ color: "#ff6b6b", fontFamily: "var(--font-mono)", fontSize: "0.78rem", marginBottom: "12px", lineHeight: "1.5" }}>
                    ⚠ {errorMsg}
                  </p>
                )}

                <button
                  className="form-submit"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  style={{
                    opacity: status === "sending" ? 0.7 : 1,
                    cursor: status === "sending" ? "not-allowed" : "pointer"
                  }}
                >
                  {status === "sending" ? "Sending…" : "Send Message →"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
