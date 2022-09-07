/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';
import currencyFormat from '../../libs/Util';

function IndividualProductPage() {
  const navigate = useNavigate();
  const { productItem } = useContext(AuthContext);

  useEffect(() => {
    if (productItem.id === -1) {
      navigate('/products');
    }
  }, []);

  return (
    <div className="mb-6">
      <Logo />
      <NavBar />
      <div className="flex mt-20 px-20 mx-10">
        <div className=" flex justify-center w-1/2">
          <img
            className="border w-full"
            style={{ width: '670px', height: '600px' }}
            src={productItem.image_url ? productItem.image_url : './productCard.jpeg'}
            alt={productItem.name}
          />
        </div>
        <div className="w-1/2 text-center">
          <p className="text-5xl">{productItem.name}</p>
          <p className="text-2xl">
            Category-
            {' '}
            {productItem.category}
          </p>
          <p className="text-2xl">Average Stars Place holder</p>
          <p className="text-2xl">{currencyFormat(productItem.price!)}</p>
          <p className="text-2xl">{productItem.description}</p>
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="bg-slate-900 text-white mt-6 py-3 px-6 rounded-md hover:bg-slate-800 w-1/4 text-xl"
          >
            Back

          </button>
        </div>
      </div>
      <p className="text-center text-5xl mt-10">Reviews</p>
      <Footer />
    </div>
  );
}

export default IndividualProductPage;
