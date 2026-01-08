import { stagesData } from "../../data/stagesData";
import RoadmapItem from "./RoadmapItem";
import "./Roadmap.css";

export default function Roadmap() {
  return (
    <div className="roadmap-container">
      <div className="roadmap-hero">
        <p className="roadmap-kicker">Poster · Con đường quá độ lên CNXH</p>
        <h1 className="roadmap-title">
          Lộ trình tư tưởng Hồ Chí Minh về CNXH
        </h1>
        <p className="roadmap-subtitle">
          Bố cục trái → phải, rõ khối, ít chữ; nhấn màu đỏ – vàng – xanh nhạt và điểm nhấn tím cho đích đến. Hover để xem chi tiết từng chặng.
        </p>
        <div className="roadmap-palette">
          <span className="swatch swatch-red" aria-label="Đỏ" />
          <span className="swatch swatch-gold" aria-label="Vàng" />
          <span className="swatch swatch-green" aria-label="Xanh nhạt" />
          <span className="swatch swatch-blue" aria-label="Xanh dương" />
          <span className="swatch swatch-purple" aria-label="Tím đích đến" />
        </div>
        <p className="roadmap-quote">“Không có gì quý hơn độc lập, tự do.”</p>
      </div>

      <div className="timeline">
        {stagesData.map((stage, index) => (
          <RoadmapItem
            key={stage.id}
            stage={stage}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
