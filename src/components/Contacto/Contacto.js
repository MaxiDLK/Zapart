import React, { useState } from 'react';
import './Contacto.css'; // Asegúrate de crear el archivo CSS correspondiente

const Contacto = () => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar envío de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos, por ejemplo, usando una API o enviando un correo
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="contactanos-container">
      <h1 className="contactanos-title">¡Contáctanos!</h1>

      <div className="contactanos-content">
        {/* Formulario */}
        <div className="contactanos-form">
          <h2>Déjanos tu mensaje</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar</button>
          </form>
        </div>

   {/* Información de contacto */}
<div className="contactanos-info">
  <h2>O contáctanos directamente</h2>
  <div className="contactanos-links">
    <p><strong>Instagram:</strong> <a href="https://www.instagram.com/zapart.shoes/" target="_blank" rel="noopener noreferrer">@zapart.shoes</a></p>
    <p><strong>Teléfono:</strong> <a href="tel:+1234567890">+11 1234-5678</a></p>
    <p><strong>Email:</strong> <a href="mailto:contacto@tuempresa.com">zapart@gmail.com</a></p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Contacto;
