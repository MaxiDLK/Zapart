import React, { useEffect, useState } from 'react';
import './CheckOut.css';
import carritoprod from "../../images/carritoprod.png";

const Checkout = () => {
    // Inicializamos el carrito con los datos de localStorage
    const [carritoItems, setCarritoItems] = useState(() => {
        const storedCarrito = localStorage.getItem('carrito'); // Misma clave que en `Card`
        return storedCarrito ? JSON.parse(storedCarrito) : [];
    });

    // Cada vez que el carrito cambia, lo guardamos en localStorage
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carritoItems));
    }, [carritoItems]);

    // Función para calcular el total
    const calcularTotal = () => {
        return carritoItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className="checkout">
            {carritoItems.length === 0 ? (
              <img src={carritoprod} className='carritoprod' alt="Carrito sin Productos" />
            ) : (
                <div>
                    <ul>
                        {carritoItems.map((item, index) => (
                            <li key={index}>
                                <div id="card">
                                    <img src={item.image} alt={item.title} style={{ width: '200px', marginRight: '20px' }} />
                                    <span>{item.title} - ${item.price}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${calcularTotal()}</h3>
                    <button className="finalizar-compra">Finalizar Compra</button>
                </div>
            )}
        </div>
    );
};

export default Checkout;
