import Card from "./Card";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import ImgSliderOne from '../../../images/home-slider-one.jpg'
import ImgSliderTwo from '../../../images/home-slider-two.jpg'

import { HomeCarouselSection } from './HomeSliderElements'

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
                autoPlay={false}
                interval={5000}
                infiniteLoop={true}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
            >
                {CardArray.map((carousel, i) => (
                    <Card {...carousel} key={i} />
                ))}
            </Carousel>
        </HomeCarouselSection>
    )
}
