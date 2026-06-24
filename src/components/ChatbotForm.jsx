import { useState } from 'react';
import './ChatbotForm.css';

const SERVICES = [
  'AI Chatbot',
  'Social Media Content',
  'Workflow Automation',
  'AI Video',
  'AI Receptionist',
  'SEO Content',
  'CRM Follow-Up',
  'Not Sure Yet',
];

const BUDGETS = [
  'Under $500/mo',
  '$500 – $1,500/mo',
  '$1,500 – $3,000/mo',
  '$3,000+/mo',
];

const BUSINESS_TYPES = [
  'Retail / E-commerce',
  'Restaurant / Food',
  'Health & Wellness',
  'Real Estate',
  'Home Services',
  'Professional Services',
  'Beauty / Salon',
  'Other',
];

const STEPS = ['Intro', 'Business', 'Services', 'Budget', 'Contact'];

export default function ChatbotForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    businessType: '',
    service: '',
    budget: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const update = (field, value) => {
    setForm(f => ({ ...f, [field]: value }));
    setErrors(e => ({ ...e, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (step === 0 && !form.name.trim()) e.name = 'Name is required';
    if (step === 1 && !form.businessType) e.businessType = 'Please select a business type';
    if (step === 2 && !form.service) e.service = 'Please select a service';
    if (step === 3 && !form.budget) e.budget = 'Please select a budget range';
    if (step === 4) {
      if (!form.email.trim()) e.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate()) return;
    if (step < 4) setStep(s => s + 1);
    else setSubmitted(true);
  };

  const back = () => setStep(s => s - 1);

  if (submitted) {
    return (
      <section id="contact" className="form-section">
        <div className="container">
          <div className="form-wrap">
            <div className="confirm-box">
              <div className="confirm-icon">✅</div>
              <h2 className="confirm-title">You're All Set, {form.name}!</h2>
              <p className="confirm-sub">
                Thanks for reaching out to Qwvarah. We've received your information and will be in touch within 24 hours to schedule your free AI strategy session.
              </p>
              <div className="confirm-summary">
                <div className="summary-row">
                  <span>Business Type</span><strong>{form.businessType}</strong>
                </div>
                <div className="summary-row">
                  <span>Interested In</span><strong>{form.service}</strong>
                </div>
                <div className="summary-row">
                  <span>Budget Range</span><strong>{form.budget}</strong>
                </div>
                <div className="summary-row">
                  <span>Email</span><strong>{form.email}</strong>
                </div>
              </div>
              <p className="confirm-footer">
                Check your inbox — we'll send a calendar link shortly.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="form-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get Started</span>
          <h2 className="section-title">Build Your <span>AI Strategy</span></h2>
          <p className="section-sub">
            Answer 5 quick questions and we'll design a custom AI plan for your business — free.
          </p>
        </div>

        <div className="form-wrap">
          <div className="form-progress">
            {STEPS.map((label, i) => (
              <div key={i} className={`progress-step ${i <= step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
                <div className="progress-dot">
                  {i < step ? '✓' : i + 1}
                </div>
                <span className="progress-label">{label}</span>
              </div>
            ))}
          </div>

          <div className="form-body">
            {step === 0 && (
              <div className="form-step">
                <div className="bot-msg">
                  <span className="bot-avatar">🤖</span>
                  <div className="bot-bubble">
                    Hey! I'm Qwvarah's AI assistant. Let's find out which AI services fit your business best. What's your name?
                  </div>
                </div>
                <div className="input-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Maria Lopez"
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && next()}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="form-step">
                <div className="bot-msg">
                  <span className="bot-avatar">🤖</span>
                  <div className="bot-bubble">
                    Nice to meet you, {form.name}! What type of business do you run?
                  </div>
                </div>
                <div className="input-group">
                  <label>Business Type</label>
                  <div className="chip-grid">
                    {BUSINESS_TYPES.map(t => (
                      <button
                        key={t}
                        className={`chip ${form.businessType === t ? 'selected' : ''}`}
                        onClick={() => update('businessType', t)}
                        type="button"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {errors.businessType && <span className="field-error">{errors.businessType}</span>}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <div className="bot-msg">
                  <span className="bot-avatar">🤖</span>
                  <div className="bot-bubble">
                    Great! Which AI service are you most interested in for your {form.businessType} business?
                  </div>
                </div>
                <div className="input-group">
                  <label>Service Interest</label>
                  <div className="chip-grid">
                    {SERVICES.map(s => (
                      <button
                        key={s}
                        className={`chip ${form.service === s ? 'selected' : ''}`}
                        onClick={() => update('service', s)}
                        type="button"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {errors.service && <span className="field-error">{errors.service}</span>}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <div className="bot-msg">
                  <span className="bot-avatar">🤖</span>
                  <div className="bot-bubble">
                    Almost there! What's your approximate monthly budget for AI services?
                  </div>
                </div>
                <div className="input-group">
                  <label>Monthly Budget</label>
                  <div className="chip-grid">
                    {BUDGETS.map(b => (
                      <button
                        key={b}
                        className={`chip ${form.budget === b ? 'selected' : ''}`}
                        onClick={() => update('budget', b)}
                        type="button"
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  {errors.budget && <span className="field-error">{errors.budget}</span>}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="form-step">
                <div className="bot-msg">
                  <span className="bot-avatar">🤖</span>
                  <div className="bot-bubble">
                    Perfect! Last step — what's the best email to send your free AI strategy plan?
                  </div>
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="you@yourbusiness.com"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && next()}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>
            )}

            <div className="form-actions">
              {step > 0 && (
                <button className="btn-back" onClick={back} type="button">
                  ← Back
                </button>
              )}
              <button className="btn-next" onClick={next} type="button">
                {step < 4 ? 'Continue →' : 'Get My AI Plan ✨'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
