import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__section}>
        <div className={styles.footer__section__location}>
          <h4 className={styles.footer__section__title}>Localização</h4>
          <address className={styles.footer__section__address}>
            <img src="\location-dot-icon.svg" alt="Location" className={styles["footer__section__list-links__item__icon"]}/>
            Av. Prof. Almeida Prado, 520 - <br /> Butantã, São Paulo - SP, 05508-070
          </address>
        </div>
        <div className={styles.footer__section__contacts}>
          <h4 className={styles.footer__section__title}>Contatos</h4>
          <ul className={styles["footer__section__list-links"]}>
            <li className={styles["footer__section__list-links__item"]}>
              <img src="\instagram-icon.svg" alt="Instagram" className={styles["footer__section__list-links__item__icon"]}/> 
              <a className={styles["footer__section__list-links__item__link"]} href="https://www.instagram.com/atleticatantera/">@atleticatantera</a>
            </li>
            <li className={styles["footer__section__list-links__item"]}>
              <img src="\linkedin-icon.svg" alt="LinkedIn" className={styles["footer__section__list-links__item__icon"]}/> 
              <a className={styles["footer__section__list-links__item__link"]} href="https://www.linkedin.com/company/tantera/mycompany/verification/">Atlética Tantera</a>
            </li>
            <li className={styles["footer__section__list-links__item"]}>
              <img src="\tiktok-icon.svg" alt="TikTok" className={styles["footer__section__list-links__item__icon"]}/> 
              <a className={styles["footer__section__list-links__item__link"]} href="https://www.tiktok.com/@atleticainteli?_t=8czza1hojbl&_r=1">@atleticataneli</a>
            </li>
            <li className={styles["footer__section__list-links__item"]}>
              <img src="\envelope-regular-icon.svg" alt="Email" className={styles["footer__section__list-links__item__icon"]}/> 
              <a className={styles["footer__section__list-links__item__link"]} href="mailto:atleticanteli@inteli.edu.br">atleticanteli@inteli.edu.br</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__section__pages}>
          <h4 className={styles.footer__section__title}>Páginas</h4>
          <ul className={styles["footer__section__list-pages"]}>
            <li className={styles["footer__section__list-pages__item"]}>Sobre</li>
            <li className={styles["footer__section__list-pages__item"]}>Eventos</li>
            <li className={styles["footer__section__list-pages__item"]}>Produtos</li>
            <li className={styles["footer__section__list-pages__item"]}>Gestão</li>
            <li className={styles["footer__section__list-pages__item"]}>Parceiros</li>
          </ul>
        </div>
        <div className={styles.footer__section__images}>
          <img src="\logo_header.svg" alt="Logo" className={styles.footer__section__images__logo}/>
          <img src="\spider-back.png" alt="Spider Background" className={styles.footer__section__images__logoBackground} />
        </div>
      </section>

      <section className={styles.footer__section__bottom}>
        © 2024 Atlética Tantera. Todos os direitos reservados. | Termos de Uso | Política de Privacidade
      </section>
    </footer>
  );
}
