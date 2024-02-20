import React, { useEffect, useState } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { RootState } from '../store';
import userApi, { User, Roles } from '../apis/userApi';
import { getToken } from '../apis/axiosWithAuth';
import { login } from '../features/users/authSlice';

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
  const dispatch = useAppDispatch();
  const authToken = getToken();
  const [, setLoading] = useState(true);

  useEffect(() => {
    const setUserData = async () => {
      try {
        const data = await userApi.getCurrentUser();
        if (data) {
          dispatch(login(data));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!user && authToken) {
      setUserData();
    } else {
      setLoading(false);
    }
  }, [authToken, user, dispatch]);

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
