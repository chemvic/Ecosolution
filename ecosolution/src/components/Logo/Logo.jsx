import css from './Logo.module.css';
const Logo = () => {
   return (
     <div >
      <a href="/">
                    <svg className={css.logo_icon}>
                      <use href="../images/icons.svg#icon-Group-logo"></use>
                    </svg>
                  </a>
     </div>
   );
 };
 export default Logo;