import { useNavigate } from "react-router-dom";

export default function RoadmapItem({ stage, index }) {
  const navigate = useNavigate();
  const isLeft = index % 2 === 0;
  const gradient = `linear-gradient(135deg, ${stage.theme.primary}, ${stage.theme.secondary})`;

  return (
    <div className={`timeline-item ${isLeft ? "left" : "right"}`}>
      <div
        className="timeline-content"
        style={{ borderColor: stage.theme.primary }}
        onClick={() => navigate(`/stage/${stage.id}`)}
      >
        <div className="timeline-content__header">
          <div
            className="stage-icon"
            style={{ backgroundImage: gradient }}
            aria-hidden
          >
            {stage.icon}
          </div>
          <div>
            <div className="stage-number">{stage.isDestination ? "Đích" : `Chặng ${stage.id}`}</div>
            <h3>{stage.title}</h3>
            {stage.subtitle && <p className="stage-subtitle">{stage.subtitle}</p>}
          </div>
        </div>

        <ul className="stage-bullets">
          {stage.bullets?.slice(0, 4).map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {stage.quote && <p className="stage-quote">“{stage.quote}”</p>}

        <div className="stage-cta" style={{ color: stage.theme.primary }}>
          Xem chi tiết →
        </div>
      </div>
    </div>
  );
}
