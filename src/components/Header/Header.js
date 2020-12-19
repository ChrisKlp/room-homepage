import { useState } from 'react';
import logo from '../../assets/logo.svg';
import iconHamburger from '../../assets/icon-hamburger.svg';
import iconClose from '../../assets/icon-close.svg';
import style from './Header.module.scss';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(prev => !prev);

  const navLinks = ['home', 'shop', 'about', 'contact'];
  const navList = navLinks.map(item => (
    <li key={item}>
      <a href="#" onClick={toggleMenu} className={style.header__navItem}>
        {item}
      </a>
    </li>
  ));

  return (
    <>
      <header className={`${style.header} ${menuActive && style.active}`}>
        <div className={style.header__wrapper}>
          <button
            className={style.header__toggle}
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            <img
              src={!menuActive ? iconHamburger : iconClose}
              alt="Toggle button"
            />
          </button>
          <div className={style.header__logo}>
            <a href="/">
              <img src={logo} alt="Room logo" />
            </a>
          </div>
          <nav className={style.header__nav}>
            <ul className={style.header__navList}>{navList}</ul>
          </nav>
        </div>
      </header>
      {menuActive && <div className={style.bgOverlay}></div>}
    </>
  );
};

export default Header;
