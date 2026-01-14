import { useNavigate } from "react-router-dom";
import { stagesData } from "../../data/stagesData";
import CircularRoadmap from "./CircularRoadmap";
import "./Roadmap.css";

export default function Roadmap() {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => navigate("/al-report")}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "12px 24px",
          backgroundColor: "#FFD700",
          color: "#d32f2f",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          zIndex: 999,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          whiteSpace: "nowrap"
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#FFC700";
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#FFD700";
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
        }}
      >
        📊 Báo Cáo AL
      </button>

      <button
        onClick={() => navigate("/team")}
        style={{
          position: "fixed",
          top: "20px",
          right: "240px",
          padding: "12px 24px",
          backgroundColor: "#FF6B9D",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          zIndex: 999,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          whiteSpace: "nowrap"
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#FF5A8F";
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#FF6B9D";
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
        }}
      >
        👥 Thành Viên
      </button>

      <CircularRoadmap stagesData={stagesData} />
    </div>
  );
}
