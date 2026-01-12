// src/components/Roadmap/CircularRoadmap.jsx
import { useState, useEffect } from "react";
import "./RoadroadmapStyle.css";

// --- LINK ẢNH ---
const trongDongBg = "https://png.pngtree.com/background/20220805/original/pngtree-vietnam-dong-son-bronze-drum-pattern-print-background-picture-image_1915087.jpg"; 
const uncleHoIconUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ho_Chi_Minh_1946.jpg/220px-Ho_Chi_Minh_1946.jpg";

export default function CircularRoadmap({ stagesData }) {
  const [selectedStage, setSelectedStage] = useState(null);
  const [displayStage, setDisplayStage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Vị trí mặc định ban đầu
  const [travelerPos, setTravelerPos] = useState({ x: 450, y: 160 });

  // --- CẤU HÌNH KÍCH THƯỚC & VỊ TRÍ (Đã tinh chỉnh lại) ---
  const CX = 450; 
  const CY = 500; // Hạ thấp thêm chút nữa để cân giữa khung 920
  const R = 300;  
  const r = 115;  

  const getStarPoint = (angle, radius) => {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
      x: CX + radius * Math.cos(rad),
      y: CY + radius * Math.sin(rad)
    };
  };

  const checkpointAngles = [0, 72, 144, 216, 288]; 
  
  const getCheckpointPosition = (index) => {
    return getStarPoint(checkpointAngles[index], R);
  };

  const createStarPath = () => {
    let path = "";
    for (let i = 0; i < 5; i++) {
      const tip = getStarPoint(i * 72, R);      
      const valley = getStarPoint(i * 72 + 36, r); 
      if (i === 0) path += `M ${tip.x} ${tip.y} `; 
      else path += `L ${tip.x} ${tip.y} `;         
      path += `L ${valley.x} ${valley.y} `;        
    }
    path += "Z"; 
    return path;
  };

  useEffect(() => {
    if (selectedStage) {
      const timer = setTimeout(() => {
        setDisplayStage(selectedStage);
      }, 800);
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

  const handleOpenModal = () => {
    if (displayStage) setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // --- TINH CHỈNH LABEL ---
  const getLabelStyle = (index) => {
    const pos = getCheckpointPosition(index);
    const deltaX = pos.x - CX;
    const deltaY = pos.y - CY;
    const distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
    
    // Tăng lực đẩy (pushFactor) lên 120 để label xa đỉnh sao hơn
    const pushFactor = 120 / distance; 
    
    return {
      transform: `translate(${deltaX * pushFactor}px, ${deltaY * pushFactor}px)`
    };
  };

  return (
    <div 
      className="road-roadmap"
      style={{
        backgroundImage: `url(${trongDongBg})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center 60%", 
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#d32f2f" 
      }}
    >
      <div 
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#b71c1c", 
          mixBlendMode: "multiply",   
          opacity: 0.7, 
          zIndex: 1
        }} 
      />
      
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.6) 100%)",
          zIndex: 2,
          pointerEvents: "none"
        }} 
      />

      <div className="roadmap-content-wrapper" style={{ position: "relative", zIndex: 10 }}>
        
        <div className="roadmap-hero" style={{ paddingTop: "20px" }}>
          <p className="roadmap-kicker" style={{ color: "#fbbf24", borderColor: "#fbbf24" }}>🛣️ Tư tưởng Hồ Chí Minh</p>
          <h1 className="roadmap-title" style={{ color: "#fff", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
            Con đường đi lên CNXH
          </h1>
        </div>

        <div className="road-container" style={{ background: "transparent", boxShadow: "none", padding: "0" }}>
          
          {/* Tăng height viewBox lên 920 để chứa label bên dưới cùng */}
          <svg className="road-svg" viewBox="0 0 900 920" style={{ overflow: "visible" }}>
            <defs>
              <linearGradient id="starGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffff00" /> 
                <stop offset="100%" stopColor="#ffab00" /> 
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* NGÔI SAO */}
            <path
              d={createStarPath()}
              fill="#FFD700"    
              fillOpacity="0.85" 
              stroke="#FFFF00"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 0 30px rgba(255, 215, 0, 0.7))" }}
            />

            {/* Checkpoints */}
            {stagesData.map((stage, index) => {
              const pos = getCheckpointPosition(index);
              const isSelected = selectedStage?.id === stage.id;
              const labelStyle = getLabelStyle(index);

              return (
                <g key={`checkpoint-${stage.id}`} style={{ cursor: "pointer" }} onClick={() => handleNodeClick(stage, index)}>
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isSelected ? 40 : 32} 
                    fill="#fff"
                    stroke={stage.theme.primary}
                    strokeWidth="5"
                    className="checkpoint-circle"
                  />
                  
                  <text
                    x={pos.x}
                    y={pos.y}
                    dy="0.35em"
                    textAnchor="middle"
                    fill={stage.theme.primary}
                    fontSize="20"
                    fontWeight="900"
                  >
                    {index + 1}
                  </text>

                  {/* LABEL GROUP */}
                  <g transform={`translate(${pos.x}, ${pos.y})`}>
                    <g style={labelStyle}>
                        {/* Box label to hơn: width 200, height 46 */}
                        <rect 
                          x={-100} 
                          y={-23} 
                          width="200" 
                          height="46" 
                          rx="23" 
                          fill="white"
                          stroke={stage.theme.primary}
                          strokeWidth="2"
                          style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))" }}
                        />
                        {/* Font chữ to hơn: 16px */}
                        <text
                          x="0"
                          y="6"
                          textAnchor="middle"
                          fill="#1a1a1a"
                          fontSize="16"
                          fontWeight="bold"
                        >
                          {stage.shortTitle}
                        </text>
                    </g>
                  </g>
                </g>
              );
            })}

            {/* Traveler */}
            <foreignObject
              x={travelerPos.x - 50} 
              y={travelerPos.y - 50}
              width="100"
              height="100"
              style={{
                transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                pointerEvents: "none",
                overflow: "visible" 
              }}
            >
              <div style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "4px solid #fff",
                boxShadow: "0 0 30px #ffff00", 
                overflow: "hidden",
                backgroundColor: "#fff",
                position: "relative"
              }}>
                <img 
                  src={uncleHoIconUrl} 
                  alt="Traveler" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </foreignObject>

          </svg>

          {/* Info Panel */}
          <div className="road-info-panel" style={{ marginTop: "-10px", position: "relative", zIndex: 20 }}>
            {displayStage ? (
              <div 
                className="stage-tooltip active" 
                style={{ 
                    borderTop: `5px solid ${displayStage.theme.primary}`
                }}
              >
                <div className="tooltip-header">
                  <span className="tooltip-icon" style={{ fontSize: "28px" }}>{displayStage.icon}</span>
                  <div className="tooltip-title-group">
                    <h3>{displayStage.title}</h3>
                    <p>{displayStage.subtitle}</p>
                  </div>
                </div>
                <p className="tooltip-desc">{displayStage.shortDesc}</p>
                <button
                  className="tooltip-button"
                  onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(); 
                  }}
                  style={{ backgroundColor: displayStage.theme.primary }}
                >
                  Xem toàn bộ nội dung (Popup) →
                </button>
              </div>
            ) : (
              <div className="info-empty">
                <p>👇 Bấm vào các đỉnh ngôi sao để xem nội dung</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Popup - Không thay đổi */}
      {isModalOpen && displayStage && (
        <div className="roadmap-modal-overlay" onClick={handleCloseModal}>
          <div 
            className="roadmap-modal-container" 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="roadmap-modal-close" onClick={handleCloseModal}>✕</button>

            <div className="roadmap-modal-header">
              <div className="modal-stage-label">CHẶNG {displayStage.id}</div>
              <h2>{displayStage.title}</h2>
              <p>{displayStage.subtitle}</p>
            </div>

            <div className="roadmap-modal-body">
              {displayStage.image && (
                <img 
                  src={displayStage.image} 
                  alt={displayStage.title} 
                  className="modal-hero-image"
                />
              )}
              <p className="modal-intro-text">{displayStage.shortDesc}</p>
              {displayStage.sections && displayStage.sections.length > 0 ? (
                <div className="modal-sections-grid">
                  {displayStage.sections.map((sec, idx) => (
                    <div key={idx} className="modal-section-card" style={{ borderLeftColor: displayStage.theme.primary }}>
                      <h3 style={{ color: displayStage.theme.primary }}>{sec.heading}</h3>
                      <ul>
                        {sec.points.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="modal-bullets-list">
                  {displayStage.bullets?.map((bull, i) => (
                    <li key={i}>{bull}</li>
                  ))}
                </ul>
              )}
              {displayStage.quote && (
                <div className="modal-quote-box">
                  <p>“{displayStage.quote}”</p>
                  <span>— Hồ Chí Minh</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}