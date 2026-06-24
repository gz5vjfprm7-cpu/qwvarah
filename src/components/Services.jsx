import './Services.css';

const SERVICES = [
  {
    icon: '🤖',
    title: 'AI Chatbot',
    desc: 'Deploy a 24/7 intelligent chatbot on your website that answers questions, qualifies leads, and books appointments — all without human intervention.',
    tags: ['Lead Capture', '24/7 Support', 'Multi-channel'],
  },
  {
    icon: '📱',
    title: 'Social Media Content',
    desc: 'AI-generated, on-brand posts, captions, and campaigns across all platforms. Stay consistent and engaging without spending hours on content.',
    tags: ['Auto-Schedule', 'Brand Voice', 'All Platforms'],
  },
  {
    icon: '⚙️',
    title: 'Workflow Automation',
    desc: 'Eliminate repetitive manual tasks. We connect your tools and build custom automations that handle onboarding, reminders, reporting, and more.',
    tags: ['Zapier/Make', 'Custom Flows', 'Time Savings'],
  },
  {
    icon: '🎬',
    title: 'AI Video',
    desc: 'Turn scripts or documents into polished marketing videos with AI avatars, voiceovers, and branded graphics — at a fraction of traditional cost.',
    tags: ['AI Avatars', 'Fast Turnaround', 'Branded'],
  },
  {
    icon: '📞',
    title: 'AI Receptionist',
    desc: 'Never miss a call again. Our AI receptionist handles inbound calls, books appointments, answers FAQs, and escalates urgent matters intelligently.',
    tags: ['Phone AI', 'Appointment Booking', 'After-Hours'],
  },
  {
    icon: '✍️',
    title: 'SEO Content',
    desc: 'Rank higher on Google with AI-generated, expert-reviewed articles, landing pages, and blogs optimized for search intent and local businesses.',
    tags: ['Keyword Research', 'Local SEO', 'Monthly Plans'],
  },
  {
    icon: '💌',
    title: 'CRM Follow-Up',
    desc: 'Stop losing leads to silence. AI-powered follow-up sequences nurture prospects through email, SMS, and DMs until they convert — automatically.',
    tags: ['Email + SMS', 'Lead Nurture', 'Auto-Sequences'],
  },
  {
    icon: '🌐',
    title: 'Website Design & Development',
    desc: 'Custom AI-built websites designed to your exact vision — fast, professional, and built to convert visitors into customers. Fully mobile ready and delivered fast.',
    tags: ['Custom Design', 'Mobile Ready', 'Fast Delivery'],
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Build</span>
          <h2 className="section-title">AI Services That <span>Drive Revenue</span></h2>
          <p className="section-sub">
            Each service is custom-deployed for your business — not a template, a real system built to convert.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card">
              <div className="card-glow" />
              <div className="card-icon">{s.icon}</div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-desc">{s.desc}</p>
              <div className="card-tags">
                {s.tags.map(t => (
                  <span key={t} className="card-tag">{t}</span>
                ))}
              </div>
              <p className="card-quote">Custom quote — free in 24hrs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
