import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="nav-logo">
            <span style={{color:'var(--green)'}}>[ </span>Qwvarah<span style={{color:'var(--green)'}}>.</span>AI<span style={{color:'var(--green)'}}> ]</span>
          </span>
          <p className="footer-tagline">
            AI-powered growth systems for small businesses. We make automation accessible.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {['AI Chatbot','Social Media','Workflow Automation','AI Video','AI Receptionist','SEO Content','CRM Follow-Up'].map(s => (
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
