export interface IReviews {
  content:string,
  id: number,
  product_id: number,
  star: number,
  created_at: string,
  user: IReviewProduct
}

export const EmptyReviewsValue = {
  content: '',
  id: -1,
  product_id: -1,
  star: 0,
  user: {},
} as IReviews;

export interface IReviewProduct {
  first_name: string,
  last_name: string,
  email:string,
  account_type: string,
  id: number,
}
