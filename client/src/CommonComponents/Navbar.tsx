import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthProvider';
import LogOutNavtab from './LogOutNavTab';

function NavBar() {
  const navigate = useNavigate();
  const { user, cartTotalItems } = useContext(AuthContext);

  return (
    <div className="flex text-white justify-center bg-slate-900 mx-auto text-lg">
      <ul className="flex">
        <button type="button" onClick={() => navigate('/home')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Home</button>
        <button type="button" onClick={() => navigate('/about')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">About Us</button>
        <button type="button" onClick={() => navigate('/products')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Products</button>
        <button
          type="button"
          onClick={() => navigate('/cart')}
          className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300"
        >
          Cart
          {cartTotalItems > 0 ? (
            <mark
              className="bg-red-400 rounded-full text-sm ml-1 pr-1 relative -top-2"
            >
              {' '}
              {cartTotalItems}
            </mark>
          ) : ''}
        </button>
        {user.account_type === 'user' ? <button type="button" onClick={() => navigate('/purchaseHistory')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Purchase History</button> : <div />}
        {user.account_type === 'user' ? <LogOutNavtab />
          : <button type="button" onClick={() => navigate('/login')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Log In</button>}
      </ul>
    </div>

  );
}

export default NavBar;
