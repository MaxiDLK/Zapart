import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import logo2 from '../../images/logo2.png';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-5">
      <div id="superior" className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5 className='subtitulo'>Ayuda</h5>
          <ul className="nav flex-column">
            <li className="product-item nav-item mb-2">
              <Link to="/devoluciones">Devoluciones</Link>
            </li>
            <li className="product-item nav-item mb-2">
              <Link to="/enviosyentregas">Cambios</Link>
            </li>
            <li className="product-item nav-item mb-2">
              <Link to="/enviosyentregas">Envíos y entregas</Link>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5 className='subtitulo'>Sobre nosotros</h5>
          <ul className="nav flex-column">
            <li className="product-item nav-item mb-2">
              <Link to="/nosotros">Quiénes somos</Link>
            </li>
            <li className="product-item nav-item mb-2">
              <Link to="/proposito">Propósito</Link>
            </li>
            <li className="product-item nav-item mb-2">
              <Link to="/hablanos">Háblanos</Link>
            </li>
          </ul>
        </div>
        <div id="logo" className="col-md-5 offset-md-1 mb-3 text-center">
          <img src={logo2} alt="" className="mb-3" />
          <p className='textof'>
            Crea tu propio estilo,
            <br />
            ¡Llévalo con vos a todos lados!
          </p>
          <ul id="redes" className="nav justify-content-center list-unstyled d-flex">
          <li className="product-item mx-2">
    <a 
      href="https://twitter.com" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaTwitter size={30} color="#F2EBE7" />
    </a>
  </li>
  <li className="product-item mx-2">
    <a 
      href="https://www.instagram.com/zapart.shoes/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaInstagram size={30} color="#F2EBE7" />
    </a>
  </li>
  <li className="product-item mx-2">
    <a 
      href="https://facebook.com" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaFacebookF size={30} color="#F2EBE7" />
    </a>
  </li>
          </ul>
        </div>
      </div>
      
      <div className="copy">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <span>©2024 ZAPART Todos los derechos reservados</span>
          </div>

          <ul id="bases" className="nav col-md-4 justify-content-center list-unstyled d-flex">
            <li className="product-item mx-3">
              <Link to="/politica-y-privacidad">Política y Privacidad</Link>
            </li>
            <li className="product-item mx-3">
              <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
            </li>
          </ul>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
