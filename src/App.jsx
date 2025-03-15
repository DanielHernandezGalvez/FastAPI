import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Paquetes from "./pages/Paquetes";
import Compra from "./pages/Compra";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/comprar/:duracion" element={<Compra />} />
      </Routes>
    </Router>
  );
}

export default App;
