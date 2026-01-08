
import "./Roadmap.css";

const RoadmapItem = ({ title, content }) => {
  return (
    <div className="roadmap-item">
      <h3>{title}</h3>
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapItem;
