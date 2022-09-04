/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, ReactNode } from 'react';
import { IUser, EmptyUserValue } from './types/IUser';

const AuthContext = createContext({
  user: EmptyUserValue,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  setUser: (user: IUser) => {},
});

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }:Props) {
  const [user, setUser] = useState<IUser>(EmptyUserValue);

  return (
    <AuthContext.Provider value={{
      user, setUser,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
