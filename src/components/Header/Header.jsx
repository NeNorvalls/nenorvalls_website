import React, { useState } from 'react';
import s from './header.module.css';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={s.header}>
      <div><a className={s.logo}href="/">NeNorvalls</a></div>

      <div className={`${s.menuIcon} ${showNav ? s.close : ''}`} onClick={toggleNav}>
          <div className={s.hamburgerLine}></div>
          <div className={s.hamburgerLine}></div>
          <div className={s.hamburgerLine}></div>
      </div>

        <nav className={`${s.nav} ${showNav ? s.show : ''}`}>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
        </nav>
    </header>
  );
};

export default Header;