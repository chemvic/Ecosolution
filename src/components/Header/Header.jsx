import { Link} from 'react-scroll';
import {useEffect, useState} from 'react';
 import Logo from '../Logo/Logo';
 import BurgerMenu from '../BurgerMenu/BurgerMenu';
 import css from './Header.module.css';
 import icons from '../../images/icons.svg';

 const Header = () => {
  const [scrolled, setScrolled]=useState (false);

  useEffect(()=>{
    const handler=()=>{
     if (window.scrollY>0) {
      setScrolled(true); 
     }else{
      setScrolled(false)
     };
    };
    window.addEventListener('scroll', handler);

    return()=>{
       window.removeEventListener('scroll', handler);
    };

  },[]);


    return (
      <div className={`${css.header} ${scrolled ? css.scrolled : ''}`}>
        <Logo/>
        <div className={css.header_buttons}>
           <BurgerMenu/>
           <Link
                      className={css.button}
                      as='button'
                      type='button'
                      to="contacts"
                      offset={-100}                     
                      smooth={true}
                      duration={500}
                    >
                      Get in touch
                <div className={css.icon_wrapper}>
                  <svg className={css.icon}>
                    <use href={`${icons}#icon-arrow-down`} />
                  </svg>
                </div>
                    </Link>
        </div>
       
      </div>
    );
  };
  export default Header;