import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';

function CheckOutPage() {
  const { user, cartTotalItems } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.account_type !== 'user' && cartTotalItems > 0) {
      navigate('/products');
    }
  }, []);

  return (
    <div>
      <Logo />
      <NavBar />
      <h1 className="text-5xl mt-5 text-center">Checkout</h1>
    </div>
  );
}

export default CheckOutPage;
