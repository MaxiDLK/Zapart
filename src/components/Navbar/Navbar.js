import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";

function Navbar() {
  const location = useLocation(); // Hook para obtener la ubicación actual

  // Función para verificar si la ruta está activa
  const isActive = (paths) => paths.includes(location.pathname);


  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="ZAPART" width="150" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/home") ? "active" : ""}`}
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive(["/crea", "/crea2"]) ? "active" : ""}`}
                to="/crea" 
              >
                
                Crea y Diseña
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/tienda") ? "active" : ""}`}
                to="/tienda"
              >
                Tienda
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/nosotros") ? "active" : ""}`}
                to="/nosotros"
              >
                Nosotros
              </Link>
              
            </li>
          </ul>
          <form action="/register" method="get" className="d-inline">
            <button className="btn" type="submit">
              Register
            </button>
          </form>
          <form action="/login" method="get" className="d-inline">
            <button className="btn btn-outline2" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
