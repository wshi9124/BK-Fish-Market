import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import currencyFormat from '../../libs/Util';
import { IPurchaseHistory } from '../../types/IPurchaseHistory';

interface Props {
  purchaseData: IPurchaseHistory[],
}

function PastPurchaseHistory({ purchaseData }:Props) {
  const { setProductItem } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleReviewButton = (item) => {
    setProductItem(item);
    navigate('/individualProduct');
  };
  const renderPurchaseData = purchaseData.map((purchase) => (
    <div key={purchase.id} className="flex py-4 px-5 text-2xl border h-64">
      <div className="w-2/5">
        <p>
          <strong>
            Shipping Address:
          </strong>
          {' '}
          {purchase.location}
        </p>
        <p>
          <strong>
            Order Date:
          </strong>
          {' '}
          {new Date(purchase.created_at).toDateString()}
        </p>
        <p>
          <strong>
            Payment Method:
          </strong>
          {' '}
          {purchase.payment_method}
        </p>
        <p>
          <strong>
            SubTotal:
          </strong>
          {' '}
          {currencyFormat(purchase.purchased_items.map((item) => item.quantity * item.purchased_price).reduce((a, b) => a + b, 0))}
        </p>
        <p>
          <strong>
            Tax:
          </strong>
          {' '}
          {currencyFormat(purchase.tax)}
        </p>
        <p>
          <strong>
            Shipping:
          </strong>
          {' '}
          {currencyFormat(purchase.shipping)}
        </p>
        <p>
          <strong>
            Total:
          </strong>
          {' '}
          {currencyFormat(purchase.purchased_items.map((item) => item.quantity * item.purchased_price).reduce((a, b) => a + b, 0) + purchase.tax + purchase.shipping)}
        </p>
      </div>
      <div className="w-3/5 px-5 border-l overflow-auto">
        <div className="flex font-bold">
          <p className="w-1/3">Items Purchased</p>
          <p className="w-1/4"> Purchase Price</p>
          <p className="w-1/4">Total</p>
          <p className="w-1/4">Review</p>
        </div>
        <div className="flex">
          <div className="w-1/3">
            {purchase.purchased_items.map((item) => (
              <p key={item.id}>
                {item.product.name}
                {' '}
                x
                {' '}
                {item.quantity}
              </p>
            ))}
          </div>
          <div className="w-1/4">
            {purchase.purchased_items.map((item) => <p key={item.id}>{currencyFormat(item.purchased_price)}</p>)}
          </div>
          <div className="w-1/4">
            {purchase.purchased_items.map((item) => <p key={item.id}>{currencyFormat(item.quantity * item.purchased_price)}</p>)}
          </div>
          <div className="w-1/4 flex flex-col">
            {purchase.purchased_items.map((item) => (
              <button
                key={item.id}
                className="w-1/2 border rounded-md hover:bg-slate-900 hover:text-white scale-90"
                type="button"
                onClick={() => handleReviewButton(item.product)}
              >
                Review
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mt-5 mb-16">
      {renderPurchaseData.reverse()}
    </div>
  );
}

export default PastPurchaseHistory;
