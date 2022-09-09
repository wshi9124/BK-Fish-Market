import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../AuthProvider';

function UserPrivateRoutes() {
  const { user } = useContext(AuthContext);
  const auth = user?.account_type === 'user';
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default UserPrivateRoutes;
