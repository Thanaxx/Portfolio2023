import React from 'react';
import Slider from 'react-slick';
import stacks from '../../components/data/stacks'
import '../../styles/carouselStacks.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function carouselStacks() {

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

  return (
    <>
        <div className="stack-wrap">
          <div className="stack-row">
              {stacks.map((item, index) => (
                <>
                  <Slider {...settings}>
                    <div>
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                    </div>
                  </Slider>
                </>
              ))}
          </div>
        </div>
    </>
  )
}

export default carouselStacks