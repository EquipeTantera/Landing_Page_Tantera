import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ background, backgroundMenu }) {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Detectar rolagem da página
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  // Adiciona e remove o evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Alterna o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Retorna a imagem correta do menu com base no estado
  const getMenuImage = () => {
    if (menuOpen) {
      return "/close.svg";
    } else {
      switch (backgroundMenu) {
        case "purple":
          return "/menu-purple.svg";
        case "red":
          return "/menu-red.svg";
        default:
          return "/menu-red.svg";
      }
    }
  };

  return ReactDOM.createPortal(
    <header className={`${styles.header} ${scroll ? styles.scrolled : ''} ${menuOpen ? styles.menuActive : ''}`}>
      <div className={styles.header__container}>
        {/* Tornar a logo clicável e redirecionar para a página inicial */}
        <Link to="/" className={styles.header__container__link}>
          <img className={styles.header__container__imagem} src="/logo_header.svg" alt="Logo Atlética" />
        </Link>
      </div>

      {/* Checkbox e Label para controlar o menu */}
      <input type="checkbox" id="menuToggle" className={styles.header__menu} onChange={toggleMenu} checked={menuOpen} />
      <label htmlFor="menuToggle" className={styles.header__menu__label}>
        <img src={getMenuImage()} alt={menuOpen ? 'Close' : 'Menu'} className={menuOpen ? styles.header__menu__label__close : styles.header__menu__label__open} />
      </label>

      {/* Menu de navegação */}
      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__list}>
          {/* Mostrar "Início" somente quando não estiver na página principal */}
          {location.pathname !== "/" && (
            <li className={styles.header__nav__list__item}>
              <Link className={styles.header__nav__list__item__link} style={{ color: background }} to="/">Início</Link>
            </li>
          )}
          <li className={styles.header__nav__list__item}>
            <Link className={styles.header__nav__list__item__link} style={{ color: background }} to="/sobre-nos">Sobre</Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link className={styles.header__nav__list__item__link} style={{ color: background }} to="/eventos">Eventos</Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link className={styles.header__nav__list__item__link} style={{ color: background }} to="/produtos">Produtos</Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link className={styles.header__nav__list__item__link} style={{ color: background }} to="/gestao/2024">Gestão</Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link className={styles.header__nav__list__item__link} style={{ color: background }} to="/parceiros">Parceiros</Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link className={styles.header__nav__list__item__link} style={{ color: background }} to="/planos-de-socio">Planos de Sócio</Link>
          </li>
        </ul>
      </nav>
    </header>,
    document.getElementById('header')
  );
}

Header.propTypes = {
  background: PropTypes.string,
  backgroundMenu: PropTypes.string,
};
