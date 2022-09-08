/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import { IProduct } from '../../types/IProducts';
import AdminCategorySidebar from './AdminCategorySidebar';
import currencyFormat from '../../libs/Util';

interface Props {
  productData:IProduct[]
  setProductData:React.Dispatch<React.SetStateAction<IProduct[]>>
  search:string
}
function FishCard({ productData, setProductData, search }: Props) {
  const navigate = useNavigate();
  const { setProductItem } = useContext(AuthContext);
  const filteredProducts = productData.filter((item) => item.name!.toLowerCase().includes(search.toLowerCase())).reverse();

  const handleEditPage = (product:IProduct) => {
    setProductItem(product);
    navigate('/editProduct');
  };

  const handleMakeInactive = (product:IProduct) => {
    fetch(`/products/${product.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        active: 'false',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => setProductData(productData.filter((item) => item.id !== data.id)));
        }
      });
  };

  const handleMakeActive = (product:IProduct) => {
    fetch(`/products/${product.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        active: 'true',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => setProductData(productData.filter((item) => item.id !== data.id)));
        }
      });
  };

  const renderProducts = filteredProducts.map((product) => (
    <div key={product.id} className="mb-3">
      <div className="w-full overflow-auto rounded shadow-lg" style={{ height: '450px' }}>
        <img
          className="w-full h-2/3 border-b "
          src={product.image_url ? product.image_url : './productCard.jpeg'}
          alt={product.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{product.name}</div>
          <div className="text-xl mb-2">
            <strong>{currencyFormat(product.price!)}</strong>
            {' '}
            -
            {' '}
            {product.category}

          </div>
          <div>{product.description}</div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-500 text-white py-3 px-3 rounded-md hover:bg-blue-600 w-2/5 text-md"
          onClick={() => handleEditPage(product)}
        >
          Edit Page

        </button>
        {product.active ? (
          <button
            type="button"
            className="bg-red-400 text-white py-3 px-3 rounded-md hover:bg-red-500 w-2/5 text-md"
            onClick={() => handleMakeInactive(product)}
          >
            Make Inactive
            {' '}
          </button>
        ) : (
          <button
            type="button"
            className="bg-green-600 text-white py-3 px-3 rounded-md hover:bg-green-700 w-2/5 text-md"
            onClick={() => handleMakeActive(product)}
          >
            Make Active
          </button>
        )}
      </div>
    </div>
  ));

  return (
    <div className="mt-10">
      <div className="flex">
        <AdminCategorySidebar setProductData={setProductData} />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 w-4/5 gap-6 mb-10 mr-10">
          {renderProducts}
        </div>
      </div>
    </div>
  );
}

export default FishCard;
