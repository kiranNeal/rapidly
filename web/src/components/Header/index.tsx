import React from 'react';

import './header.scss';
import Logo from '../../assets/icons/rapidlyIcon.png';

const Header: React.FC = () => {
  return (
    <header className="header__container">
      <img className="header__icon" src={Logo} alt="rapidly" />
      <div className="header__title">RAPIDLY</div>
    </header>
  );
};

export default Header;
