import React, { useContext } from 'react';
import "./styles/shopCategory.css"
import { CarContext } from '../carContext/carContext';
import Item from '../components/Item/item';



const ShopCategory = (props) => {
  // Usa el hook useContext para acceder a los datos del contexto ShopContext.
  const { all_products } = useContext(CarContext);

  

  return (
    <div className='shop-category'>

      {/* Sección para mostrar el rango de productos visibles y la opción de ordenar */}
      <div className="shopCategory-indexSort">
        <p>
          {/* Muestra el rango de productos que se están mostrando y el total de productos */}
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Ordenar por <span></span>
        </div>
      </div>

      {/* Sección para mostrar los productos filtrados por la categoría */}
      <div className='shopcategory-products'>
        {all_products.map((item) => {
          // Filtra los productos que coinciden con la categoría pasada como prop
          if (props.marca === item.marca) {
            // Renderiza un componente Item para cada producto de la categoría seleccionada
            return <Item key={item.id} id={item.id} plate={item.plate} marca={item.marca} modelo={item.modelo} version={item.version}  description={item.description} image={item.image}/>
          } else {
            // Si el producto no coincide con la categoría, no se renderiza nada
            return null;
          }
        })}
      </div>

      {/* Botón para explorar más productos */}
      <div className="shopcategory-loadmore">
        Explore Más
      </div>
    </div>
  )
}

export default ShopCategory;