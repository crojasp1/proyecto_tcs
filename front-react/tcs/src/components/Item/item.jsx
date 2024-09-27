import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

// Componente funcional Item
const Item = (props) => {
  return (
    // Contenedor principal del ítem
    <div className='item'>
      
      {/* Enlace a la página del producto con su imagen */}
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="Product image" />
      </Link>
      
      {/* Nombre del producto */}
      <p>{props.marca}</p>
      
      {/* Sección de precios del producto */}
      <div className="item-prices">
        
        {/* Precio nuevo del producto */}
        <div className="item-prices-new">
          ${props.modelo}
        </div>
        
        {/* Precio antiguo del producto */}
        <div className='item-price-old'>
          ${props.version}
        </div>
      </div>
    </div>
  )
}

export default Item;
