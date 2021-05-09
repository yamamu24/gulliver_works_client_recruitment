import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import styles from "./style.module.scss";

interface CarouselProps {
    children: any;
}

const Carousel: FC<CarouselProps> = ({ children }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '15%',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Slider {...sliderSettings} className={styles.sliderArea}>
            {children}
        </Slider>
    );
}

export default Carousel;