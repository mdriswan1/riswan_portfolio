import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active link detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          <a href="#hero" className="navbar-logo" onClick={() => handleNavClick("#hero")}>
            <span style={{ color: "var(--accent-green)" }}>&lt;</span>
            MR
            <span style={{ color: "var(--accent-green)" }}>/&gt;</span>
          </a>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="navbar-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
          >
            Contact
          </a>

          <button
            className="navbar-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                transform: menuOpen ? "rotate(45deg) translate(4px, 5px)" : "none",
              }}
            />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span
              style={{
                transform: menuOpen ? "rotate(-45deg) translate(4px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: 24,
            right: 32,
            background: "none",
            border: "none",
            color: "var(--text-secondary)",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          style={{ color: "var(--accent-green)" }}
        >
          Contact
        </a>
      </div>
    </>
  );
}
