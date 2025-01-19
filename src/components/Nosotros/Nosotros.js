import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nosotros.css";
import zapatilla1 from '../../images/a1.jpg'
import zapatilla2 from '../../images/a2.jpg'
import zapatilla3 from '../../images/a3.jpg'
import zapatilla4 from '../../images/a4.jpg'
import bannernosotros from '../../images/bannernosotros.png'

const Nosotros = () => {
    return (
        <div className='nosotros'>
            <div className='banner'>
                <img src={bannernosotros} alt='imgbanner' className='imgbanner'></img>
            </div>

            <div className='rectanguloIzq'>
                <img className='imagenIzq' src={zapatilla3} alt='zapatilla'></img>
                <div className='texto'>
                    <h3 className='contenido'>Somos Zapart</h3>
                    <p className='contenido'>En Zapart, nuestra pasión por las zapatillas va más allá de un simple interés: es un verdadero compromiso con el estilo, la comodidad y la calidad. Desde el primer día, hemos dedicado nuestro tiempo a encontrar las mejores opciones para todos los amantes del calzado.</p>
                </div>

            </div>
            <div className='rectanguloDer'>
                <div className='texto'>
                    <p className='contenido'>Cada par de zapatillas tiene una historia propia, y estamos emocionados de ser parte de esa narrativa contigo. <br/>Sabemos que tus zapatillas no son solo un accesorio, sino una extensión de tu personalidad. Por eso, ofrecemos una variedad impresionante de estilos: desde los clásicos que nunca pasan de moda hasta las últimas tendencias innovadoras.
                    <br></br>
                    En nuestra colección, encontrarás desde modelos deportivos y casuales hasta opciones elegantes y exclusivas.<br/> Queremos ayudarte a encontrar el par perfecto que se ajuste a tu estilo y necesidades.    
                    </p>
                </div>
                <img className='imagenDer' src={zapatilla1} alt='zapatilla'></img>
            </div>
            <div className='rectanguloIzq'>
                <img className='imagenIzq' src={zapatilla4} alt='zapatilla'></img>
                <div className='texto'>
                    <h3 className='contenido'>Pasion por el calzado</h3>
                    <p className='contenido'>Además, en Zapart no solo vendemos zapatillas; te ofrecemos una experiencia de compra personalizada. Nuestro equipo está aquí para ayudarte a elegir el calzado ideal y asegurar que cada compra sea una experiencia inolvidable
                    </p>
                </div>

            </div>
            <div className='rectanguloDer'>
                <div className='texto'>
                    <p className='contenido'>
                    Nuestro objetivo es ayudarte a encontrar el par perfecto que se ajuste a tu estilo y necesidades.<br/> Desde modelos deportivos y casuales hasta opciones elegantes y exclusivas, <br/>nuestra variedad de temáticas y diseños está diseñada para satisfacer todos los gustos.
                    <br></br>
                    ¡Explora el mundo de las zapatillas con Zapart y déjate llevar por nuestra pasión por el calzado!
                    </p>
                </div>
                <img className='imagenDer' src={zapatilla2} alt='zapatilla'></img>
            </div>
        </div>
    )
}
    export default Nosotros;