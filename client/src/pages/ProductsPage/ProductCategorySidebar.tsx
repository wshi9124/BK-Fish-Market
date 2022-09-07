import React from 'react';
import { IProduct } from '../../types/IProducts';

interface Props {
  setProductData:React.Dispatch<React.SetStateAction<[IProduct]>>
}

function ProductCategorySidebar({ setProductData }:Props) {
  const handleAllProducts = () => {
    fetch('/products')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              const allProducts = data.filter((item:IProduct) => item.active === true);
              setProductData(allProducts);
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
              const allSteaks = data.filter((item:IProduct) => item.active === true && item.category === 'Steak or fillet');
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
              const allWholeFish = data.filter((item:IProduct) => item.active === true && item.category === 'Whole fish');
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
              const allShellfish = data.filter((item:IProduct) => item.active === true && item.category === 'Shellfish');
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
              const allOther = data.filter((item:IProduct) => item.active === true && item.category === 'Other');
              setProductData(allOther);
            });
        }
      });
  };
  return (
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

  );
}

export default ProductCategorySidebar;
