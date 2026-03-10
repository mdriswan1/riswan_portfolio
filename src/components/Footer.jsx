import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">&lt;MR /&gt;</span>

          <p className="footer-copy">
            © {year} Mohamed Riswan · Designed & Built with ❤️ using React + Vite
          </p>

          <div className="footer-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
