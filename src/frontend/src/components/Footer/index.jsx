import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__main}>
        <div className={styles.footer__container}>
          <div className={styles.footer__location}>
            <h4 className={styles.footer__title}>Localização</h4>
            <address className={styles.footer__address}>
              <img src="..\public\location-dot-icon.svg" alt="Location" className={styles.footer__icon}/>
              Av. Prof. Almeida Prado, 520 - <br /> Butantã, São Paulo - SP, 05508-070
            </address>
          </div>
          <div className={styles.footer__contacts}>
            <h4 className={styles.footer__title}>Contatos</h4>
            <ul className={styles["footer__list-links"]}>
              <li className={styles["footer__list-links__item"]}>
                <img src="..\public\instagram-icon.svg" alt="Instagram" className={styles.footer__icon}/> 
                <a className={styles["footer__list-links__item__link"]} href="https://www.instagram.com/atleticatantera/">@atleticatantera</a>
              </li>
              <li className={styles["footer__list-links__item"]}>
                <img src="..\public\linkedin-icon.svg" alt="LinkedIn" className={styles.footer__icon}/> 
                <a className={styles["footer__list-links__item__link"]} href="https://www.linkedin.com/company/tantera/mycompany/verification/">Atlética Tantera</a>
              </li>
              <li className={styles["footer__list-links__item"]}>
                <img src="..\public\tiktok-icon.svg" alt="TikTok" className={styles.footer__icon}/> 
                <a className={styles["footer__list-links__item__link"]} href="https://www.tiktok.com/@atleticainteli?_t=8czza1hojbl&_r=1">@atleticataneli</a>
              </li>
              <li className={styles["footer__list-links__item"]}>
                <img src="..\public\envelope-regular-icon.svg" alt="Email" className={styles.footer__icon}/> 
                <a className={styles["footer__list-links__item__link"]} href="mailto:atleticanteli@inteli.edu.br">atleticanteli@inteli.edu.br</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__pages}>
            <h4 className={styles.footer__title}>Páginas</h4>
            <ul className={styles["footer__list-pages"]}>
              <li className={styles["footer__list-pages__item"]}>Sobre</li>
              <li className={styles["footer__list-pages__item"]}>Eventos</li>
              <li className={styles["footer__list-pages__item"]}>Produtos</li>
              <li className={styles["footer__list-pages__item"]}>Gestão</li>
              <li className={styles["footer__list-pages__item"]}>Parceiros</li>
            </ul>
          </div>
          <div className={styles.footer__images}>
            <img src="..\public\logo_header.svg" alt="Logo" className={styles.footer__logo}/>
            <img src="..\public\spider-back.png" alt="Spider Background" className={styles.footer__logoBackground} />
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        © 2024 Atlética Tantera. Todos os direitos reservados. | Termos de Uso | Política de Privacidade
      </div>
    </footer>
  );
}
