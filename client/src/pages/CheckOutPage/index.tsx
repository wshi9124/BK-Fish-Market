import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import CheckoutForm from './CheckoutForm';
import Footer from '../../CommonComponents/Footer';

function CheckOutPage() {
  const { user, cartTotalItems } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.account_type !== 'user' && cartTotalItems > 0) {
      navigate('/products');
    }
  }, []);

  return (
    <div className="mb-6">
      <Logo />
      <NavBar />
      <h1 className="text-5xl mt-5 text-center">Checkout</h1>
      <CheckoutForm />
      <Footer />
    </div>
  );
}

export default CheckOutPage;
