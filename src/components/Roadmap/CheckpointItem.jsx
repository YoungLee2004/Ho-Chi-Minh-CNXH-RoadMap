import { useNavigate } from "react-router-dom";

export default function CheckpointItem({ stage, index, total }) {
  const navigate = useNavigate();
  const progress = ((index + 1) / total) * 100;
  const isCompleted = index < total - 1; // Tất cả ngoài cái cuối cùng là completed

  return (
    <div className={`checkpoint-item ${isCompleted ? "completed" : ""}`}>
      {/* Progress bar */}
      <div className="checkpoint-progress">
        <div 
          className="checkpoint-progress-fill" 
          style={{ 
            width: progress + "%",
            background: `linear-gradient(90deg, ${stage.theme.primary}, ${stage.theme.secondary})`
          }}
        />
      </div>

      {/* Timeline node */}
      <div className="checkpoint-node">
        <div 
          className="checkpoint-node-circle"
          style={{ 
            borderColor: stage.theme.primary,
            backgroundColor: isCompleted ? stage.theme.primary : "transparent"
          }}
        >
          {isCompleted && <span className="checkpoint-check">✓</span>}
          {!isCompleted && <span className="checkpoint-number">{index + 1}</span>}
        </div>
        <div className="checkpoint-node-line" style={{ borderColor: stage.theme.primary }} />
      </div>

      {/* Content card */}
      <div 
        className="checkpoint-card"
        style={{ borderTopColor: stage.theme.primary }}
        onClick={() => navigate(`/stage/${stage.id}`)}
      >
        {/* Header with icon and title */}
        <div className="checkpoint-header">
          <div 
            className="checkpoint-icon"
            style={{ 
              backgroundImage: `linear-gradient(135deg, ${stage.theme.primary}, ${stage.theme.secondary})`
            }}
          >
            {stage.icon}
          </div>
          <div className="checkpoint-title-group">
            <span className="checkpoint-badge" style={{ color: stage.theme.primary }}>
              {stage.isDestination ? "🎯 ĐÍ CH ĐẾN" : `Chặng ${stage.id}`}
            </span>
            <h3 className="checkpoint-title">{stage.title}</h3>
            {stage.subtitle && <p className="checkpoint-subtitle">{stage.subtitle}</p>}
          </div>
        </div>

        {/* Description */}
        {stage.shortDesc && (
          <p className="checkpoint-description">{stage.shortDesc}</p>
        )}

        {/* Bullet points */}
        <ul className="checkpoint-bullets">
          {stage.bullets?.slice(0, 3).map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {/* Quote */}
        {stage.quote && (
          <div className="checkpoint-quote-box">
            <span className="quote-icon">"</span>
            <p className="checkpoint-quote">{stage.quote}</p>
          </div>
        )}

        {/* CTA */}
        <div className="checkpoint-cta" style={{ color: stage.theme.primary }}>
          Xem chi tiết
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
