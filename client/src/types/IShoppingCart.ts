export interface IShoppingCart {
  name?: string | undefined,
  quantity?: number | undefined,
  id?: number | undefined,
  category?: string | undefined,
  price?: number | undefined,
  image_url?: string | undefined,
}

export const EmptyShoppingCartValue = {
  name: '',
  quantity: 0,
  id: -1,
  category: '',
  price: 0,
  image_url: '',
} as IShoppingCart;
