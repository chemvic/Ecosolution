import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from 'components/Card/Card';
import workerImage from '../../images/man-worker-firld-by-solar-panels 1.jpg';



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircumIcon from "@klarr-agency/circum-icons-react";


const MySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => setCurrentSlide(next)
   
  };

  const next = () => {
    if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
  }

  const previous = () => {
    if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
  }

  return (
    <div>
        <p>Current Slide: {currentSlide + 1}/5</p>

      <button style={{
        backgroundColor: 'white',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '66px',
        width: '66px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer'
      }} onClick={previous}><CircumIcon name="circle_chev_left" color="#000" size="66px" /></button>
      <button style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '66px',
        width: '66px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: 'white',
        cursor: 'pointer'
      }} onClick={next}><CircumIcon name="circle_chev_right" color="#000" size="66px"/></button>
    <Slider {...settings}>
      <div>
        <h3><Card title='Openness' text='to the world, people, new ideas and projects'/></h3>
      </div>
      <div>
        <h3><Card title='Quality' text='we do not strive to be the first among others, but we want to be the best in our business'/></h3>
      </div>
      <div>
        <h3><Card title='Responsibility' text='we are aware that the results of our work have an impact on our lives and the lives of future generations'/></h3>
      </div>
      <div>
        <h3><Card title='Innovation' text='we use the latest technology to implement non-standard solutions'/></h3>
      </div>
      <div>
        <h3> <img  src={workerImage} alt="worker at solar panels"/></h3>
      </div>
    </Slider>
    </div>
  );
};

export default MySlider;
