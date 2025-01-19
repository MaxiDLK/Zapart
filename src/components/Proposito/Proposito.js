import React from 'react';
import './Proposito.css'; // Asegúrate de crear un archivo CSS para este componente
import Banner5 from '../Banner5/Banner5'; // Si tienes un banner, puedes incluirlo
import Carrousel1 from '../Carrousel1/Carrousel1'; // Si tienes un banner, puedes incluirlo

const Proposito = () => {
  return (
    <div>
        <Banner5 />
      <div className="proposito-container">
        <h1 className="proposito-title">Nuestro Propósito en Zapart</h1>
        <p className="proposito-text">
          En Zapart, cada par de zapatillas cuenta una historia única, y nos emociona ser parte de esa narrativa contigo.
          Sabemos que tus zapatillas no son solo un accesorio; son una extensión de tu personalidad, una forma de expresar tu estilo y vivir tu pasión.
        </p>
        <p className="proposito-text">
          Por eso, trabajamos con la misión de ofrecer una colección increíblemente diversa de calzado, que va desde los modelos clásicos que nunca pasan de moda, hasta las tendencias más innovadoras.
          En nuestra tienda, encontrarás opciones para todos los gustos: desde deportivos y casuales hasta elegantes y exclusivos.
        </p>
        </div>
        <Carrousel1 />
        <div className="proposito-container">
        <p className="proposito-text">
          Nuestro objetivo es ayudarte a encontrar el par perfecto que se ajuste a tu estilo, tus necesidades y tu vida. Y más allá de vender zapatillas, ofrecemos una experiencia de compra personalizada.
          Nuestro equipo está siempre dispuesto a guiarte y asegurarse de que cada compra sea memorable y significativa.
        </p>
        <p className="proposito-text">
          En Zapart, no solo te ofrecemos zapatos; te invitamos a explorar un mundo de posibilidades, donde el calzado es una expresión de lo que eres.
          ¡Déjate llevar por nuestra pasión por las zapatillas y encuentra el par que haga match con tu vida!
        </p>
      </div>
    </div>
  );
};

export default Proposito;
