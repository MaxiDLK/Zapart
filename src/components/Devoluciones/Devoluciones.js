import React from 'react';
import './Devoluciones.css';
import Banner4 from '../Banner4/Banner4';

const Devoluciones = () => {
  
  return (
    <div><Banner4/>
    <div className="devoluciones-container">
      <h1 className="devoluciones-title">CÓMO INICIO MI DEVOLUCIÓN?</h1><br/>
      <p className="devoluciones-subtitle">Si realizaste una compra en ZAPART y queres devolver tu producto, a continuación te contamos cómo:</p>
      <div className="devoluciones-text">
        <p><strong>1- Autogestiona tu devolución</strong></p>
        <p>¡Devolver tu producto, es muy simple y no tiene costo! Ingresá a este <a href="#">link</a> e iniciá tu gestión. Tené a mano el mail con el que compraste y busca el número de pedido en el mail.</p>
        <p>Para más información visitá nuestras <a href="#">políticas de cambios y devoluciones</a>.</p>
        
        <p><strong>2- Prepará tus productos</strong></p>
        <p>Empaquetá tus productos adecuadamente siguiendo estas instrucciones:</p>
        <ul>
          <li>A. El producto debe estar dentro de su caja o bolsa original en buen estado, con sus etiquetas correspondientes, sin rayones ni escrituras y dentro de la caja secundaria, tal como lo recibiste.</li>
          <li>B. Te pedimos que le adiciones un papel pegado en el exterior con el código que te detallamos por mail.</li>
          <li>C. En caso de reutilizar la caja o la bolsa original, retirá todas las etiquetas antes de colocar el código.</li>
        </ul>
        <p>Es importante seguir estos pasos, ya que el packaging es una parte del producto.</p>
        
        <p><strong>3- Recepción y reembolso</strong></p>
        <p>Una vez recibidos tus productos en nuestro depósito, serán evaluados por nuestro equipo de control de calidad. Cuando finalice el proceso, gestionaremos el reembolso al mismo medio de pago con el que hayas abonado. El valor del reembolso es equivalente al valor de los productos que figuran en el ticket de compra. Para más información hacé <a href="#">clic aquí</a>.</p>
        <br/>
        <h2 className="devoluciones-title">EXCEPCIONES DE LA POLÍTICA DE DEVOLUCIONES</h2><br/>
        <p>Si realizaste una compra en ZAPART tenés hasta 30 días hábiles para realizar una devolución desde el día que recibiste tu pedido.</p>
        <p>Si realizaste la compra a través de nuestra Tienda Oficial de Mercado Libre, tendrás que gestionar tu devolución mediante la misma plataforma. Si tenes dudas, te recomendamos ingresar a Mercado Libre y seguir los pasos para poder avanzar con tu solicitud.</p>
        <p>No se podrán devolver los productos que se hayan cambiado anteriormente en nuestros locales habilitados.</p>
        <p>Si realizaste la compra de un producto dentro de nuestro sitio online y el mismo presenta fallas, podrás avanzar únicamente con la devolución. Para más información hacé <a href="#">clic aquí</a>.</p>
      </div>
    </div>
    </div>
  );
};

export default Devoluciones;
