import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import lvivImage from '../../images/Lviv-region.jpg';
// import zhytomyrImage from '../../images/Zhytomyr.jpg';
// import rivneImage from '../../images/Rivne.jpg';
// import khersonImage from '../../images/Kherson.jpg';
// import zaporImage from '../../images/Zaporizhia.jpg';
import css from './Cases.module.css';
import SliderCard from 'components/SliderCard/SliderCard';
import icons from '../../images/icons.svg';
import cards from './cards.json';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={css.next_button}>   
      <button className={css.button} onClick={onClick}>
          <svg className={css.icon}>
              <use href={`${icons}#icon-round-arrow-right`} />
          </svg>
        </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={css.prev_button}>    
      <button className={css.button} onClick={onClick}>
          <svg className={css.icon}>
              <use href={`${icons}#icon-arrow-left`} />
          </svg>
        </button>
    </div>
  );
}


const Cases = ({id}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
   const importImages= async() => {
       const imagesImported =[];

    for(const card of cards){
      try {
        const image = await import(`../../images/${card.photo}`);
        imagesImported.push(image.default);
      } catch (error) {
        console.error(`Failed to download photo: ${error}`);
      };      
    };
    setImages(imagesImported);
   };
   importImages();
  }, []);
  

  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    swipeToSlide: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }      
    ]
  };

  return (
    <section id={id} className={css.section}>
    <div className={css.cases_header} >
    <div className={css.cases_text}>    
      <h2  className={css.title}>Successful cases of our company</h2>       
    </div>


    <div  className={css.wrapper_handlers}>
       <p className={css.current_pict}>{currentSlide + 1}<span className={css.quentity_pict}> /5</span></p>

       <div className={css.wrapper_buttons}>
       </div>      
    </div>
  </div>     


    <Slider {...settings} className={css.slider}>
      {/* <div>        
      <SliderCard photo={lvivImage} alt={'Lviv'} title={'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”'} 
     description={'Wind Power for auto field irrigation'} date={'July 2023'}/>       
      </div>
      <div>
      <SliderCard photo={zhytomyrImage} alt={'Zhytomyr'} title={'Zhytomyr city Private Enterprise “Bosch”'} 
     description={'Solar Panels for industrial use'} date={'November 2023'}/>       
      </div>
      <div>
      <SliderCard photo={rivneImage} alt={'Rivne'} title={'Rivne city Private Enterprise “Biotech”'} 
     description={'Thermal modules'} date={'October 2023'}/>       
      </div>
      <div>
      <SliderCard photo={khersonImage} alt={'Kherson'} title={'Kherson city Private Enterprise “HealthyFarm”'} 
     description={'Wind power'} date={'September 2021'}/>       
      </div>
      <div>
      <SliderCard photo={zaporImage} alt={'Zaporizhia'} title={'Zaporizhia city Private Enterprise “Biotech”'} 
     description={'Mini nuclear stations'} date={'May 2023'}/>      
      </div> */}
      {cards.map(({alt, title, description, date}, index)=>(
        <div key={description}>
          <SliderCard photo={images[index]} alt={alt} title={title} 
          description={description} date={date}/>      
        </div>
      ))}      
    </Slider>
    </section>
  );
};

export default Cases;


