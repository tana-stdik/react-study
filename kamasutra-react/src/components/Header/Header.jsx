import React from 'react';
import c from './Header.module.css';

const Header = () => {
  return (
    <header className={c.grid__header}>
      <img src='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png'/>
    </header>
  );
}

export default Header;