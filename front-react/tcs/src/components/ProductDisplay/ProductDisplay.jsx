import React from "react";
import "./productdisplay.css";


// Componente funcional ProductDisplay
const ProductDisplay = (props) => {
  const { product } = props; // Extraer el producto de las props

  return (
    // Contenedor principal de la visualización del producto
    <div className="productdisplay">
      {/* Sección izquierda para las imágenes del producto */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {/* Lista de imágenes en miniatura */}
          <img src={product.image} alt="Product image" />
          <img src={product.image} alt="Product image" />
          <img src={product.image} alt="Product image" />
          <img src={product.image} alt="Product image" />
        </div>
        <div className="productdisplay-img">
          {/* Imagen principal del producto */}
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      {/* Sección derecha para detalles del producto */}
      <div className="productdisplay-right">
        <h1>{product.marca}</h1>
        <div className="productdisplay-right-star">
          {/* Estrellas de calificación del producto */}
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-regular fa-star"></i>
          </span>
          <p>122</p>
        </div>
        <div className="productdisplay-right-prices">
          {/* Precios viejo y nuevo del producto */}
          <div className="productdisplay-right-price-old">
            ${product.modelo}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.version}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {/* Descripción del producto */}
          ${product.description}
        </div>
    
        
        {/* Botón para añadir al carrito, llamando a la función addToCart con el ID del producto */}
        <button
          className="addToCart-button"
        >
          COMPRAR ENTRADA
        </button>
        <p className="productdisplay-right-category">
          <span>Category: </span> Autos
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
