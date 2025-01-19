import React, { useEffect, useState } from 'react';
import './Card.css';
import carrito from '../../images/cart.svg';
import { db } from '../../config/firebase';
import { ref, get } from "firebase/database";

// Suponiendo que `data` es tu lista de productos importada
const Card = ({ start = 0, end}) => {
    const [cards, setCards] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todo');
    

    // Cargar tarjetas desde Firebase Realtime Database
    useEffect(() => {
        const obtenerTarjetas = async () => {
            try {
                // Realiza la consulta a la base de datos en tiempo real
                const snapshot = await get(ref(db, 'cards'));  // Usamos `get()` con la referencia de 'cards'
                if (snapshot.exists()) {
                    const tarjetasData = snapshot.val(); // Obtiene los datos

                    // Convierte los datos en un array y actualiza el estado
                    const tarjetasArray = Object.keys(tarjetasData).map(key => ({
                        id: key, 
                        ...tarjetasData[key]
                    }));

                    // Actualiza el estado con los datos obtenidos
                    setCards(tarjetasArray);
                } else {
                    console.log("No hay datos disponibles");
                }
            } catch (error) {
                console.error("Error al obtener tarjetas desde Firebase Realtime Database:", error);
            }
        };

        obtenerTarjetas();
    }, []); // El arreglo vacío asegura que solo se ejecute una vez al cargar el componente

    // Filtrar tarjetas por categoría
    const filtrarTarjetas = () => {
        if (categoriaSeleccionada === 'Todo') {
            return cards.slice(start, end);
        }
        return cards.filter(card => card.category === categoriaSeleccionada).slice(start, end);
    };

    // Obtener categorías únicas
    const categorias = cards.length > 0 ? ['Todo', ...new Set(cards.map(card => card.category))] : [];


    return (
        <div>
            
            <div id="botones-categorias" className='botones' >
                {categorias.map((categoria, index) => (
                    <button
                        key={index}
                        onClick={() => setCategoriaSeleccionada(categoria)}
                        className={`categoria-boton ${categoria === categoriaSeleccionada ? 'activo' : ''}`}
                    >
                        {categoria}
                    </button>
                ))}
            </div>
            <div className='cards'>
                <ol id='tarjeta' >
                    {filtrarTarjetas().map((card, index) => (
                        <li key={index} className="product-item">
                            <div className="card">
                                <img src={card.image} className="card-img-top" alt={`${card.title} - ${card.category}`} />
                                <h5 id="titulo_tarjeta">{card.title}</h5>
                                <h6 className='categoria'>{card.category}</h6>
                                <div className="card-body">
                                    <h5 id="precio">${card.price}</h5>
                                    <button id="boton" className="boton" aria-label={`Agregar ${card.title} al carrito`}>
                                        <img style={{ borderRadius: '0%' }} src={carrito} alt="Agregar al carrito" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Card;

