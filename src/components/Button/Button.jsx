import css from './Button.module.css';
import icons from '../../images/icons.svg';

const Button = ({text}) => {
   return (
     <div >
        <button className={css.button} type='button' >
        {text}
        <div className={css.icon_wrapper}>
            <svg className={css.icon}>
                <use href={`${icons}#icon-arrow-right`} />
            </svg>
        </div>
      </button>
     </div>
   );
 };
 export default Button;