import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthProvider';

function LogOutNavtab() {
  const navigate = useNavigate();
  const {
    setUser, user, setProductItem, setCartTotalItems, setShoppingCart,
  } = useContext(AuthContext);

  const handleLogout = () => {
    fetch('/logout', { method: 'DELETE' });
    setUser({});
    setProductItem({});
    setCartTotalItems(0);
    setShoppingCart([]);
    localStorage.clear();
    navigate('/login');
  };

  return (
    <button
      type="button"
      className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300"
      onClick={handleLogout}
    >
      Log out
      {' '}
      (
      {user.first_name}
      )
    </button>
  );
}

export default LogOutNavtab;
