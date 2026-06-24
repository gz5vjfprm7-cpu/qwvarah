import {
  MessageSquare, Megaphone, Network, Video,
  PhoneCall, FileSearch, Mail, Globe,
} from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    Icon: MessageSquare,
    title: 'AI Chatbot',
    desc: 'Deploy a 24/7 intelligent chatbot on your website that answers questions, qualifies leads, and books appointments — all without human intervention.',
    tags: ['Lead Capture', '24/7 Support', 'Multi-channel'],
  },
  {
    Icon: Megaphone,
    title: 'Social Media Content',
    desc: 'AI-generated, on-brand posts, captions, and campaigns across all platforms. Stay consistent and engaging without spending hours on content.',
    tags: ['Auto-Schedule', 'Brand Voice', 'All Platforms'],
  },
  {
    Icon: Network,
    title: 'Workflow Automation',
    desc: 'Eliminate repetitive manual tasks. We connect your tools and build custom automations that handle onboarding, reminders, reporting, and more.',
    tags: ['Zapier/Make', 'Custom Flows', 'Time Savings'],
  },
  {
    Icon: Video,
    title: 'AI Video',
    desc: 'Turn scripts or documents into polished marketing videos with AI avatars, voiceovers, and branded graphics — at a fraction of traditional cost.',
    tags: ['AI Avatars', 'Fast Turnaround', 'Branded'],
  },
  {
    Icon: PhoneCall,
    title: 'AI Receptionist',
    desc: 'Never miss a call again. Our AI receptionist handles inbound calls, books appointments, answers FAQs, and escalates urgent matters intelligently.',
    tags: ['Phone AI', 'Appointment Booking', 'After-Hours'],
  },
  {
    Icon: FileSearch,
    title: 'SEO Content',
    desc: 'Rank higher on Google with AI-generated, expert-reviewed articles, landing pages, and blogs optimized for search intent and local businesses.',
    tags: ['Keyword Research', 'Local SEO', 'Monthly Plans'],
  },
  {
    Icon: Mail,
    title: 'CRM Follow-Up',
    desc: 'Stop losing leads to silence. AI-powered follow-up sequences nurture prospects through email, SMS, and DMs until they convert — automatically.',
    tags: ['Email + SMS', 'Lead Nurture', 'Auto-Sequences'],
  },
  {
    Icon: Globe,
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
              <div className="card-icon">
                <s.Icon size={26} strokeWidth={1.5} />
              </div>
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
