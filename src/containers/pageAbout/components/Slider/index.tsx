import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperType, Autoplay, Navigation} from "swiper";
import {Button} from "components";

import 'swiper/css';
import './styles.scss'; 

interface SliderProps {
    slides?: string[];
}

const SliderConfig = {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: true,
    spaceBetween: 31
}

export const Slider: React.FC<SliderProps> = ({slides}) => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className="swiper-container">
            <Swiper
                slidesPerView="auto"
                centeredSlides={SliderConfig.centeredSlides}
                loop={SliderConfig.loop}
                autoplay={SliderConfig.autoplay}
                navigation={SliderConfig.navigation}
                spaceBetween={SliderConfig.spaceBetween}
                modules={[Autoplay, Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="swiper-container-slider"
            >
                {slides?.map((slide, index) => (
                    <SwiperSlide key={index + slide}>
                        <img src={slide} alt={`Slide ${index}`}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-navigation">
                <Button className="swiper-navigation__button" aria-label="Button navigation prev"
                        onClick={() => swiperRef.current?.slidePrev()}> &lt; </Button>
                <Button className="swiper-navigation__button" aria-label="Button navigation next"
                        onClick={() => swiperRef.current?.slideNext()}> &gt; </Button>
            </div>
        </div>
    );
};
