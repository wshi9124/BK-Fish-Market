/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-stars';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import ProductReview from './ProductReview';
import Footer from '../../CommonComponents/Footer';
import currencyFormat from '../../libs/Util';
import { IShoppingCart } from '../../types/IShoppingCart';
import { EmptyReviewsValue, IReviews } from '../../types/IReviews';

function IndividualProductPage() {
  const navigate = useNavigate();
  const [productReviews, setProductReviews] = useState<IReviews[]>([EmptyReviewsValue]);
  const {
    productItem, setProductItem, shoppingCart, setShoppingCart,
  } = useContext(AuthContext);
  const [addToCartNumber, setAddToCartNumber] = useState<number>(1);
  const [averageReview, setAverageReview] = useState<number | string >('');

  useEffect(() => {
    if (productItem.name === '') {
      navigate('/products');
    }
  }, []);

  useEffect(() => {
    fetch(`/reviews/${productItem.id}`)
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              setProductReviews(data);
              const averageStar = data.length ? data.map(((review:IReviews) => review.star)).reduce((a:number, b:number) => a + b) / data.length : 'No Reviews';
              setAverageReview(averageStar);
            });
        }
      });
  }, []);

  const handleMinusButton = () => {
    if (addToCartNumber > 1) {
      setAddToCartNumber(addToCartNumber - 1);
    }
  };

  const handlePlusButton = () => {
    if (addToCartNumber < 10) {
      setAddToCartNumber(addToCartNumber + 1);
    }
  };

  const handleBackButton = () => {
    setProductItem({});
    navigate('/products');
  };

  const handleAddToCart = () => {
    const newShoppingCartItem: IShoppingCart = {
      id: productItem.id,
      name: productItem.name,
      category: productItem.category,
      price: productItem.price,
      image_url: productItem.image_url,
      quantity: addToCartNumber,
    };
    if (shoppingCart.find((cart) => cart.id === productItem.id)) {
      const updateProductQuantity = shoppingCart.map((cart) => {
        if (cart.id === productItem.id && cart.quantity) {
          // eslint-disable-next-line no-param-reassign
          cart.quantity += addToCartNumber;
          return cart;
        }
        return cart;
      });
      setShoppingCart(updateProductQuantity);
    } else {
      setShoppingCart([...shoppingCart, newShoppingCartItem]);
    }
    navigate('/cart');
  };

  return (
    <div className="mb-20">
      <Logo />
      <NavBar />
      <div className="flex mt-10 px-20 mx-10">
        <div className=" flex flex-col items-center w-1/2">
          <img
            className="border"
            style={{ width: '640px', height: '580px' }}
            src={productItem.image_url ? productItem.image_url : './productCard.jpeg'}
            alt={productItem.name}
          />
          <p
            className="text-2xl px-5 mt-1"
            style={{ width: '640px' }}
          >
            {productItem.description}
          </p>
        </div>
        <div className="w-1/2 text-center mt-20">
          <p
            className="text-5xl"
          >
            {productItem.name}
            <strong>
              <mark className="text-red-500 bg-white">
                {productItem.active === false ? ' - Out Of Stock' : ''}
              </mark>
            </strong>
          </p>
          <div className="flex justify-center items-center mt-4">
            <ReactStars
              count={5}
              value={averageReview || 0}
              size={20}
              color2="#ffd700"
              edit={false}
            />
            <p className="text-xl">
              -
              {' '}
              {averageReview}
            </p>
          </div>
          <p className="text-2xl mt-2">
            {' '}
            {productItem.category}
          </p>
          <p className="text-4xl mt-5">{currencyFormat(productItem.price!)}</p>
          <div className="flex justify-center mt-5">

            {productItem.active === true ? (
              <button
                type="button"
                className="text-4xl px-4 py-1 border rounded-full bg-zinc-100 hover:bg-zinc-200"
                onClick={handleMinusButton}
              >
                -
              </button>
            ) : ''}
            {productItem.active === true ? <p className="text-4xl px-3 py-1">{addToCartNumber}</p> : null}
            {productItem.active === true ? (
              <button
                type="button"
                className="text-4xl px-3 py-1 border rounded-full bg-zinc-100 hover:bg-zinc-200"
                onClick={handlePlusButton}
              >
                +
              </button>
            ) : ''}
            {productItem.active === true ? (
              <button
                type="button"
                className="bg-slate-900 text-white py-2 px-3 ml-8 rounded-md hover:bg-slate-800 text-xl"
                onClick={handleAddToCart}
              >
                Add to Cart

              </button>
            ) : ''}
          </div>
          <button
            type="button"
            onClick={handleBackButton}
            className="bg-slate-900 text-white mt-10 py-3 px-6 rounded-md hover:bg-slate-800 w-60 text-xl"
          >
            Back to all products
          </button>
        </div>
      </div>
      <ProductReview productReviews={productReviews} setProductReviews={setProductReviews} />
      <Footer />
    </div>
  );
}

export default IndividualProductPage;
