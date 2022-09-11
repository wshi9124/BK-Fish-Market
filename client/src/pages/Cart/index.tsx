import React, { useContext } from 'react';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import FishCartCards from './FishCartCards';
import Footer from '../../CommonComponents/Footer';
import currencyFormat from '../../libs/Util';

function Cart() {
  const { shoppingCart, subtotal } = useContext(AuthContext);
  console.log(shoppingCart);

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
          <p className="w-1/5 text-5xl">Subtotal :</p>
          <p className="w-1/6">{currencyFormat(subtotal)}</p>
          <p className="w-1/6 text-red-500 text-lg" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
