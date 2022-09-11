/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthContext from './AuthProvider';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ProductPage from './pages/ProductsPage';
import IndividualProductPage from './pages/IndividualProductPage';
import Cart from './pages/Cart';
import PurchaseHistory from './pages/PurchaseHistory';
import Login from './pages/Login';
import CreateAccountPage from './pages/Login/CreateAccountPage';
import Admin from './pages/Admin';
import EditProductPage from './pages/EditProductPage';
import AddFish from './pages/Admin/AddFish';
import AdminPrivateRoutes from './utils/AdminPrivateRoute';
import UserPrivateRoutes from './utils/UserPrivateroutes';

function App() {
  const {
    setUser, setCartTotalItems, shoppingCart, setSubtotal,
  } = useContext(AuthContext);
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

  // Find Cart Total Items
  useEffect(() => {
    const findCartTotalItems = shoppingCart.reduce((a, b) => a + b.quantity!, 0);
    setCartTotalItems(findCartTotalItems);
  }, [shoppingCart]);

  // Find Cart Subtotal
  useEffect(() => {
    const findCartSubTotal = shoppingCart.map((item) => {
      if (item.quantity && item.price) {
        return item.quantity * item.price;
      }
    }).reduce((a, b) => a! + b!, 0);
    setSubtotal(findCartSubTotal || 0);
  }, [shoppingCart]);

  // store shopping cart in local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/individualProduct" element={<IndividualProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="createAccount" element={<CreateAccountPage />} />
      <Route element={<UserPrivateRoutes />}>
        <Route path="/purchaseHistory" element={<PurchaseHistory />} />
      </Route>
      <Route element={<AdminPrivateRoutes />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/editProduct" element={<EditProductPage />} />
        <Route path="/addFish" element={<AddFish />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
