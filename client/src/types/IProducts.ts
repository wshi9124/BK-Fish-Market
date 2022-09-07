export interface IProduct {
  name?: string | undefined,
  category?: string | undefined,
  price?: number | undefined,
  description?: string | undefined,
  id?: number | undefined,
  image_url?: string | undefined,
  active?: boolean | undefined
}

export const EmptyProductValue = {
  name: '',
  category: '',
  price: 0,
  description: '',
  id: -1,
  image_url: '',
  active: true,
} as IProduct;
