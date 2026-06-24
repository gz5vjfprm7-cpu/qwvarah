import './Stats.css';

const STATS = [
  { value: '50+', label: 'Businesses Automated' },
  { value: '10k+', label: 'Hours Saved Monthly' },
  { value: '3.2x', label: 'Average ROI' },
  { value: '24/7', label: 'AI Always On' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function Stats() {
  return (
    <div className="stats-bar" id="results">
      <div className="container stats-inner">
        {STATS.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
