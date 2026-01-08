
import RoadmapItem from "./RoadmapItem";
import { roadmapData } from "../../data/roadmapData";
import "./Roadmap.css";

const Roadmap = () => {
  return (
    <section className="roadmap">
      <h2>Con đường quá độ lên CNXH ở Việt Nam</h2>
      {roadmapData.map((step) => (
        <RoadmapItem
          key={step.id}
          title={step.title}
          content={step.content}
        />
      ))}
    </section>
  );
};

export default Roadmap;
