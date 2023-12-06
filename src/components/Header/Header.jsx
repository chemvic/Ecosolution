 import Logo from '../Logo/Logo';
 import BurgerMenu from '../BurgerMenu/BurgerMenu';
 import css from './Header.module.css';
 const Header = () => {
    return (
      <div className={css.header}>
        <Logo/>
        <BurgerMenu/>
        <button className={css.button} type='button' >
        Get in touch
      </button>
      </div>
    );
  };
  export default Header;