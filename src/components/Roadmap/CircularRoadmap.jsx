// src/components/Roadmap/CircularRoadmap.jsx
import { useState, useEffect, useMemo } from "react";
import "./RoadroadmapStyle.css";

// --- LINK ẢNH ---
const trongDongBg = "https://png.pngtree.com/background/20220805/original/pngtree-vietnam-dong-son-bronze-drum-pattern-print-background-picture-image_1915087.jpg"; 
const uncleHoIconUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ho_Chi_Minh_1946.jpg/220px-Ho_Chi_Minh_1946.jpg";
// CẬP NHẬT: Icon Búa Liềm (Cờ Đảng)
const dangIconUrl = "https://tse2.mm.bing.net/th/id/OIP.SKfx68RFKkcBBF0JF9RqPwHaEK?pid=Api&P=0&h=220";

export default function CircularRoadmap({ stagesData }) {
  const [selectedStage, setSelectedStage] = useState(null);
  const [displayStage, setDisplayStage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [activeIndex, setActiveIndex] = useState(0); 

  // --- CẤU HÌNH KÍCH THƯỚC & VỊ TRÍ ---
  const CX = 450; 
  const CY = 500; 
  
  const R_STAR = 300; 
  const R_NODE = 365; 
  
  const r_star = 115;      
  const r_motion = r_star * (R_NODE / R_STAR); 

  // Hàm tính toạ độ chung
  const getPoint = (angle, radius) => {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
      x: CX + radius * Math.cos(rad),
      y: CY + radius * Math.sin(rad)
    };
  };

  const checkpointAngles = [0, 72, 144, 216, 288]; 
  
  const getCheckpointPosition = (index) => {
    return getPoint(checkpointAngles[index], R_NODE);
  };

  // PATH NGÔI SAO VÀNG
  const visualStarPath = useMemo(() => {
    let path = "";
    for (let i = 0; i < 5; i++) {
      const tip = getPoint(i * 72, R_STAR);      
      const valley = getPoint(i * 72 + 36, r_star); 
      if (i === 0) path += `M ${tip.x} ${tip.y} `; 
      else path += `L ${tip.x} ${tip.y} `;         
      path += `L ${valley.x} ${valley.y} `;        
    }
    path += "Z"; 
    return path;
  }, []);

  // PATH ĐƯỜNG ĐI CỦA BÁC
  const motionPathData = useMemo(() => {
    let path = "";
    for (let i = 0; i < 5; i++) {
      const tip = getPoint(i * 72, R_NODE);      
      const valley = getPoint(i * 72 + 36, r_motion); 
      if (i === 0) path += `M ${tip.x} ${tip.y} `; 
      else path += `L ${tip.x} ${tip.y} `;         
      path += `L ${valley.x} ${valley.y} `;        
    }
    path += "Z"; 
    return path;
  }, []);

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
    setActiveIndex(index);
  };

  const handleOpenModal = () => {
    if (displayStage) setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // --- HÀM TÍNH VỊ TRÍ NHÃN (Đã fix lỗi đè chữ) ---
  const getLabelStyle = (index) => {
    const pos = getCheckpointPosition(index);
    const deltaX = pos.x - CX;
    const deltaY = pos.y - CY;
    const distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
    
    let labelOffset = 0;

    switch (index) {
        case 0: 
            labelOffset = 90; break;  
        case 1: 
        case 4: 
            labelOffset = 160; break; // Đẩy xa ở hai bên hông
        case 2: 
        case 3: 
            labelOffset = 120; break; 
        default: 
            labelOffset = 100;
    }

    const pushFactor = labelOffset / distance; 
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
        
        {/* --- PHẦN TIÊU ĐỀ ĐÃ CHỈNH SỬA --- */}
        <div className="roadmap-hero" style={{ paddingTop: "20px" }}>
          <div 
            className="roadmap-kicker" 
            style={{ 
                color: "#fbbf24", 
                borderColor: "#fbbf24",
                // Style mới cho to và đẹp hơn
                fontSize: "24px",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "1px",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "8px 20px",
                backgroundColor: "rgba(0,0,0,0.2)", // Thêm nền mờ nhẹ cho nổi bật
                borderRadius: "30px"
            }}
          >
            <img src={dangIconUrl} alt="Đảng" style={{ width: "32px", height: "32px" }} />
            Tư tưởng Hồ Chí Minh
          </div>
          
          <h1 className="roadmap-title" style={{ color: "#fff", textShadow: "0 2px 10px rgba(0,0,0,0.8)", marginTop: "10px" }}>
            Con đường đi lên CNXH
          </h1>
        </div>

        <div className="road-container" style={{ background: "transparent", boxShadow: "none", padding: "0" }}>
          
          <svg className="road-svg" viewBox="0 0 900 1000" style={{ overflow: "visible" }}>
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* VẼ NGÔI SAO VÀNG */}
            <path
              d={visualStarPath}
              fill="#FFD700"    
              fillOpacity="0.85" 
              stroke="#FFFF00"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 0 30px rgba(255, 215, 0, 0.7))" }}
            />

            {/* VẼ ĐƯỜNG NỐI */}
            {stagesData.map((_, index) => {
                const start = getPoint(index * 72, R_STAR); 
                const end = getPoint(index * 72, R_NODE - 20); 
                return (
                    <line 
                        key={`line-${index}`}
                        x1={start.x} y1={start.y}
                        x2={end.x} y2={end.y}
                        stroke="#FFD700"
                        strokeWidth="3"
                        strokeDasharray="4 2"
                        opacity="0.6"
                    />
                )
            })}

            {/* CHECKPOINTS */}
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
                    style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
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

                  <g transform={`translate(${pos.x}, ${pos.y})`}>
                    <g style={labelStyle}>
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

            {/* TRAVELER (BÁC HỒ) */}
            <foreignObject
              width="100"
              height="100"
              style={{
                offsetPath: `path('${motionPathData}')`,
                offsetDistance: `${activeIndex * 20}%`,
                transition: "offset-distance 1.5s ease-in-out",
                transform: "translate(-50px, -50px)",
                offsetRotate: "0deg",
                pointerEvents: "none",
                overflow: "visible",
                zIndex: 50
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
          <div className="road-info-panel" style={{ marginTop: "30px", position: "relative", zIndex: 20 }}>
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

      {/* Modal Popup */}
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
                <>
                  <img 
                    src={displayStage.image} 
                    alt={displayStage.title} 
                    className="modal-hero-image"
                  />
                  {displayStage.imageSource && (
                    <p style={{ fontSize: "12px", color: "#666", marginTop: "-20px", marginBottom: "20px", fontStyle: "italic" }}>
                      Nguồn Ảnh: <a href={displayStage.imageSource} target="_blank" rel="noopener noreferrer" style={{ color: "#d32f2f", textDecoration: "none" }}>{displayStage.imageSource}</a>
                    </p>
                  )}
                </>
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