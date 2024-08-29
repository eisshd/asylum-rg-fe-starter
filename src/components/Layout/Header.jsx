import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import DefaultHeader from '../../components/common/DefaultHeader';
import AuthHeader from '../../components/common/AuthHeader';

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
 
  return isAuthenticated ? <AuthHeader /> : <DefaultHeader />;
};

function HeaderContent() {
  return (
       <AuthNav/>
  );
}

export { HeaderContent };
