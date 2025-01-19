import React from 'react';
import desplazable1 from '../../images/desplazable1.png';
import desplazable2 from '../../images/desplazable2.png';
import desplazable3 from '../../images/desplazable3.png';

const Carrousel2 = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={desplazable1} className="d-block w-100" alt="Desplazable 1" />
                </div>
                <div className="carousel-item">
                    <img src={desplazable2} className="d-block w-100" alt="Desplazable 2" />
                </div>
                <div className="carousel-item">
                    <img src={desplazable3} className="d-block w-100" alt="Desplazable 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carrousel2;
