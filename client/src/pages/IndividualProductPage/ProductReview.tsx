import React, { useState, useContext } from 'react';
import ReactStars from 'react-stars';
import { IReviews } from '../../types/IReviews';
import AuthContext from '../../AuthProvider';

interface Props {
  productReviews: IReviews[]
  setProductReviews: React.Dispatch<React.SetStateAction<IReviews[]>>
}
function ProductReview({ productReviews, setProductReviews }:Props) {
  const { user, productItem } = useContext(AuthContext);
  const [star, setStar] = useState<number>(0);
  const [content, setContent] = useState<string>('');
  const [reviewMessage, setReviewMessage] = useState<string>('');

  const handleWriteReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reviewForm = {
      star,
      content,
      user_id: user.id,
      product_id: productItem.id,
    };
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
      },
      body: JSON.stringify(reviewForm),
    })
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              setProductReviews([...productReviews, data]);
              setReviewMessage('Review has been sucessfully made');
            });
        } else {
          res.json()
            .then(() => {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              if (user.id! >= 0) {
                setReviewMessage('You have already made a review for this product or content is blank');
              } else {
                setReviewMessage('Please log in to review');
              }
            });
        }
      });
  };

  const renderProductReviews = productReviews.map((review) => (
    <div key={review.id} className="border text-2xl py-3 px-4">
      <div className="flex">
        <p className="mr-3">
          {review.user.first_name}
          {' '}
          {review.user.last_name}
        </p>
        <ReactStars
          count={5}
          value={review.star}
          size={20}
          color2="#ffd700"
          edit={false}
        />
      </div>
      <p>{new Date(review.created_at).toDateString()}</p>
      <p>{review.content}</p>
    </div>
  ));

  return (
    <div>
      <div>
        <p className="text-red-500 text-lg text-center mt-3">
          {reviewMessage || null}
        </p>
      </div>
      <div className="flex text-xl mt-10">
        <div className="flex flex-col w-2/5 items-end border-r pr-8 mt-7">
          <form onSubmit={handleWriteReview}>
            <div className="flex">
              <ReactStars
                count={5}
                value={star}
                onChange={setStar}
                size={20}
                color2="#ffd700"
              />
              <p>
                (
                {star}
                )
              </p>
            </div>
            <label htmlFor="review">
              <textarea
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                name="description"
                placeholder="Write a review"
                rows={2}
                cols={45}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </label>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-slate-900 text-white py-2 px-10 rounded-md hover:bg-slate-800 text-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex w-3/5 flex-col px-10">
          <p className=" text-5xl mb-2">Reviews</p>
          {renderProductReviews.reverse()}
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
