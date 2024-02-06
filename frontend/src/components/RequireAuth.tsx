import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { RootState } from '../store';
import { User, Roles } from '../apis/userApi';

interface RequireAuthProps {
  role?:
    | 'admin'
    | 'employee'
    | 'customer_enterprise'
    | 'customer_pro'
    | 'customer'
    | null;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ role = null }) => {
  const user: User | null = useAppSelector(
    (state: RootState) => state.auth.user
  );
  const userRoles: Roles | undefined = user?.role;
  const location = useLocation();
  console.log({ user });

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (role) {
    const isAuthorized = userRoles && userRoles[role];

    if (isAuthorized) {
      return <Outlet />;
    } else {
      return <Navigate to="/404" state={{ from: location }} replace />;
    }
  }
  return <Outlet />;
};

export default RequireAuth;
