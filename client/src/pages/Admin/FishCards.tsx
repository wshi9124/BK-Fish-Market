import React from 'react';
import { IProduct } from '../../types/IProducts';

interface Props {
  productData:[IProduct]
  setProductData:React.Dispatch<React.SetStateAction<[IProduct]>>
}
function FishCard({ productData, setProductData }: Props) {
  const renderProducts = productData.map((product) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={product.id}>
      <img className="w-full h-50" src={product.image_url ? product.image_url : './Logo.jpeg'} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{product.name}</div>
        <div className="text-xl mb-2">{product.category}</div>
        {product.description}
        <p className="text-slate-900 text-md" />
      </div>
    </div>
  ));

  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex bg-gray-100 w-32 p-4">Categories</div>
        <div className="flex flex-1 flex-col">
          {renderProducts}
        </div>
      </div>
    </main>
  );
}

export default FishCard;
