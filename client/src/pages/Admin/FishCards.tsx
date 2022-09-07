/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { IProduct } from '../../types/IProducts';
import AdminCategorySidebar from './AdminCategorySidebar';
import currencyFormat from '../../libs/Util';

interface Props {
  productData:[IProduct]
  setProductData:React.Dispatch<React.SetStateAction<[IProduct]>>
  search:string
}
function FishCard({ productData, setProductData, search }: Props) {
  const filteredProducts = productData.filter((item) => item.name!.toLowerCase().includes(search.toLowerCase())).reverse();

  const renderProducts = filteredProducts.map((product) => (
    <div className="w-full overflow-auto rounded shadow-lg" key={product.id} style={{ height: '450px' }}>
      <img
        className="w-full h-2/3 border-b "
        src={product.image_url ? product.image_url : './productCard.jpeg'}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{product.name}</div>
        <div className="text-xl mb-2">
          <strong>{currencyFormat(product.price!)}</strong>
          {' '}
          -
          {' '}
          {product.category}

        </div>
        <div>{product.description}</div>
      </div>
    </div>
  ));

  return (
    <div className="mt-10">
      <div className="flex">
        <AdminCategorySidebar setProductData={setProductData} />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 w-4/5 gap-6 mb-10 mr-10">
          {renderProducts}
        </div>
      </div>
    </div>
  );
}

export default FishCard;
