import { Link} from 'react-scroll';
import css from './Button1.module.css';
import icons from '../../images/icons.svg';

const Button1 = ({text}) => {
   return (
     <div >
       <Link
                      className={css.button}
                      as='button'
                      type='button'
                      to="contacts"                     
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
   );
 };
 export default Button1;