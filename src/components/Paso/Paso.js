import React from 'react';
import { FaClipboard} from 'react-icons/fa';
import { BiTag, BiPalette, BiBasket, BiMapPin } from 'react-icons/bi';
import "./Paso.css"

function Pasos() {
  return (
    <div className="pasos-container">
      {/* Título centrado */}
      <h2 className="titulo-pasos">¿CÓMO FUNCIONA?</h2>
      
      <div className="row">
        {/* Primeros 3 pasos */}
        <div className="col-md-4">
          <div className="step-container">
            <div className="icon-container">
              <BiTag size={32} />
            </div>
            <h5>Elegi el producto que quieras</h5>
            <p className='paso'>
              Elegi el producto que quieras dentro de nuestra seccion de personalizables.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="step-container">
            <div className="icon-container">
              <BiPalette size={32} />
            </div>
            <h5>Diseña tu estilo</h5>
            <p className='paso'>
              Bajate nuestra app, diseñalo como a vos te guste y una vez terminado ingresa el codigo en la página.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="step-container">
            <div className="icon-container">
              <BiBasket size={32} />
            </div>
            <h5>Realiza la compra</h5>
            <p className='paso'>
              Añadi las cosas al carrito y finaliza la compra.
            </p>
          </div>
        </div>

        {/* Últimos 2 pasos */}
        <div className="col-md-6">
          <div className="step-container">
            <div className="icon-container">
              <FaClipboard size={32} />
            </div>
            <h5>Retira o recibi el producto en tu casa</h5>
            <p className='paso'>
              Podes elegir si recibirlo en tu dirección o retirarlo en alguna de nuestras sucursales.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="step-container">
            <div className="icon-container">
              <BiMapPin size={32} />
            </div>
            <h5>Disfruta de tu compra!</h5>
            <p className='paso'>
              Podes seguirnos en nuestras redes para enterarte cuando haya promociones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pasos;
