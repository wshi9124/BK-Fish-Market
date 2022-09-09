/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import ProductReview from './ProductReview';
import Footer from '../../CommonComponents/Footer';
import currencyFormat from '../../libs/Util';

function IndividualProductPage() {
  const navigate = useNavigate();
  const { productItem, setProductItem } = useContext(AuthContext);
  const [addToCartNumber, setAddToCartNumber] = useState<number>(1);

  useEffect(() => {
    if (productItem.name === '') {
      navigate('/products');
    }
  }, []);

  const handleMinusButton = () => {
    if (addToCartNumber > 1) {
      setAddToCartNumber(addToCartNumber - 1);
    }
  };

  const handlePlusButton = () => {
    if (addToCartNumber < 10) {
      setAddToCartNumber(addToCartNumber + 1);
    }
  };

  const handleBackButton = () => {
    setProductItem({});
    navigate('/products');
  };

  return (
    <div className="mb-6">
      <Logo />
      <NavBar />
      <div className="flex mt-10 px-20 mx-10">
        <div className=" flex flex-col items-center w-1/2">
          <img
            className="border"
            style={{ width: '640px', height: '580px' }}
            src={productItem.image_url ? productItem.image_url : './productCard.jpeg'}
            alt={productItem.name}
          />
          <p
            className="text-2xl px-5 mt-1"
            style={{ width: '640px' }}
          >
            {productItem.description}
          </p>
        </div>
        <div className="w-1/2 text-center mt-20">
          <p
            className="text-5xl"
          >
            {productItem.name}
            <strong>
              <mark className="text-red-500 bg-white">
                {productItem.active === false ? ' - Out Of Stock' : ''}
              </mark>
            </strong>
          </p>
          <p className="text-2xl mt-5">Average Stars Place holder</p>
          <p className="text-2xl mt-5">
            {' '}
            {productItem.category}
          </p>
          <p className="text-4xl mt-5">{currencyFormat(productItem.price!)}</p>
          <div className="flex justify-center mt-5">
            {productItem.active === true ? (
              <button
                type="button"
                className="text-4xl px-3 py-1 border rounded-full bg-zinc-100 hover:bg-zinc-200"
                onClick={handlePlusButton}
              >
                +
              </button>
            ) : ''}
            {productItem.active === true ? <p className="text-4xl px-3 py-1">{addToCartNumber}</p> : null}
            {productItem.active === true ? (
              <button
                type="button"
                className="text-4xl px-4 py-1 border rounded-full bg-zinc-100 hover:bg-zinc-200"
                onClick={handleMinusButton}
              >
                -
              </button>
            ) : ''}
            {productItem.active === true ? (
              <button
                type="button"
                className="bg-slate-900 text-white py-2 px-3 ml-3 rounded-md hover:bg-slate-800 text-xl"
              >
                Add to Cart

              </button>
            ) : ''}
          </div>
          <button
            type="button"
            onClick={handleBackButton}
            className="bg-slate-900 text-white mt-10 py-3 px-6 rounded-md hover:bg-slate-800 w-60 text-xl"
          >
            Back to all products

          </button>
        </div>
      </div>
      <ProductReview />
      <Footer />
    </div>
  );
}

export default IndividualProductPage;
