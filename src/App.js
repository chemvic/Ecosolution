// import Logo  from 'components/Logo/Logo';
// import BurgerMenu  from 'components/BurgerMenu/BurgerMenu';
import Hero  from 'components/Hero/Hero';
import css from './App.module.css';
import Values from 'components/Values/Values';
import Electricity from 'components/Electricity/Electricity';
// import React, { useState } from 'react';
import Cases from 'components/Cases/Cases';
import Faq from 'components/Faq/Faq';
import ContactUs from 'components/ContactUs/ContactUs';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

 const App = () => {
  // const [scrollToId, setScrollToId] = useState(null);
  return (
    <div className={css.container}>
    <Header/>
    <Hero id="main"/>
    <Values id="about"/>
    <Electricity value ="1.134.147.814"/>
    <Cases  id="cases"/>
    <Faq id="faq"/> 
    <ContactUs id="contacts"/>
    <Footer/>
    </div>
  );
};
export default App;
