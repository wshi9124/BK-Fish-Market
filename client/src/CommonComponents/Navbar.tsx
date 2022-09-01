import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="flex text-white justify-center bg-slate-900 mx-auto text-lg">
      <ul className="flex">
        <button type="button" onClick={() => navigate('/home')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Home</button>
        <button type="button" onClick={() => navigate('/about')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">About Us</button>
        <button type="button" onClick={() => navigate('/products')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Products</button>
        <button type="button" onClick={() => navigate('/cart')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Cart</button>
        <button type="button" onClick={() => navigate('/purchaseHistory')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Purchase History</button>
        <button type="button" onClick={() => navigate('/login')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Log In</button>
      </ul>
    </div>

  );
}

export default NavBar;
