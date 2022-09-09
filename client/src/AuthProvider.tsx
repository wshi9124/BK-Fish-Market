/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, ReactNode } from 'react';
import { IUser, EmptyUserValue } from './types/IUser';
import { IProduct, EmptyProductValue } from './types/IProducts';
import { IShoppingCart, EmptyShoppingCartValue } from './types/IShoppingCart';

const AuthContext = createContext({
  user: EmptyUserValue,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  setUser: (user: IUser) => {},
  productItem: EmptyProductValue,
  cartTotalItems: 0,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  setCartTotalItems: (cartTotalItems: number) => {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  setProductItem: (productItem: IProduct) => {},
  shoppingCart: EmptyShoppingCartValue,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  setShoppingCart: (shoppingCart: IShoppingCart) => {},
});

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }:Props) {
  const [user, setUser] = useState<IUser>(EmptyUserValue);
  const [productItem, setProductItem] = useState<IProduct>(EmptyProductValue);
  const [cartTotalItems, setCartTotalItems] = useState<number>(0);
  const [shoppingCart, setShoppingCart] = useState<IShoppingCart>(EmptyShoppingCartValue);

  return (
    <AuthContext.Provider value={{
      user, setUser, productItem, setProductItem, cartTotalItems, setCartTotalItems, shoppingCart, setShoppingCart,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
