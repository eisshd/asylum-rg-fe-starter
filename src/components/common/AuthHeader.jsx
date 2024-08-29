import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import LogoutButton from '../../components/common/LogoutButton';

const { primary_accent_color } = colors;

function AuthHeader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={95} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '30px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', paddingRight: '30px'  }}>
          Graphs
        </Link>
        <Link to="/profile" style={{ color: '#E2F0F7', paddingRight: '30px'  }}>
        Profile
        </Link>
        <LogoutButton/>
      </div>
    </div>
  );
}

export default AuthHeader ;