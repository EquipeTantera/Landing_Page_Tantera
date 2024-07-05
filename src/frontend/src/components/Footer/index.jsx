import React from 'react';
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
            <ul>
              <li><img src="..\public\instagram-icon.svg" alt="Instagram" className={styles.footer__icon}/> @atleticatantera</li>
              <li><img src="..\public\linkedin-icon.svg" alt="LinkedIn" className={styles.footer__icon}/> Atlética Tantera</li>
              <li><img src="..\public\tiktok-icon.svg" alt="TikTok" className={styles.footer__icon}/> @atleticataneli</li>
              <li><img src="..\public\envelope-regular-icon.svg" alt="Email" className={styles.footer__icon}/> atleticanteli@inteli.edu.br</li>
            </ul>
          </div>
          <div className={styles.footer__pages}>
            <h4 className={styles.footer__title}>Páginas</h4>
            <ul>
              <li>Sobre</li>
              <li>Eventos</li>
              <li>Produtos</li>
              <li>Gestão</li>
              <li>Parceiros</li>
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
