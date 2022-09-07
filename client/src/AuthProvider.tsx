/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, ReactNode } from 'react';
import { IUser, EmptyUserValue } from './types/IUser';
import { IProduct, EmptyProductValue } from './types/IProducts';

const AuthContext = createContext({
  user: EmptyUserValue,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  setUser: (user: IUser) => {},
  productItem: EmptyProductValue,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  setProductItem: (productItem: IProduct) => {},
});

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }:Props) {
  const [user, setUser] = useState<IUser>(EmptyUserValue);
  const [productItem, setProductItem] = useState<IProduct>(EmptyProductValue);

  return (
    <AuthContext.Provider value={{
      user, setUser, productItem, setProductItem,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
