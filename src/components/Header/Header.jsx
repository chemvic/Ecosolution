import { Link} from 'react-scroll';
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