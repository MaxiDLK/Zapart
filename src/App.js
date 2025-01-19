import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nosotros from "./components/Nosotros/Nosotros";
import Devoluciones from "./components/Devoluciones/Devoluciones";
import Creaydiseña from "./components/Creaydiseña/Creaydiseña";
import EnviosyEntregas from './components/EnviosyEntregas/EnviosyEntregas';
import Creaydiseña2 from "./components/Creaydiseña2/Creaydiseña2";
import Tienda from "./components/Tienda/Tienda";
import Proposito from "./components/Proposito/Proposito";
import Contacto from "./components/Contacto/Contacto";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
         <Route path="/crea" element={<Creaydiseña />} /> 
         <Route path="/crea2" element={<Creaydiseña2/>} /> 
         <Route path="/tienda" element={<Tienda />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/devoluciones" element={<Devoluciones />} />
          <Route path="/enviosyentregas" element={<EnviosyEntregas />} />
          <Route path="/proposito" element={<Proposito />} />
          <Route path="/register" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/hablanos" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
