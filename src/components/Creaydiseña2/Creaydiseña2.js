import React from 'react';
import './Creaydiseña2.css'; 
import asdasd from '../../images/asdasd.png'; // Asegúrate de que la imagen esté en la ruta correcta

const Creaydiseña2 = () => {
  return (
    <div className="image-container">
      <img src={asdasd} alt="Creaydiseña2" className="image" />
      <div className="text-overlay">
        <h1>ZAPART APP</h1>
        <h2>Creá tus diseños e importalos a la 
          <br/>página web por nuestra aplicación móvil!</h2>
          <a 
  href="https://play.google.com/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="download-btn">
    Descargar
  </button>
</a>
        <div className="qr-section">
          <h1>CÓDIGO QR</h1>
          <h2>Descargá la aplicación sin tener que esforzarte 
          <br/>buscando en otro lado. ¡Escaneá el código y listo!</h2>
        </div>
      </div>
    </div>
  );
};

export default Creaydiseña2;
