import React from 'react';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';

function ProductPage() {
  return (
    <div className="mb-6">
      <Logo />
      <NavBar />
      <h1 className="text-5xl mt-5 text-center">Products</h1>
      <div className="flex justify-center">
        <label htmlFor="searchBar">
          <input
            className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md mt-4"
            style={{ width: '600px' }}
            type="text"
            name="searchbar"
            placeholder="Search by Name"
          />
        </label>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
