import React from 'react';
import { IProduct } from '../../types/IProducts';

interface Props {
  productData:[IProduct]
  setProductData:React.Dispatch<React.SetStateAction<[IProduct]>>
  search:string
}
function FishCard({ productData, setProductData, search }: Props) {
  // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
  const filteredProducts = productData.filter((item) => item.name!.toLowerCase().includes(search.toLowerCase()));

  const renderProducts = filteredProducts.map((product) => (
    <div className="w-full h-96 overflow-auto rounded shadow-lg" key={product.id}>
      <img className="w-full h-64 border-b " src={product.image_url ? product.image_url : './productCard.jpeg'} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{product.name}</div>
        <div className="text-xl mb-2 overflow-auto">{product.category}</div>
        <div>{product.description}</div>
      </div>
    </div>
  ));

  return (
    <div className="mt-10">
      <div className="flex">
        <div className="flex flex-col w-1/5 text-center text-3xl text-black mx-5">
          <p className="text-white bg-slate-900 rounded-t-lg py-4 font-bold">Categories</p>
          <button
            className="py-3 hover:text-red-400 border"
            type="button"
          >
            All Products

          </button>
          <button
            className="py-5 hover:text-red-400 border"
            type="button"
          >
            Steak or Fillet

          </button>
          <button
            className="py-5 hover:text-red-400 border"
            type="button"
          >
            Whole Fish

          </button>
          <button
            className="py-5  hover:text-red-400 border"
            type="button"
          >
            Shellfish

          </button>
          <button
            className="py-5 rounded-b-lg hover:text-red-400 border"
            type="button"
          >
            Other

          </button>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 w-4/5 gap-5 mb-10 mr-10">
          {renderProducts}
        </div>
      </div>
    </div>
  );
}

export default FishCard;
