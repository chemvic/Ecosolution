import React, { useState } from 'react';
import css from './BurgerMenu.module.css';
import { FaTimes, FaInstagram, FaFacebook,  FaArrowRight } from 'react-icons/fa';
import icons from '../../images/icons.svg';
import { Link, animateScroll as scroll } from "react-scroll";

const BurgerMenu = ({ setScrollToId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (section) => {
    scroll.scrollTo(section);
    toggleMenu();
  };

  return (
    <div>
      <button className={css.burger_button} onClick={toggleMenu} >
         <svg className={css.menu_icon}>
            <use href={`${icons}#icon-menu`} />
         </svg>       
      </button>
      {isOpen && (<>
        <div className={css.overlay}></div>
        <div className={css.modal}>
          <FaTimes onClick={toggleMenu} style={{ alignSelf: 'flex-start' }} />
          <div className={css.modal_wrapper}>
             <nav >
            <ul className={css.modal_list}>
              <li  className={css.modal_item}><Link className={css.modal_link} onClick={() => scrollToSection('main')}>Main  <FaArrowRight style={{ margin: '5px' }}/></Link></li>      
              <li  className={css.modal_item}><Link className={css.modal_link} onClick={() => scrollToSection('about')}>About  <FaArrowRight style={{ margin: '5px' }}/></Link></li>
              <li  className={css.modal_item}><Link className={css.modal_link} onClick={() => scrollToSection('cases')}>Cases  <FaArrowRight style={{ margin: '5px' }}/></Link></li>
              <li  className={css.modal_item}><Link className={css.modal_link} onClick={() => scrollToSection('faq')}>FAQ  <FaArrowRight style={{ margin: '5px' }}/></Link></li>
              <li  className={css.modal_item}><Link className={css.modal_link} onClick={() => scrollToSection('contacts')}>Contacts  <FaArrowRight style={{ margin: '5px' }}/></Link></li>
            </ul>
          </nav>
          <div className={css.modal_social}>
            <FaInstagram style={{ marginRight: '15px' }} />
            <FaFacebook />
          </div>
          </div>
         
        </div></>
      )}
    </div>
  );
};

export default BurgerMenu;
