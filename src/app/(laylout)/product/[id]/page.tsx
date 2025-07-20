import ProductDetails from '@/components/products-detail/ProductDetails';
import React from 'react';

const ProductDetail = async (props: { params: Promise<{ id: string }>; }) => {
  const params = await props.params;
  const id = params.id
  const data = await fetch(`https://dummyjson.com/products/${id}`, { cache: "force-cache" });
  const product = await data.json();

  return (
    <div>
      <ProductDetails data={product} />
    </div>
  );
};

export default ProductDetail;
