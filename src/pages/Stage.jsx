// src/pages/Stage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { stagesData } from "../data/stagesData";

export default function Stage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const stage = stagesData.find((item) => item.id === Number(id));

  if (!stage) {
    return <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Không tìm thấy dữ liệu</h2>
      <button onClick={() => navigate("/")}>Quay lại</button>
    </div>;
  }

  const gradient = `linear-gradient(135deg, ${stage.theme.primary}, ${stage.theme.secondary})`;

  return (
    <div
      style={{
        padding: "40px 20px 80px",
        background: "#f8f9fa",
        minHeight: "100vh",
        color: "#333",
      }}
    >
      <button 
        onClick={() => navigate("/")}
        style={{
            marginBottom: 20,
            padding: "8px 16px",
            border: "none",
            background: "#ddd",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold"
        }}
      >
        ← Quay lại Bản đồ
      </button>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{ background: gradient, color: "#fff", padding: "40px" }}>
            <div style={{ textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.9rem", opacity: 0.9 }}>
                {stage.isDestination ? "Đích đến" : `Chặng số ${stage.id}`}
            </div>
            <h1 style={{ marginTop: "10px", fontSize: "2.5rem" }}>{stage.title}</h1>
            <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>{stage.subtitle}</p>
        </div>

        <div style={{ padding: "40px" }}>
            {/* Ảnh minh họa */}
            {stage.image && (
                <img 
                    src={stage.image} 
                    alt={stage.title} 
                    style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "12px", marginBottom: "30px" }}
                />
            )}

            {/* Mô tả ngắn */}
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "30px", fontStyle: "italic" }}>
                {stage.shortDesc}
            </p>

            <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "30px 0" }} />

            {/* Phần nội dung chi tiết (Sections) */}
            {stage.sections && stage.sections.length > 0 ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "30px" }}>
                    {stage.sections.map((sec, idx) => (
                        <div key={idx} style={{ background: "#f8f9fa", padding: "20px", borderRadius: "10px", borderLeft: `4px solid ${stage.theme.primary}` }}>
                            <h3 style={{ color: stage.theme.primary, marginTop: 0 }}>{sec.heading}</h3>
                            <ul style={{ paddingLeft: "20px", margin: 0 }}>
                                {sec.points.map((pt, i) => (
                                    <li key={i} style={{ marginBottom: "8px" }}>{pt}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                // Nếu không có sections thì hiện bullets thường
                <ul style={{ background: "#f0f7ff", padding: "30px 40px", borderRadius: "10px" }}>
                    {stage.bullets?.map((bull, i) => (
                        <li key={i} style={{ marginBottom: "10px", fontSize: "1.1rem" }}>{bull}</li>
                    ))}
                </ul>
            )}

            {/* Trích dẫn */}
            {stage.quote && (
                <div style={{ marginTop: "40px", padding: "20px", background: "#fff3cd", color: "#856404", borderRadius: "8px", textAlign: "center" }}>
                    <p style={{ fontSize: "1.3rem", margin: 0 }}>“{stage.quote}”</p>
                    <span style={{ display: "block", marginTop: "10px", fontSize: "0.9rem" }}>(Hồ Chí Minh)</span>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}