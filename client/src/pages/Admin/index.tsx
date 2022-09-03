import React from 'react';
import Logo from '../../CommonComponents/Logo';
import AdminNavBar from '../../CommonComponents/AdminNavBar';

function Admin() {
  return (
    <div>
      <Logo />
      <AdminNavBar />
      <h1 className="text-5xl mt-5 text-center">See All Products to Edit</h1>
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
    </div>
  );
}

export default Admin;
