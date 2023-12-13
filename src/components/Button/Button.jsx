import { Link} from 'react-scroll';
import css from './Button.module.css';
import icons from '../../images/icons.svg';

const Button = ({text}) => {
   return (
     <div >
      <Link
                      className={css.button}
                      as='button'
                      type='button'
                      to="cases"                     
                      smooth={true}
                      duration={500}
                    >
                     {text}
                <div className={css.icon_wrapper}>
                  <svg className={css.icon}>
                    <use href={`${icons}#icon-arrow-right`} />
                  </svg>
                </div>
                    </Link>
     </div>
   );
 };
 export default Button;