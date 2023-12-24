import React, { useState } from 'react';
import css from './BurgerMenu.module.css';
import icons from '../../images/icons.svg';
import BurgerLink from 'components/BurgerLink/BurgerLink';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <div>
      <button className={css.burger_button} onClick={openMenu}>
        <svg className={css.menu_icon}>
          <use href={`${icons}#icon-menu`} />
        </svg>
      </button>
      {isOpen && (
        <>
          <div className={css.overlay} onClick={closeMenu}></div>
          <div className={`${css.modal} ${isOpen ?css.open: ''}`}>
          <button className={css.close_button} onClick={closeMenu}>
            <svg className={css.close_icon}>
              <use href={`${icons}#icon-close`} />
            </svg> close
          </button>            
          <div className={css.modal_wrapper}>
              <nav>
                <ul className={css.modal_list}>
                  <li className={css.modal_item}>
                  <BurgerLink text='Main' closeMenu={closeMenu} link='main'/>
                  </li>
                  <li className={css.modal_item}>
                  <BurgerLink text='About' closeMenu={closeMenu} link='about'/>
                  </li>
                  <li className={css.modal_item}>
                  <BurgerLink text='Cases' closeMenu={closeMenu} link='cases'/>
                  </li>
                  <li className={css.modal_item}>
                  <BurgerLink text='FAQ' closeMenu={closeMenu} link='faq'/>
                  </li>
                  <li className={css.modal_item}>
                  <BurgerLink text='Contact Us' closeMenu={closeMenu} link='contacts'/>                  </li>
                </ul>
              </nav>
              <div className={css.modal_social}>
                            <div>
                                <a 
                                    className={css.contacts__link}
                                    href="/">                                    
                                    <svg className={css.icon}>
                                        <use href={`${icons}#icon-facebook`} />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a 
                                    className={css.contacts__link}
                                    href="/">                                    
                                    <svg className={css.icon}>
                                        <use href={`${icons}#icon-instagram`} />
                                    </svg>
                                </a>
                            </div>
                            </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
