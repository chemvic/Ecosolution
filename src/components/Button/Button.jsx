import css from './Button.module.css';
const Button = ({text}) => {
   return (
     <div >
        <button className={css.button} type='button' >
        {text}
      </button>
     </div>
   );
 };
 export default Button;