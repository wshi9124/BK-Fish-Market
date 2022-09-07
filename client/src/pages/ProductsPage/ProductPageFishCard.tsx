/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import { IProduct } from '../../types/IProducts';

import ProductCategorySidebar from './ProductCategorySidebar';
import currencyFormat from '../../libs/Util';

interface Props {
  productData:[IProduct]
  setProductData:React.Dispatch<React.SetStateAction<[IProduct]>>
  search:string
}
function ProductPageFishCard({ productData, setProductData, search }: Props) {
  const navigate = useNavigate();
  const { setProductItem } = useContext(AuthContext);
  const filteredProducts = productData.filter((item) => item.name!.toLowerCase().includes(search.toLowerCase())).reverse();

  const handleCardClick = (product: IProduct) => {
    setProductItem(product);
    navigate('/individualProduct');
  };

  const renderProducts = filteredProducts.map((product) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className="w-full overflow-auto rounded shadow-lg"
      key={product.id}
      style={{ height: '450px' }}
      role="button"
      onClick={() => handleCardClick(product)}
      tabIndex={0}
    >
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
  ));

  return (
    <div className="mt-10">
      <div className="flex">
        <ProductCategorySidebar setProductData={setProductData} />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 w-4/5 gap-5 mb-10 mr-10">
          {renderProducts}
        </div>
      </div>
    </div>
  );
}

export default ProductPageFishCard;
