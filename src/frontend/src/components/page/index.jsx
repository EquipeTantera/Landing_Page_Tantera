import Footer from '../Footer';
import Header from '../Header';
import PropType from 'prop-types';
import { API_BASE_URL } from "../../services/config";
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export default function Page({ children, backgroundColorHeader, backgroundMenuHeader }) {
  const [bannerUrl, setBannerUrl] = useState("");

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/banners?populate=*`);
        const bannerData = response.data.data;

        if (bannerData.length > 0) {
          const latestBanner = bannerData[0];
          const largeImageUrl = latestBanner.attributes.image.data[0].attributes.formats.large.url;
          setBannerUrl(largeImageUrl);
        }
      } catch (error) {
        console.error("Erro ao buscar o banner:", error);
      }
    };

    fetchBanner();
  }, []);

  return (
    <>
      {bannerUrl && (
        <div className={styles.container}>
          <img className={styles.container__image} src={bannerUrl} alt="Banner" />
        </div>
      )}
      
      <Header 
        background={backgroundColorHeader} 
        backgroundMenu={backgroundMenuHeader} 
        className={bannerUrl ? styles.headerWithBanner : ''}
      />

      <main className={bannerUrl ? styles.mainContent : ''}>
        {children}
      </main>

      <Footer />
    </>
  );
}

Page.propTypes = {
  children: PropType.node.isRequired,
  backgroundColorHeader: PropType.string,
  backgroundMenuHeader: PropType.string,
};
