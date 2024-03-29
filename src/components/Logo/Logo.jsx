import css from './Logo.module.css';
import icons from '../../images/icons.svg';

const Logo = () => {

   return (
     <div >     
      <a href={process.env.PUBLIC_URL + '/'}>
      <svg className={css.logo_icon}>
        <use href={`${icons}#icon-Group-logo`} />
      </svg>
      </a>
     </div>
   );
 };
 export default Logo;