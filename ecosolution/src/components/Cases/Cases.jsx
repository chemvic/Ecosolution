import React, { useState, useRef, useEffect  } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import workersImage from '../../images/workers.jpg';
import workerImage from '../../images/man-worker-firld-by-solar-panels 1.jpg';
import css from './Cases.module.css';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircumIcon from "@klarr-agency/circum-icons-react";
import SliderCard from 'components/SliderCard/SliderCard';


const Cases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth > 767 ? 2 : 1);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
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
    <section  className={css.section}>
    <div>
    <div className={css.cases_text}>    
      <h2 className={css.title}>Successful cases of<br/> our company</h2>       
    </div>
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
        
      <SliderCard photo={workerImage} alt={'qwe'} title={'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”'} 
     description={'Wind Power for auto field irrigation'} date={'July 2023'}/>        {/* <h3><Card title='Openness' text='to the world, people, new ideas and projects'/></h3> */}
      </div>
      <div>
      <SliderCard photo={workersImage} alt={'qwe'} title={'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”'} 
     description={'Wind Power for auto field irrigation'} date={'July 2023'}/>        {/* <h3><Card title='Openness' text='to the world, people, new ideas and projects'/></h3> */}
      </div>
      <div>
      <SliderCard photo={workerImage} alt={'qwe'} title={'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”'} 
     description={'Wind Power for auto field irrigation'} date={'July 2023'}/>        {/* <h3><Card title='Openness' text='to the world, people, new ideas and projects'/></h3> */}
      </div>
      <div>
      <SliderCard photo={workersImage} alt={'qwe'} title={'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”'} 
     description={'Wind Power for auto field irrigation'} date={'July 2023'}/>        {/* <h3><Card title='Openness' text='to the world, people, new ideas and projects'/></h3> */}
      </div>
      <div>
      <SliderCard photo={workerImage} alt={'qwe'} title={'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”'} 
     description={'Wind Power for auto field irrigation'} date={'July 2023'}/>        {/* <h3><Card title='Openness' text='to the world, people, new ideas and projects'/></h3> */}
      </div>
      
    </Slider>
    </div></section>
  );
};

export default Cases;


