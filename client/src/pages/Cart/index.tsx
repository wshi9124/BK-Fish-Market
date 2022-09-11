import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import FishCartCards from './FishCartCards';
import Footer from '../../CommonComponents/Footer';
import currencyFormat from '../../libs/Util';

function Cart() {
  const navigate = useNavigate();
  const { user, subtotal, cartTotalItems } = useContext(AuthContext);

  // eslint-disable-next-line consistent-return
  const renderCheckOut = () => {
    if (cartTotalItems === 0) {
      return <p className="w-1/6 text-center text-3xl">No Items in Cart</p>;
    }
    if (user.first_name === '') {
      return (
        <div className="w-1/6 text-center text-3xl" style={{ marginTop: '-10px' }}>
          <p className="text-lg">Log in to checkout</p>
          <button
            className="bg-slate-900 text-white mt-1 py-2 px-10 rounded-md hover:bg-slate-800 text-xl"
            onClick={() => { navigate('/login'); }}
            type="button"
          >
            Log In
          </button>
        </div>
      );
    }
    return (
      <button
        type="button"
        className="w-1/6 text-center bg-slate-900 text-white mt-1 py-2 px-10 rounded-md hover:bg-slate-800 text-xl"
      >
        CheckOut

      </button>
    );
  };

  return (
    <div className="mb-20">
      <Logo />
      <NavBar />
      <div>
        <h1 className="text-5xl mt-5 text-center">Cart</h1>
        <FishCartCards />
      </div>
      <div className="flex items-center py-3 mx-10 mt-2">
        <div className="flex w-1/6" />
        <div className="flex w-5/6 text-4xl justify-center items-center">
          <p className="w-1/5" />
          <p className="w-1/6" />
          <p className="w-1/5">Subtotal :</p>
          <p className="w-1/6">{currencyFormat(subtotal)}</p>
          {renderCheckOut()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
