import React from 'react';
import Slider from 'react-slick';
import Stacks from '../../components/data/stacks'
import '../../styles/carouselStacks.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function carouselStacks() {

  const settings = {
      dots: false,
      infinite: true,
      speed: 900,
      slidesToShow: 7,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        }
      ]
    };

  return (
    <>
        <div className="stack-wrap">
          <div className="stack-row">
            <Slider {...settings}>
             {Stacks.map((items, index) => (
              <div className="stackCard">
                <img src={items.image} alt="" />
                <p>{items.name}</p>
              </div>
             ))}
            </Slider>
          </div>
        </div>
    </>
  )
}

export default carouselStacks