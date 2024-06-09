import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className='product'>
      <Breadcrumbs product={product} />
    </div>
  )
}

export default Product