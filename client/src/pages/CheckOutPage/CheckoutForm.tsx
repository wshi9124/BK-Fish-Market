/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPaypal, BsCreditCardFill } from 'react-icons/bs';
import { RiBankFill } from 'react-icons/ri';
import AuthContext from '../../AuthProvider';
import GoogleMapsCheckout from './GoogleMapsCheckout';
import currencyFormat from '../../libs/Util';

function CheckoutForm() {
  const navigate = useNavigate();
  const {
    subtotal, cartTotalItems, shoppingCart, user, setShoppingCart,
  } = useContext(AuthContext);
  const [location, setLocation] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('Paypal');
  const [discountCode, setDiscountCode] = useState<string>('');
  const [discountMessage, setDiscountMessage] = useState<string>('');
  const tax = (subtotal * 0.08875);
  const [shippingCost, setShippingCost] = useState<number>(20);
  const [cartErrorMessages, setCartErrorMessages] = useState<[] | ''>([]);
  const total = subtotal + tax + shippingCost;

  const isRadioSelected = (value: string): boolean => paymentMethod === value;

  const handleCheckOut = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cartTotalData = {
      user_id: user.id,
      location,
      tax: tax.toFixed(2),
      shipping: shippingCost.toFixed(2),
      purchased_items: shoppingCart,
      payment_method: paymentMethod,
    };
    fetch('/purchases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
      },
      body: JSON.stringify(cartTotalData),
    })
      .then((res) => {
        if (res.ok) {
          res.json()
            .then(() => {
              setShoppingCart([]);
              navigate('/purchaseHistory');
            });
        } else {
          res.json()
            .then(({ errors }) => {
              setCartErrorMessages(errors);
            });
        }
      });
  };

  const handleVerifyDiscountCode = () => {
    if (discountCode === 'iloveseafood') {
      setShippingCost(0);
      setDiscountMessage('Free shipping applied');
    } else {
      setDiscountMessage('No discount found');
      setShippingCost(20);
    }
  };

  const renderCheckOutProducts = shoppingCart.map((item) => (
    <div className="flex text-xl" key={item.id}>
      <p>
        {item.quantity}
        {' '}
        {item.name}
        {' '}
      </p>
      <p>
        -
        {' '}
        {currencyFormat(item.price! * item.quantity!)}
      </p>
    </div>
  ));

  return (
    <div className="flex justify-center mt-5">
      <form
        className="w-3/5 border rounded-lg px-10 py-5 mb-10"
        onSubmit={handleCheckOut}
      >
        <p className="text-center text-red-500 text-lg">
          {cartErrorMessages ? cartErrorMessages.map((error) => (
            <span key={error}>
              {error}
              {' '}
            </span>
          )) : null}
        </p>
        <GoogleMapsCheckout location={location} setLocation={setLocation} />
        <p className="text-lg font-semibold mb-2 mt-3 text-left">Payment Method</p>

        <div className="flex">
          <label
            htmlFor="paypal"
            className="border py-5 px-5 text-3xl w-1/3 flex items-center justify-center cursor-pointer bg-slate-900 text-white"
          >
            <input
              type="radio"
              name="payment"
              id="paypal"
              className="peer hidden"
              value="Paypal"
              checked={isRadioSelected('Paypal')}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <div className="flex peer-checked:text-red-400">
              <BsPaypal />
              PayPal
            </div>
          </label>
          <label
            htmlFor="creditcard"
            className="border py-5 px-5 text-3xl w-1/3 flex items-center justify-center cursor-pointer  bg-slate-900 text-white"
          >
            <input
              type="radio"
              name="payment"
              id="creditcard"
              className="peer hidden"
              value="Credit card"
              checked={isRadioSelected('Credit card')}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <div className="flex peer-checked:text-red-400">
              <BsCreditCardFill />
              Credit Card
            </div>
          </label>
          <label
            htmlFor="bank"
            className="border py-5 px-5 text-3xl w-1/3 flex items-center justify-center cursor-pointer  bg-slate-900 text-white"
          >
            <input
              type="radio"
              name="payment"
              id="bank"
              className="peer hidden"
              value="Bank transfer"
              checked={isRadioSelected('Bank transfer')}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <div className="flex peer-checked:text-red-400">
              <RiBankFill />
              Bank Transfer
            </div>
          </label>
        </div>
        <div className="flex items-end">
          <div className="w-2/5">
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Discount Code? (see home page)</p>
            <label htmlFor="discount">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="text"
                name="discount"
                placeholder="Discount Code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
            </label>
          </div>
          <div className="flex">
            <button
              type="button"
              className="bg-slate-900 text-white py-3 px-5 rounded-md hover:bg-slate-800 text-xl ml-2"
              onClick={handleVerifyDiscountCode}
            >
              {' '}
              Verify code
            </button>
          </div>
          <p className="text-xl py-3 px-5 font-bold">{discountMessage}</p>
        </div>

        <div className="flex mt-7">
          <div className="flex-col w-3/5 items-start">
            <p className="text-2xl font-bold">
              Item List- Total Items
              {' '}
              {cartTotalItems}
            </p>
            <div className="h-32 overflow-auto">
              {renderCheckOutProducts}
            </div>
            <div>
              <button
                className="bg-slate-900 text-white py-2 px-12 rounded-md hover:bg-slate-800 text-2xl"
                type="button"
                onClick={() => navigate('/cart')}
              >
                Back to Cart
              </button>
            </div>
          </div>
          <div className="flex flex-col w-2/5 justify-start items-start">
            <p className="text-2xl font-bold">Price</p>
            <p className="text-xl">
              Subtotal:
              {' '}
              {currencyFormat(subtotal)}
            </p>
            <p className="text-xl">
              Tax (8.875%):
              {' '}
              {currencyFormat(tax)}
            </p>
            <p className="text-xl">
              Shipping:
              {' '}
              {currencyFormat(shippingCost)}
            </p>
            <p className="text-3xl font-bold">
              Total:
              {' '}
              {currencyFormat(total)}
            </p>
            <button type="submit" className="bg-slate-900 text-white py-2 px-12 rounded-md hover:bg-slate-800 text-2xl mt-2">Checkout</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
