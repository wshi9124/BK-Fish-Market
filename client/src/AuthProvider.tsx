/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, ReactNode } from 'react';
import { IUser } from './types/IUser';

const AuthContext = createContext({});

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }:Props) {
  const [user, setUser] = useState<IUser>({});

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
