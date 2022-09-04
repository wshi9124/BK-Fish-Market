import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthContext from './AuthProvider';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ProductPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import PurchaseHistory from './pages/PurchaseHistory';
import Login from './pages/Login';
import CreateAccountPage from './pages/Login/CreateAccountPage';
import Admin from './pages/Admin';
import AddFish from './pages/Admin/AddFish';

function App() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Auto Login
  useEffect(() => {
    fetch('/me')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              setUser(data);
              if (data.account_type === 'admin') {
                navigate('/admin');
              } else if (data.account_type === 'user') {
                navigate('/home');
              }
            });
        }
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/purchaseHistory" element={<PurchaseHistory />} />
      <Route path="/login" element={<Login />} />
      <Route path="createAccount" element={<CreateAccountPage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/addFish" element={<AddFish />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
