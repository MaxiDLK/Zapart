import React from "react";
import "./Creaydiseña.css";
import asdasd from "../../images/asd123.png"; // Asegúrate de que la imagen esté en la ruta correcta
import {Link} from "react-router-dom";
import Card from '../Card/Card';

const Creaydiseña = () => {
  return (
    <div className="image-container">
      <img src={asdasd} alt="Creaydiseña" className="image" />
      <div className="text-overlay">
        <h3>ZAPART - Vestí tu estilo</h3> <br />
        <h1>
          CREÁ TU CALZADO Y PINTÁ EL <br />
          SUELO CON CADA PASO
        </h1>{" "}
        <br /> <br /> <br /> <br /> <br />
        <h2>
          ¡Descubrí el mundo de las zapatillas
          <br />
          con Zapart y dejate llevar por
          <br />
          nuestra pasión por el calzado!
        </h2>
        <br />
        <div>
          <Link to="/crea2">
            <button className="download-btn">Diseñar ahora</button>
          </Link>
          <Link to="/ver-estilos">
            <button className="download-btn">Ver estilos</button>
          </Link>
        </div>
      </div>
      <div className="homeproducts-container">
      <h1 className="title">PRODUCTOS DESTACADOS</h1>
      <p className="subtitle">Elegi alguno de nuestros productos destacados</p>
    </div>
      <Card start={7} end={17} showFilters={false}/>
    </div>
    
  );
};

export default Creaydiseña;
