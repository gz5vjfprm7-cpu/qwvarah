import './Footer.css';

const FOOTER_SERVICES = [
  'AI Chatbot',
  'Social Media Content',
  'Workflow Automation',
  'AI Video',
  'AI Receptionist',
  'SEO Content',
  'CRM Follow-Up',
  'Website Design & Development',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <span className="footer-logo-bracket">[</span>Qwvarah<span className="footer-logo-dot">.</span>AI<span className="footer-logo-bracket">]</span>
          </a>
          <p className="footer-tagline">
            AI-powered growth systems for small businesses. We make automation accessible.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {FOOTER_SERVICES.map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#results">Results</a></li>
              <li><a href="#contact">Get Started</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Qwvarah AI. All rights reserved.</span>
          <span className="footer-made">Built with AI. Powered by results.</span>
        </div>
      </div>
    </footer>
  );
}
