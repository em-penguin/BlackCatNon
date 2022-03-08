import React from "react";
import Slider from "react-slick";

export default function SliderTop() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        accessibility: true,
        infinite: true,
    };
    const sliderTopImg = {
        width: "100%",
    }
    return (
        <Slider { ...settings }>
            <img src={ "./static/img/slide/topSlider00.jpg" } style={ sliderTopImg }></img>
            <img src={ "./static/img/slide/topSlider01.jpg" } style={ sliderTopImg }></img>
            <img src={ "./static/img/slide/topSlider02.jpg" } style={ sliderTopImg }></img>
        </Slider>
    );
}