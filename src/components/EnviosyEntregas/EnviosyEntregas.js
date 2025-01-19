import React from 'react';
import './EnviosyEntregas.css';
import Banner4 from '../Banner4/Banner4';

const EnviosyEntregas = () => {
  return (
    <div>
      <Banner4 />
      <div className="envios-container">
        <h1 className="envios-title">¿CUÁLES SON LAS OPCIONES DE ENTREGA DE ZAPART?</h1>
        <p className="envios-subtitle">
          Hacemos envíos a todo el país, excepto a las provincias de Misiones y Tierra del Fuego.
          ¡Si tu compra es mayor a $255.000 el envío es Gratis! (Aplica para los envíos Express y Estándar)
        </p>
        
        <h2 className="envios-title">Envío Same Day:</h2>
        <p className="envios-text">
          Recibí en el mismo día comprando antes de las 11am. Las entregas se realizan de Lunes a Viernes entre las 15hs y 22hs.
          Podrás optar por este servicio si tu código postal es de CABA, Primer y segundo cordón de AMBA.
        </p>

        <h2 className="envios-title">Envío Express:</h2>
        <p className="envios-text">
          <strong>CABA/GBA:</strong> Recibí en 24 hs hábiles tu pedido realizando la compra antes de las 14hs. Las entregas se realizan Lunes a Viernes de 9 a 21hs.
        </p>
        <p className="envios-text">
          <strong>La Plata/Mar del Plata/Bahía Blanca:</strong> Realiza tu compra y recibí a partir de los 3 días hábiles. Las entregas se realizan de Lunes a Viernes de 9hs a 21hs.
        </p>

        <h2 className="envios-title">Envío Estándar:</h2>
        <p className="envios-text">
          Contamos con varias opciones para que recibas tu compra. Las entregas se realizan de Lunes a Viernes entre las 9hs y las 18hs.
        </p>
        <p className="envios-text">
          Los plazos de entrega son los siguientes:
        </p>
        <ul className="envios-list">
          <li>CABA - Primer y segundo cordón de AMBA: A partir de 2 días hábiles.</li>
          <li>GBA: A partir de 3 días hábiles.</li>
          <li>Centro del País: A partir de 6 días hábiles.</li>
          <li>Cuyo: A partir de 6 días hábiles.</li>
          <li>Norte: A partir de 6 días hábiles.</li>
          <li>Patagonia: A partir de 9 días hábiles.</li>
          <li>Santa Fé/Córdoba: Realiza tu compra y recibí a partir de los 5 días hábiles. Las entregas se realizan de Lunes a Viernes entre las 9hs y las 21hs.</li>
        </ul>

        <h2 className="envios-title">Punto de Retiro:</h2>
        <p className="envios-text">
          Podés optar por retirar tu compra por el punto más cercano a tu domicilio. Para retirar el pedido, el comprador debe concurrir con: DNI físico del comprador y Número de Tracking sin falta.
        </p>
        <p className="envios-text">
          Tenés 7 días hábiles para retirar tu pedido una vez que llegue al punto, de lo contrario la compra regresa al centro de distribución y avanzamos con el reintegro.
        </p>

        <p className="envios-text">
          Aclaración: Antes de finalizar tu compra podrás visualizar el plazo estimado de entrega al ingresar el código postal correspondiente a tu domicilio.
        </p>

        <h1 className="envios-title">¿CUÁNTO CUESTA EL ENVÍO?</h1>
        <p className="envios-text">
          El costo del envío lo podrás calcular una vez que te encuentres en el carrito de compras e ingreses el código postal correspondiente a tu dirección de envío.
          También podrás visualizar el plazo estimado de entrega.
        </p>

        <h1 className="envios-title">¿CÓMO SIGO MI PEDIDO?</h1>
        <p className="envios-text">
          Para poder seguir tu pedido hacé <a href="#">clic acá</a> y elegí el método de envío que hayas elegido.
        </p>

        <h1 className="envios-title">INFORMACIÓN ADICIONAL</h1>
        <p className="envios-text">
          • Los pedidos se procesan y envían de lunes a viernes, excepto en los días festivos nacionales.
        </p>
        <p className="envios-text">
          • Tené en cuenta que el procesamiento y la entrega de los pedidos pueden demorarse en los días festivos.
        </p>
        <p className="envios-text">
          • Tu pedido no puede enviarse a direcciones fuera del país, pero podés comprar en Nike en varias ubicaciones a nivel mundial.
        </p>
        <p className="envios-text">
          • En caso de que el correo realice dos visitas y no te encuentre en el domicilio, tu compra regresará a nuestro depósito y se gestionará el reintegro correspondiente.
        </p>
      </div>
    </div>
  );
};

export default EnviosyEntregas;
