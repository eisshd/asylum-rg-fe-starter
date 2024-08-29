import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { colors } from '../../styles/data_vis_colors';

const { primary_accent_color } = colors;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      style={{ color: '#E2F0F7', backgroundColor: primary_accent_color, border: 'none'}}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;