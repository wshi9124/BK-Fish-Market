/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import AuthContext from '../../AuthProvider';
import currencyFormat from '../../libs/Util';
import { IShoppingCart } from '../../types/IShoppingCart';

function FishCartCards() {
  const { shoppingCart, setShoppingCart } = useContext(AuthContext);

  const handleCartPlusButton = (product:IShoppingCart) => {
    const updateCartQuantity = shoppingCart.map((cart) => {
      if (cart.id === product.id && cart.quantity) {
        cart.quantity += 1;
      }
      return cart;
    });
    setShoppingCart(updateCartQuantity);
  };

  const handleCartMinusButton = (product:IShoppingCart) => {
    const updateCartQuantity = shoppingCart.map((cart) => {
      if (cart.id === product.id && cart.quantity && cart.quantity > 1) {
        cart.quantity -= 1;
      }
      return cart;
    });
    setShoppingCart(updateCartQuantity);
  };

  const handleRemoveAllItems = () => {
    setShoppingCart([]);
  };

  const handleRemoveSingleItem = (product:IShoppingCart) => {
    const arrayWithoutItem = shoppingCart.filter((cart) => cart.id !== product.id);
    setShoppingCart(arrayWithoutItem);
  };

  const renderCart = shoppingCart.map((product) => (
    <div key={product.id} className="flex items-center border-b py-3 mx-10">
      <div className="flex w-1/6 justify-center">
        <img
          className="w-48 h-40 rounded-md"
          src={product.image_url ? product.image_url : '/productCard.jpeg'}
          alt={product.name}
        />
      </div>
      <div className="flex w-5/6 justify-center items-center">
        <p className="w-1/5 text-4xl">{product.name}</p>
        <p className="w-1/6 text-4xl">{product.price ? currencyFormat(product.price) : ''}</p>
        <div className="w-1/5 flex">
          <button
            type="button"
            className="text-4xl px-4 py-1 border rounded-full bg-zinc-100 hover:bg-zinc-200"
            onClick={() => handleCartMinusButton(product)}
          >
            -

          </button>
          <p className="text-4xl px-3 py-1 mx-3">{product.quantity}</p>
          <button
            type="button"
            className="text-4xl px-3 py-1 border rounded-full bg-zinc-100 hover:bg-zinc-200"
            onClick={() => handleCartPlusButton(product)}
          >
            +

          </button>
        </div>
        <p className="w-1/6 text-4xl">
          {product.price && product.quantity ? currencyFormat(product.price * product.quantity) : ''}

        </p>
        <button
          className="w-1/6 text-red-400 hover:text-red-500 text-lg"
          type="button"
          onClick={() => handleRemoveSingleItem(product)}
        >
          Remove Item From Cart
          {' '}

        </button>
      </div>
    </div>
  ));

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className="flex items-center border-b py-3 mx-10 mt-10">
        <div className="flex w-1/6" />
        <div className="flex w-5/6 text-4xl justify-center items-center">
          <p className="w-1/5">Product</p>
          <p className="w-1/6">Unit price</p>
          <p className="w-1/5">Quantity</p>
          <p className="w-1/6">Price</p>
          <button
            className="w-1/6 text-red-400 hover:text-red-500 text-lg"
            type="button"
            onClick={handleRemoveAllItems}
          >
            Remove All Items
            {' '}

          </button>
        </div>
      </div>
      { renderCart }
    </>
  );
}

export default FishCartCards;
