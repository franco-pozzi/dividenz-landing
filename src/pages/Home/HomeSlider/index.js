import Card from "./Card";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import ImgSliderOne from '../../../images/home-slider-one.jpg'
import ImgSliderTwo from '../../../images/home-slider-two.jpg'

import { HomeCarouselSection, BtnWrapper, HomeSliderBtn } from './HomeSliderElements'

const CardArray = [
    {
        headline: "Invertí en Real Estate en Estados Unidos",
        img: ImgSliderOne,
        textOne: <p><strong>Activos de calidad institucional.</strong></p>,
        textTwo: <p>Rentabilidades netas del <strong>10% al 15% en dólares.</strong></p>
    },
    {
        headline: "Protegé tu capital, protegé tu futuro",
        img: ImgSliderTwo,
        textOne: <p><strong>La mejor relación riesgo/beneficio.</strong></p>,
        textTwo: <p>Edificios 100% terminados y alquilados, en mercados seleccionados.</p>
    },
];

export const HomeSlider = () => {

    return (
        <HomeCarouselSection>
            <Carousel
                autoPlay={true}
                swipeable={false}
                interval={5000}
                transitionTime={1500}
                infiniteLoop={true}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                animationHandler={'fade'}
            >
                {CardArray.map((carousel, i) => (
                    <Card {...carousel} key={i} />
                ))}
            </Carousel>
            <BtnWrapper>
                <HomeSliderBtn href="https://api.whatsapp.com/send?phone=5491168463392&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.">Contactanos</HomeSliderBtn>
            </BtnWrapper>
        </HomeCarouselSection>
    )
}
