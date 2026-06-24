import './Process.css';

const STEPS = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We learn your business, goals, pain points, and current tools in a free 30-minute strategy session.',
    icon: '🎯',
  },
  {
    num: '02',
    title: 'Custom AI Blueprint',
    desc: 'Our team designs a tailored automation roadmap specific to your industry, workflow, and growth targets.',
    icon: '🗺️',
  },
  {
    num: '03',
    title: 'Build & Integrate',
    desc: 'We deploy your AI systems and connect them directly to your existing tools — CRM, calendar, website, and more.',
    icon: '⚡',
  },
  {
    num: '04',
    title: 'Test & Refine',
    desc: 'Before going live, we rigorously test every flow, edge case, and handoff to ensure everything works perfectly.',
    icon: '🔬',
  },
  {
    num: '05',
    title: 'Launch & Scale',
    desc: 'Go live with confidence. We monitor, optimize, and add new capabilities as your business grows.',
    icon: '🚀',
  },
];

export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Our 5-Step <span>AI Deployment</span> Process</h2>
          <p className="section-sub">
            From discovery to launch in days, not months. We make AI accessible and actionable for your business.
          </p>
        </div>

        <div className="process-track">
          <div className="process-line" />
          {STEPS.map((step, i) => (
            <div key={i} className={`process-step ${i % 2 === 0 ? 'top' : 'bottom'}`}>
              <div className="step-connector" />
              <div className="step-card">
                <div className="step-num">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-mobile">
          {STEPS.map((step, i) => (
            <div key={i} className="mobile-step">
              <div className="mobile-step-left">
                <div className="mobile-step-num">{step.num}</div>
                {i < STEPS.length - 1 && <div className="mobile-step-line" />}
              </div>
              <div className="mobile-step-content">
                <div className="step-icon-sm">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
