import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stage from "./pages/Stage";
import ALReport from "./pages/ALReport";
import TeamIntroduction from "./pages/TeamIntroduction";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stage/:id" element={<Stage />} />
      <Route path="/al-report" element={<ALReport />} />
      <Route path="/team" element={<TeamIntroduction />} />
    </Routes>
  );
}
