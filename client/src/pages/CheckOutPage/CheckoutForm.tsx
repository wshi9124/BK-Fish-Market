import React from 'react';
import GoogleMapsCheckout from './GoogleMapsCheckout';

function CheckoutForm() {
  const handleCheckOut = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center mt-5">
      <form
        className="w-1/2 border rounded-lg px-10 py-5"
        onSubmit={handleCheckOut}
      >
        <GoogleMapsCheckout />
        <p className="text-lg font-semibold mb-2 mt-3 text-left">Payment Method</p>
      </form>
    </div>
  );
}

export default CheckoutForm;
