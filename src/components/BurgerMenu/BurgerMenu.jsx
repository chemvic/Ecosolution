import React, { useState } from 'react';
import {FaBars, FaTimes, FaInstagram, FaFacebook } from 'react-icons/fa';
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
     <button onClick={toggleMenu} style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '39px',
        width: '39px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: '#DCEFD8',
        color: '#292D32',
        fontSize: '24px',
        cursor: 'pointer'
      }}>
        <FaBars />
      </button>
      {isOpen && (
        <div style={{
          position: 'fixed',
          width:'320px',
          height: '701px',
          borderRadius:'25px',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          backgroundColor: 'rgba(23,61,51,0.75)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: '50px'
        }}>
          <FaTimes onClick={toggleMenu} style={{ alignSelf: 'flex-end' }} />
          <nav>
            <ul>
            <li><Link onClick={() => { setScrollToId('main'); scrollToSection('main'); }}>Main</Link></li>              {/* <li><Link onClick={() => scrollToSection('main')}>Main</Link></li> */}
              <li><Link onClick={() => scrollToSection('about')}>About</Link></li>
              <li><Link onClick={() => scrollToSection('cases')}>Cases</Link></li>
              <li><Link onClick={() => scrollToSection('faq')}>FAQ</Link></li>
              <li><Link onClick={() => scrollToSection('contacts')}>Contacts</Link></li>
            </ul>
          </nav>
          <div>
            <FaInstagram style={{ marginRight: '15px' }} />
            <FaFacebook />
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
