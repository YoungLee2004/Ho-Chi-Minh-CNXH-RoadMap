import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stage from "./pages/Stage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stage/:id" element={<Stage />} />
      </Routes>
    </BrowserRouter>
  );
}
