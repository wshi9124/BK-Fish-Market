export interface IShoppingCart {
  name?: string | undefined,
  quantity?: number | undefined,
  id?: number | undefined,
}

export const EmptyShoppingCartValue = {
  name: '',
  quantity: 0,
  id: -1,
} as IShoppingCart;
