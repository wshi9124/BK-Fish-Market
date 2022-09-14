import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import PastPurchaseHistory from './PastPurchaseHistory';
import Footer from '../../CommonComponents/Footer';
import { IPurchaseHistory } from '../../types/IPurchaseHistory';

function PurchaseHistory() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [purchaseData, setPurchaseData] = useState<IPurchaseHistory[]>([]);

  useEffect(() => {
    if (user.account_type !== 'user') {
      navigate('/home');
    }
  }, []);

  useEffect(() => {
    fetch('/users/1')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              setPurchaseData(data.purchases);
            });
        }
      });
  }, []);

  return (
    <div>
      <Logo />
      <NavBar />
      <h1 className="text-5xl mt-5 text-center">Purchase History</h1>
      <PastPurchaseHistory purchaseData={purchaseData} />
      <Footer />
    </div>
  );
}

export default PurchaseHistory;
