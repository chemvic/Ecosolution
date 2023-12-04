import Logo  from 'components/Logo/Logo';
import BurgerMenu  from 'components/BurgerMenu/BurgerMenu';
import Hero  from 'components/Hero/Hero';
import css from './App.module.css';
import Values from 'components/Values/Values';
import Electricity from 'components/Electricity/Electricity';
import React, { useState } from 'react';
import MySlider from 'components/Slider/MySlider';


 const App = () => {
  const [scrollToId, setScrollToId] = useState(null);
  return (
    <div className={css.container}>
     {/* <Header/> */}
     <div className={css.header}>
        <Logo/>
        <BurgerMenu  setScrollToId={setScrollToId}/>
        <button className={css.button} type='button' >
        Get in touch
      </button>
      </div>
     <Hero/>
     <Values id='main' scrollToId={scrollToId}/>
     <Electricity value ="1.134.147.814"/>
     <MySlider/>
    </div>
  );
};
export default App;

