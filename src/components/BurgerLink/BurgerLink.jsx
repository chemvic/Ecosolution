import { Link} from 'react-scroll';
import css from './BurgerLink.module.css';
import icons from '../../images/icons.svg';

const BurgerLink = ({text, link, closeMenu}) => {
  
   return (
     <div >
      <Link
                     className={css.modal_link}
                     to={link}
                     onClick={closeMenu}
                     offset={-100}
                     smooth={true}
                     duration={500}
                    >
                     {text}
                  <svg className={css.icon}>
                    <use href={`${icons}#icon-arrow-right-up`} />
                  </svg>
                    </Link>
     </div>
   );
 };
 export default BurgerLink;