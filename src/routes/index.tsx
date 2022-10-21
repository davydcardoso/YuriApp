import React from 'react';

import {useAuth} from '../Contexts/AuthContexts';

import {Loading} from '../screens/Loading';

import {AuthRoutes} from './AuthRoutes';
import {PublicRoutes} from './PublicRoutes';

export const Routes: React.FC = () => {
  const {user, loading} = useAuth();

  if (loading) {
    return <Loading />;
  }

  return !user ? <PublicRoutes /> : <AuthRoutes />;
};
