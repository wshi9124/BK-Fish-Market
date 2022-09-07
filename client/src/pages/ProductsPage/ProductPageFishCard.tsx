/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { IProduct } from '../../types/IProducts';
import currencyFormat from '../../libs/Util';

interface Props {
  productData:[IProduct]
  setProductData:React.Dispatch<React.SetStateAction<[IProduct]>>
  search:string
}
function ProductPageFishCard({ productData, setProductData, search }: Props) {
  const filteredProducts = productData.filter((item) => item.name!.toLowerCase().includes(search.toLowerCase())).reverse();

  const renderProducts = filteredProducts.map((product) => (
    <div className="w-full overflow-auto rounded shadow-lg" key={product.id} style={{ height: '450px' }}>
      <img
        className="w-full h-72 border-b "
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

  const handleAllProducts = () => {
    fetch('/products')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              setProductData(data);
            });
        }
      });
  };

  const handleSteakOrFillet = () => {
    fetch('/products')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              const allSteaks = data.filter((item:IProduct) => item.category === 'Steak or fillet');
              setProductData(allSteaks);
            });
        }
      });
  };

  const handleWholeFish = () => {
    fetch('/products')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              const allWholeFish = data.filter((item:IProduct) => item.category === 'Whole fish');
              setProductData(allWholeFish);
            });
        }
      });
  };

  const handleShellfish = () => {
    fetch('/products')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              const allShellfish = data.filter((item:IProduct) => item.category === 'Shellfish');
              setProductData(allShellfish);
            });
        }
      });
  };

  const handleOther = () => {
    fetch('/products')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              const allOther = data.filter((item:IProduct) => item.category === 'Other');
              setProductData(allOther);
            });
        }
      });
  };

  return (
    <div className="mt-10">
      <div className="flex">
        <div className="flex flex-col w-1/5 text-center text-3xl text-black mx-5">
          <p className="text-white bg-slate-900 rounded-t-lg py-4 font-bold">Categories</p>
          <button
            className="py-3 hover:text-red-400 border"
            type="button"
            onClick={handleAllProducts}
          >
            All Products

          </button>
          <button
            className="py-5 hover:text-red-400 border"
            type="button"
            onClick={handleSteakOrFillet}
          >
            Steak or Fillet

          </button>
          <button
            className="py-5 hover:text-red-400 border"
            type="button"
            onClick={handleWholeFish}
          >
            Whole Fish

          </button>
          <button
            className="py-5  hover:text-red-400 border"
            type="button"
            onClick={handleShellfish}
          >
            Shellfish

          </button>
          <button
            className="py-5 rounded-b-lg hover:text-red-400 border"
            type="button"
            onClick={handleOther}
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

export default ProductPageFishCard;
