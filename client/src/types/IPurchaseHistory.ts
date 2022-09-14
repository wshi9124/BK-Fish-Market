export interface IPurchaseHistory {
  created_at: string
  id: number,
  location: string,
  shipping: number,
  tax: number
  user_id: number,
  payment_method: string,
  purchased_items: IPurchasedItem[]
}

export const EmptyPurchaseHistory = {
  id: -1,
  user_id: -1,
  location: '',
  tax: 0,
  shipping: 0,
  created_at: '',
  payment_method: '',
  purchased_items: [],
} as IPurchaseHistory;

export interface IPurchasedItem {
  id: number,
  product_id: number,
  purchase_id: number,
  purchased_price: number,
  quantity: number,
  product: IPurchaseProduct
}
export interface IPurchaseProduct {
  name: string,
  category: string,
  price: number,
  description: string,
  id: number,
  image_url: string | null,
  active: boolean
}

// export const EmptyPurchaseItem = {
//   id: -1,
//   product_id: -1,
//   purchase_id: -1,
//   purchased_price: 0,
//   quantity: 0,
//   product: [],
// } as IPurchasedItem;
