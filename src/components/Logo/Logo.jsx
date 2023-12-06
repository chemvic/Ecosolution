import css from './Logo.module.css';
const Logo = () => {
  // const logoIcon = '../../images/icons.svg#icon-burger';
   return (
     <div >
      {/* <a href="/"> */}
      <svg className={css.logo_icon}>
        <use xlinkHref="../../images/icons.svg#icon-burger" />
      </svg>
                  {/* </a> */}
     </div>
   );
 };
 export default Logo;