import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Header({ background }) {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return ReactDOM.createPortal(
    <header className={`${styles.header} ${scroll ? styles.scrolled : ''} ${menuOpen ? styles.menuActive : ''}`}>
      <div className={styles.header__container}>
        <img className={styles.header__container__imagem} src="/logo_header.png"/>
      </div>
      <input type="checkbox" id="menuToggle" className={styles.header__menu} onChange={toggleMenu}/>
      <label htmlFor="menuToggle" className={styles.header__menu__label}>
        <img src="/menu.svg" alt='Menu'/>
      </label>
      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__list}>
          <li className={styles.header__nav__list__item}>
            <a className={styles.header__nav__list__item__link} style={{ color: background }} href="/">Sobre</a>
          </li>
          <li className={styles.header__nav__list__item}>
            <a className={styles.header__nav__list__item__link} style={{ color: background }} href="/">Eventos</a>
          </li>
          <li className={styles.header__nav__list__item}>
            <a className={styles.header__nav__list__item__link} style={{ color: background }} href="/">Produtos</a>
          </li>
          <li className={styles.header__nav__list__item}>
            <a className={styles.header__nav__list__item__link} style={{ color: background }} href="/">Gestão</a>
          </li>
          <li className={styles.header__nav__list__item}>
            <a className={styles.header__nav__list__item__link} style={{ color: background }} href="/">Parceiros</a>
          </li>
        </ul>
      </nav>
    </header>, document.getElementById('header')
  );
}

Header.propTypes = {
  background: PropTypes.string,
};
