import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ProductPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import PurchaseHistory from './pages/PurchaseHistory';
import Login from './pages/Login';
import CreateAccount from './pages/Login/CreateAccount';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/purchaseHistory" element={<PurchaseHistory />} />
      <Route path="/login" element={<Login />} />
      <Route path="createAccount" element={<CreateAccount />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>

  );
}

export default App;
