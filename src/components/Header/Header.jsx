 import Logo from '../Logo/Logo';
 import BurgerMenu from '../BurgerMenu/BurgerMenu';
 import css from './Header.module.css';
 import icons from '../../images/icons.svg';

 const Header = () => {
    return (
      <div className={css.header}>
        <Logo/>
        <div className={css.header_buttons}>
           <BurgerMenu/>
           {/* <BurgerMenu  setScrollToId={setScrollToId}/> */}
            <button className={css.button} type='button' >
                Get in touch
                <div className={css.icon_wrapper}>
                  <svg className={css.icon}>
                    <use href={`${icons}#icon-arrow-down`} />
                  </svg>
                </div>
            </button>
        </div>
       
      </div>
    );
  };
  export default Header;