import React, { useContext } from 'react';
import { CarContext } from '../carContext/carContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

// Componente funcional Product
const Product = () => {
  // Usamos el contexto ShopContext para acceder a todos los productos
  const { all_products } = useContext(CarContext);
  
  // Extraemos el ID del producto de la URL usando useParams
  const { productId } = useParams();
  
  // Encontramos el producto correspondiente al ID extraído de la URL
  const product = all_products.find((e) => e.id === Number(productId));

  return (
    <div>

      {/* Renderizamos el componente ProductDisplay, pasando el producto como prop */}
      <ProductDisplay product={product}/>
      

    </div>
  )
}

export default Product;
