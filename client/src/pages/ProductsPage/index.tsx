import React, { useEffect, useState } from 'react';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import ProductPageFishCard from './ProductPageFishCard';
import Footer from '../../CommonComponents/Footer';
import { EmptyProductValue, IProduct } from '../../types/IProducts';

function ProductPage() {
  const [productData, setProductData] = useState<[IProduct]>([EmptyProductValue]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetch('/products')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              const allProducts = data.filter((item:IProduct) => item.active === true);
              setProductData(allProducts);
            });
        }
      });
  }, []);

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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <ProductPageFishCard productData={productData} setProductData={setProductData} search={search} />
      <Footer />
    </div>
  );
}

export default ProductPage;
