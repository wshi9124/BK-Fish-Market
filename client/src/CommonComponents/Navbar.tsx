import React from 'react';

function NavBar() {
  return (
    <div className="flex text-white justify-center bg-black mx-auto text-lg">
      <ul className="flex">
        <li className="py-4 px-10 text-purple-700 border-b-4 border-purple-700 font-semibold">Home</li>
        <li className="py-4 px-10 font-semibold hover:text-purple-700 transition duration-300">About Us</li>
        <li className="py-4 px-10 font-semibold hover:text-purple-700 transition duration-300">Products</li>
        <li className="py-4 px-10 font-semibold hover:text-purple-700 transition duration-300">Cart</li>
        <li className="py-4 px-10 font-semibold hover:text-purple-700 transition duration-300">Purchase History</li>
        <li className="py-4 px-10 font-semibold hover:text-purple-700 transition duration-300">Log In</li>
      </ul>
    </div>

  );
}

export default NavBar;
