 import css from './Hero.module.css';
 import Button from '../Button/Button';

 const Hero = () => {
    return (<>
        <section className={css.section}>
          <div className={css.hero}>
            <div className={css.wrapper} >
       <h1 className={css.title}>RENEWABLE ENERGY For any task</h1>
      </div>
      <div className={css.wrapper}>
        <p className={css.description}>Development and implementation of renewable non-pollutingF energy sources,
             generating power generation using energy wind, sun, water, biomass
        </p>
      </div>
        <div className={css.button_comp}>
         <Button text="Learn more"/> 
        </div>
        

        <div className={css.hero__contacts}>
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
        </ul>
         
        </div>

       <div className={css.hero__overlay}>
        </div>
          </div>
      

        </section></>
    );
  };
  export default Hero;