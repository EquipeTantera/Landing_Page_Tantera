import styles from './styles.module.scss';
import PropType from 'prop-types';


export default function Header({ background }) {
  return ( 
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img className={styles.header__container__imagem} src="/logo_header.png"/>
      </div>
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
    </header>
  )
}

Header.propTypes = {
  background: PropType.string,
};