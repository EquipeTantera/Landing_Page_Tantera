import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import PropTypes from 'prop-types'; 
import styles from './styles.module.scss';
import HorizontalSubtitle from '../HorizontalSubtitle';
import Button from '../Buttons/Button';

export default function Gallery({ buttonPath, slides }) {
    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
                <HorizontalSubtitle
                    title="galeria"
                    colorImage="purple3"
                    titleSize="36px"
                />
            </div>
            <div className={styles.container__button}>
                <Button title="Veja mais" path={buttonPath} />
            </div>
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                spaceBetween={50}
                loop={true}
                slidesPerView={1}
                modules={[FreeMode, Navigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div className={`swiper-button-prev ${styles.customPrev}`}>
                    <img src="galleryArrowLeft.png" alt="seta esquerda" />
                </div>
                <div className={`swiper-button-next ${styles.customNext}`}>
                    <img src="galleryArrowRight.png" alt="seta direita" />
                </div>
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.container__image}>
                            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

Gallery.propTypes = {
    buttonPath: PropTypes.string.isRequired, 
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string.isRequired,
        })
    ).isRequired,
};
