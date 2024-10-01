import React, { useState } from 'react';
import styles from './styles.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${className} custom-prev-arrow`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                ...style,
                backgroundImage: `url(/arrow-left.png)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: isHovered ? '40px' : '35px',
                height: isHovered ? '40px' : '35px',
                left: '-34px',
                zIndex: 10,
                transition: 'width 0.3s ease, height 0.3s ease',
            }}
        />
    );
}

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${className} custom-next-arrow`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                ...style,
                backgroundImage: `url(/arrow-right.png)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: isHovered ? '40px' : '35px',
                height: isHovered ? '40px' : '35px',
                right: '-52px',
                zIndex: 10,
                transition: 'width 0.3s ease, height 0.3s ease',
            }}
        />
    );
}

export default function CarouselProfileCard({ directors }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        afterChange: (current) => setCurrentSlide(current),
    };

    return (
        <div className={styles.container}>
            <Slider {...settings} className={styles.container__slider}>
                {directors.map((director, index) => (
                    <div className={styles.container__slides} key={index}>
                        <div
                            className={styles.container__image}
                            style={{ backgroundImage: `url(${director.photo})` }}
                        />
                    </div>
                ))}
            </Slider>
            <div className={styles.container__content}>
                <div className={styles.container__content__director}>
                    <p className={styles.container__position}>Diretor(a):</p>
                    <span className={styles.container__name}>{directors[currentSlide].name}</span>
                </div>
            </div>
        </div>
    );
}
