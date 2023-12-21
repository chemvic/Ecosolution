import React, { useState } from 'react';
import { FaTimes, FaInstagram, FaFacebook, FaArrowRight } from 'react-icons/fa';
import { Link} from 'react-scroll';
import css from './BurgerMenu.module.css';
import icons from '../../images/icons.svg';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className={css.burger_button} onClick={toggleMenu}>
        <svg className={css.menu_icon}>
          <use href={`${icons}#icon-menu`} />
        </svg>
      </button>
      {isOpen && (
        <>
          <div className={css.overlay} onClick={closeMenu}></div>
          <div className={`${css.modal} ${isOpen ?css.open: ''}`}>
            <FaTimes onClick={toggleMenu} style={{ alignSelf: 'flex-start' }} />
            <div className={css.modal_wrapper}>
              <nav>
                <ul className={css.modal_list}>
                  <li className={css.modal_item}>
                    <Link
                      className={css.modal_link}
                      to="main"
                      onClick={closeMenu}
                      smooth={true}
                      duration={500}
                    >
                      Main <FaArrowRight style={{ margin: '5px' }} />
                    </Link>
                  </li>
                  <li className={css.modal_item}>
                    <Link
                      className={css.modal_link}
                      to="about"
                      offset={-100}
                      onClick={closeMenu}
                      smooth={true}
                      duration={500}
                    >
                      About <FaArrowRight style={{ margin: '5px' }} />
                    </Link>
                  </li>
                  <li className={css.modal_item}>
                    <Link
                      className={css.modal_link}
                      to="cases"
                      offset={-100}
                      onClick={closeMenu}
                      smooth={true}
                      duration={500}
                    >
                      Cases <FaArrowRight style={{ margin: '5px' }} />
                    </Link>
                  </li>
                  <li className={css.modal_item}>
                    <Link
                      className={css.modal_link}
                      to="faq"
                      offset={-100}
                      onClick={closeMenu}
                      smooth={true}
                      duration={500}
                    >
                      FAQ <FaArrowRight style={{ margin: '5px' }} />
                    </Link>
                  </li>
                  <li className={css.modal_item}>
                    <Link
                      className={css.modal_link}
                      to="contacts"
                      offset={-100}
                      onClick={closeMenu}
                      smooth={true}
                      duration={500}
                    >
                      Contact Us <FaArrowRight style={{ margin: '5px' }} />
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className={css.modal_social}>
                <FaInstagram style={{ marginRight: '15px' }} />
                <FaFacebook />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
