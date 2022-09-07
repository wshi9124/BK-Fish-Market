import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';

function PurchaseHistory() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.account_type !== 'user') {
      navigate('/home');
    }
  }, []);

  return (
    <div className="mb-6">
      <Logo />
      <NavBar />
      <h1 className="text-5xl mt-5 text-center">Purchase History</h1>
      <Footer />
    </div>
  );
}

export default PurchaseHistory;
