import React from 'react';
import { BsPaypal, BsCreditCardFill } from 'react-icons/bs';
import { RiBankFill } from 'react-icons/ri';
import GoogleMapsCheckout from './GoogleMapsCheckout';

function CheckoutForm() {
  const handleCheckOut = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center mt-5">
      <form
        className="w-1/2 border rounded-lg px-10 py-5 mb-10"
        onSubmit={handleCheckOut}
      >
        <GoogleMapsCheckout />
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
            />
            <div className="flex peer-checked:text-red-400">
              <RiBankFill />
              Bank Transfer
            </div>
          </label>

        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
