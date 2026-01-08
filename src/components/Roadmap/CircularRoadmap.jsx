import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RoadroadmapStyle.css";

export default function CircularRoadmap({ stagesData }) {
  const [selectedStage, setSelectedStage] = useState(null);
  const [displayStage, setDisplayStage] = useState(null);
  const [travelerPos, setTravelerPos] = useState({ x: 120, y: 480 });
  const navigate = useNavigate();

  const getCheckpointPosition = (index) => {
    const positions = [
      { x: 120, y: 480 },
      { x: 300, y: 320 },
      { x: 480, y: 400 },
      { x: 660, y: 280 },
      { x: 800, y: 440 },
    ];
    return positions[index] || { x: 0, y: 0 };
  };

  // Khi selectedStage thay đổi, delay hiển thị displayStage
  useEffect(() => {
    if (selectedStage) {
      // Ngay lập tức di chuyển nhân vật, nhưng delay hiển thị info
      const timer = setTimeout(() => {
        setDisplayStage(selectedStage);
      }, 2500); // 2.5 giây (bằng animation duration)
      return () => clearTimeout(timer);
    } else {
      setDisplayStage(null);
    }
  }, [selectedStage]);

  const handleNodeClick = (stage, index) => {
    setSelectedStage({ ...stage, index });
    const newPos = getCheckpointPosition(index);
    setTravelerPos(newPos);
  };

  const handleDetailClick = (stageId) => {
    navigate(`/stage/${stageId}`);
  };

  return (
    <div className="road-roadmap">
      <div className="roadmap-hero">
        <p className="roadmap-kicker">🛣️ Roadmap Con Đường · CNXH</p>
        <h1 className="roadmap-title">Hành Trình Tư Tưởng Hồ Chí Minh</h1>
        <p className="roadmap-subtitle">
          Khám phá từng chặng trên con đường tới chủ nghĩa xã hội
        </p>
      </div>

      <div className="road-container">
        <svg className="road-svg" viewBox="0 0 900 600">
          <defs>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3d3d3d" />
              <stop offset="50%" stopColor="#252525" />
              <stop offset="100%" stopColor="#1a1a1a" />
            </linearGradient>
            <linearGradient id="roadLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.3)" />
            </linearGradient>
          </defs>

          <path
            d="M 80 480 Q 200 400, 300 320 T 480 400 T 660 280 L 800 440"
            fill="none"
            stroke="url(#roadGradient)"
            strokeWidth="90"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="road-path"
          />

          <path
            d="M 80 480 Q 200 400, 300 320 T 480 400 T 660 280 L 800 440"
            fill="none"
            stroke="url(#roadLine)"
            strokeWidth="10"
            strokeDasharray="25,12"
            strokeLinecap="round"
            className="road-line"
          />

          <g
            className="traveler"
            style={{
              transform: `translate(${travelerPos.x}px, ${travelerPos.y}px)`,
              transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <ellipse cx="0" cy="28" rx="16" ry="6" fill="#000" opacity="0.15" />
            <g className="traveler-body">
              <circle cx="0" cy="-8" r="10" fill="#f9a825" stroke="#d8872a" strokeWidth="2" />
              <circle cx="-4" cy="-10" r="2" fill="#000" />
              <circle cx="4" cy="-10" r="2" fill="#000" />
              <path d="M -3 -5 Q 0 -3 3 -5" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <rect x="-7" y="2" width="14" height="16" rx="3" fill="#2563eb" stroke="#1e40af" strokeWidth="2" />
              <circle cx="0" cy="8" r="5" fill="rgba(255,255,255,0.3)" />
              <line x1="-7" y1="4" x2="-14" y2="2" stroke="#f9a825" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="-14" cy="2" r="3" fill="#f9a825" />
              <line x1="7" y1="4" x2="14" y2="2" stroke="#f9a825" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="14" cy="2" r="3" fill="#f9a825" />
              <line x1="-4" y1="18" x2="-6" y2="28" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
              <ellipse cx="-6" cy="30" rx="4" ry="3" fill="#333" />
              <line x1="4" y1="18" x2="6" y2="28" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
              <ellipse cx="6" cy="30" rx="4" ry="3" fill="#333" />
            </g>
          </g>

          {stagesData.map((stage, index) => {
            const pos = getCheckpointPosition(index);
            const isSelected = selectedStage?.id === stage.id;

            return (
              <g key={`checkpoint-${stage.id}`}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="42"
                  fill={stage.theme.primary}
                  className={`checkpoint-circle ${isSelected ? "selected" : ""}`}
                  onClick={() => handleNodeClick(stage, index)}
                  style={{ cursor: "pointer" }}
                />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="35"
                  fill="white"
                  className="checkpoint-inner"
                  onClick={() => handleNodeClick(stage, index)}
                  style={{ cursor: "pointer" }}
                />
                <text
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dy="0.3em"
                  className="checkpoint-icon-text"
                  fill={stage.theme.primary}
                  onClick={() => handleNodeClick(stage, index)}
                  style={{ cursor: "pointer" }}
                >
                  {stage.icon}
                </text>
                <line
                  x1={pos.x + (index % 2 === 0 ? -50 : 50)}
                  y1={pos.y - 60}
                  x2={pos.x + (index % 2 === 0 ? -50 : 50)}
                  y2={pos.y - 100}
                  stroke={stage.theme.primary}
                  strokeWidth="2"
                  opacity="0.3"
                />
                <rect
                  x={pos.x + (index % 2 === 0 ? -140 : 20)}
                  y={pos.y - 125}
                  width="120"
                  height="50"
                  rx="8"
                  fill="white"
                  stroke={stage.theme.primary}
                  strokeWidth="2"
                  className="label-bg"
                />
                <text
                  x={pos.x + (index % 2 === 0 ? -80 : 80)}
                  y={pos.y - 105}
                  textAnchor="middle"
                  className="checkpoint-label"
                  fill={stage.theme.primary}
                  onClick={() => handleNodeClick(stage, index)}
                  style={{ cursor: "pointer" }}
                >
                  {stage.shortTitle || `Chặng ${index + 1}`}
                </text>
                <text
                  x={pos.x + (index % 2 === 0 ? -80 : 80)}
                  y={pos.y - 88}
                  textAnchor="middle"
                  className="checkpoint-number"
                  fill="#666"
                  fontSize="12"
                  onClick={() => handleNodeClick(stage, index)}
                  style={{ cursor: "pointer" }}
                >
                  {stage.isDestination ? "Đích" : `#${index + 1}`}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="road-info-panel">
          {displayStage ? (
            <div className="stage-tooltip" key={displayStage.id}>
              <div className="tooltip-header">
                <div
                  className="tooltip-badge"
                  style={{ backgroundColor: displayStage.theme.primary }}
                >
                  {displayStage.isDestination ? "🎯" : `#${displayStage.index + 1}`}
                </div>
                <h3 className="tooltip-title">{displayStage.title}</h3>
              </div>
              <p className="tooltip-desc">{displayStage.shortDesc}</p>
              <button
                className="tooltip-button"
                onClick={() => handleDetailClick(displayStage.id)}
                style={{ backgroundColor: displayStage.theme.primary }}
              >
                Xem Chi Tiết →
              </button>
            </div>
          ) : (
            <div className="info-empty">
              <p className="empty-icon">👇</p>
              <p className="empty-text">Bấm vào một chặng trên con đường để xem chi tiết</p>
            </div>
          )}
        </div>
      </div>

      {selectedStage && (
        <div className="modal-backdrop" onClick={() => setSelectedStage(null)}>
          <div
            className="modal-detail"
            onClick={(e) => e.stopPropagation()}
            style={{ borderTopColor: selectedStage.theme.primary }}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedStage(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="modal-body">
              {selectedStage.image && (
                <div className="modal-image-wrapper">
                  <img
                    src={selectedStage.image}
                    alt={selectedStage.title}
                    className="modal-image"
                  />
                </div>
              )}
              <div className="modal-content">
                <div className="modal-header">
                  <div
                    className="modal-icon"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${selectedStage.theme.primary}, ${selectedStage.theme.secondary})`,
                    }}
                  >
                    {selectedStage.icon}
                  </div>
                  <div>
                    <p
                      className="modal-badge"
                      style={{ color: selectedStage.theme.primary }}
                    >
                      {selectedStage.isDestination
                        ? "🎯 ĐÍCH ĐẾN"
                        : `Chặng ${selectedStage.index + 1}`}
                    </p>
                    <h2 className="modal-title">{selectedStage.title}</h2>
                    {selectedStage.subtitle && (
                      <p className="modal-subtitle">{selectedStage.subtitle}</p>
                    )}
                  </div>
                </div>
                {selectedStage.shortDesc && (
                  <p className="modal-description">{selectedStage.shortDesc}</p>
                )}
                <ul className="modal-bullets">
                  {selectedStage.bullets?.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                {selectedStage.quote && (
                  <blockquote className="modal-quote">
                    {selectedStage.quote}
                  </blockquote>
                )}
                <button
                  className="modal-action-button"
                  onClick={() => handleDetailClick(selectedStage.id)}
                  style={{
                    background: selectedStage.theme.primary,
                    color: "white",
                  }}
                >
                  Xem Trang Chi Tiết →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
