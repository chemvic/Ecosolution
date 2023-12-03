 import Logo from '../Logo/Logo';
 import Button from '../Button/Button';
 import css from './Header.module.css';
 const Header = () => {
    return (
      <div className={css.header}>
        <Logo/>
        <Button className={css.button} text="Get in touch"/>
      </div>
    );
  };
  export default Header;