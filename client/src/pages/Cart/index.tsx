import React from 'react';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';

function Cart() {
  return (
    <div className="mb-6">
      <Logo />
      <NavBar />
      <h1 className="text-5xl mt-5 text-center">Cart</h1>
      <Footer />
    </div>
  );
}

export default Cart;
