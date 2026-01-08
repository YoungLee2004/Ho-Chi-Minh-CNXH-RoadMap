import { stagesData } from "../../data/stagesData";
import CircularRoadmap from "./CircularRoadmap";
import "./Roadmap.css";

export default function Roadmap() {
  return <CircularRoadmap stagesData={stagesData} />;
}
