import React from 'react';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';

function Cart() {
  return (
    <div className="mb-6">
      <Logo />
      <NavBar />
      <p>This is Cart</p>
      <Footer />
    </div>
  );
}

export default Cart;
