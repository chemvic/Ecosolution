 import css from './Hero.module.css';
 import Button from '../Button/Button';

 const Hero = () => {
    return (
        <section  className={css.section}>
         
      <div className={css.hero_header} >
        <div className={css.title_wrapper}>
          <h1 className={css.title}>RENEWABLE ENERGY For any task</h1>
        </div>
      
        <div className={css.wrapper}>
          <div className={css.description_wrapper}>
            <p className={css.description}>Development and implementation of renewable non-pollutingF energy sources,
             generating power generation using energy wind, sun, water, biomass
            </p>
          </div>          
          <Button text="Learn more"/> 
        </div>
       </div>
         
        
        

        <div className={css.hero__contacts}>       
         
          <a
                    className={css.contacts__link}
                    href="https://maps.app.goo.gl/SZX7RGnyEbdFQhdW6"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    >79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</a
                  >
         
            <a
              lang="en" 
              className={css.contacts__link}
              href="mailto:office@ecosolution.com"              
              >office@ecosolution.com</a
            >
        
             <p className={css.contacts__trade}>ecosolution © 2023</p>             
        </div>
        {/* <div className={css.hero__contacts}>
          <ul className={css.contacts}>
          <li className={css.contacts__item}>
          <a
                    className={css.contacts__link}
                    href="https://maps.app.goo.gl/SZX7RGnyEbdFQhdW6"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    >79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</a
                  >
          </li>
          <li className={css.contacts__item}>
            <a
              lang="en" 
              className={css.contacts__link}
              href="mailto:office@ecosolution.com"              
              >office@ecosolution.com</a
            >
          </li>
          <li className={css.contacts__item}>
             <p className={css.contacts__trade}>ecosolution © 2023</p>
          </li>
        </ul>        
        </div> */}

       <div className={css.hero__overlay}>
        </div>
    
      

        </section>
    );
  };
  export default Hero;