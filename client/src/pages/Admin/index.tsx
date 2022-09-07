import React, { useEffect, useState } from 'react';
import Logo from '../../CommonComponents/Logo';
import AdminNavBar from '../../CommonComponents/AdminNavBar';
import FishCard from './FishCards';
import Footer from '../../CommonComponents/Footer';
import { EmptyProductValue, IProduct } from '../../types/IProducts';

function Admin() {
  const [productData, setProductData] = useState<[IProduct]>([EmptyProductValue]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetch('/products')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              setProductData(data);
            });
        }
      });
  }, []);

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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <FishCard productData={productData} setProductData={setProductData} search={search} />
      <Footer />
    </div>
  );
}

export default Admin;
