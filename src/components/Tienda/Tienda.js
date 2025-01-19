import React, { useEffect, useState } from 'react';
import './Tienda.css';
import carrito from '../../images/cart.svg';
import { db } from '../../config/firebase';
import { ref, get } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import Banner2 from '../Banner2/Banner2'

const Tienda = ({ start = 0, end }) => {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todo');
    const [carritoItems, setCarritoItems] = useState(() => {
        // Recuperar datos del carrito de localStorage al cargar el componente
        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });
    const [carritoVisible, setCarritoVisible] = useState(false);

    // Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carritoItems));
    }, [carritoItems]);

    // Cargar tarjetas desde Firebase Realtime Database
    useEffect(() => {
        const obtenerTarjetas = async () => {
            try {
                const snapshot = await get(ref(db, 'cards'));
                if (snapshot.exists()) {
                    const tarjetasData = snapshot.val();
                    const tarjetasArray = Object.keys(tarjetasData).map(key => ({
                        id: key,
                        ...tarjetasData[key]
                    }));
                    setCards(tarjetasArray);
                } else {
                    console.log("No hay datos disponibles");
                }
            } catch (error) {
                console.error("Error al obtener tarjetas desde Firebase Realtime Database:", error);
            }
        };

        obtenerTarjetas();
    }, []);

    const filtrarTarjetas = () => {
        if (categoriaSeleccionada === 'Todo') {
            return cards.slice(start, end);
        }
        return cards.filter(card => card.category === categoriaSeleccionada).slice(start, end);
    };

    const categorias = cards.length > 0 ? ['Todo', ...new Set(cards.map(card => card.category))] : [];

    const agregarAlCarrito = (item) => {
        setCarritoItems((prevCarrito) => [...prevCarrito, item]);
    };

    const eliminarDelCarrito = (id) => {
        setCarritoItems(carritoItems.filter(item => item.id !== id));
    };

    const continuarCompra = () => {
        navigate('/checkout', { state: { carritoItems } });
    };

    const toggleCarrito = () => {
        setCarritoVisible(!carritoVisible);
    };

    return (
        <div>
            <div id="botones-categorias" className='botones'>
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
            <Banner2/>

            <div className="carrito">
                <button id='boton' className="boton-carrito" onClick={toggleCarrito} aria-label="Ver carrito">
                    <img src={carrito} alt="Carrito" className='imgcart' />
                </button>
            </div>

            {carritoVisible && (
                <div className="carrito-contenido">
                    <h3>Carrito</h3>
                    <button onClick={continuarCompra} className="finalizar-compra">Comprar</button>
                    {carritoItems.length === 0 ? (
                        <p>No hay productos en el carrito.</p>
                    ) : (
                        <ul>
                            {carritoItems.map((item, index) => (
                                <li key={index}>
                                    <img src={item.image} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
                                    <span>{item.title}</span>
                                    <span> - ${item.price}</span>
                                    <button onClick={() => eliminarDelCarrito(item.id)} className="eliminar-boton">Eliminar</button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <button className="finalizar-compra" onClick={toggleCarrito}>Cerrar carrito</button>
                </div>
            )}

            <div className='cards'>
                <ol id='tarjeta'>
                    {filtrarTarjetas().map((card, index) => (
                        <li key={index} className="product-item">
                            <div className="card">
                                <img src={card.image} className="card-img-top" alt={`${card.title} - ${card.category}`} />
                                <h5 id="titulo_tarjeta">{card.title}</h5>
                                <h6 className='categoria'>{card.category}</h6>
                                <div className="card-body">
                                    <h5 id="precio">${card.price}</h5>
                                    <button
                                        id="boton"
                                        className="boton"
                                        aria-label={`Agregar ${card.title} al carrito`}
                                        onClick={() => agregarAlCarrito(card)}
                                    >
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

export default Tienda;

