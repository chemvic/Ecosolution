
import css from './Card.module.css';
const Card = ({title, text, icon}) => {
   return (
     <div className={css.card}>
        <div className={css.heading}>
           {icon}
            <h3 className={css.title}>{title}</h3>  
        </div>
      
       <div className={css.text}>
        <p className={css.description}>{text}</p>
       </div>
       

     </div>
   );
 };
 export default Card;