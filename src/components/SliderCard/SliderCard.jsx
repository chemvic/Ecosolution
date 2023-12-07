
import css from './SliderCard.module.css';
import icons from '../../images/icons.svg';

const SliderCard = ({photo, alt, title, description, date}) => {
   return (
     <div className={css.sliderCard}>
      
              <img 
                className={css.sliderCard__photo}                
                src={photo}
                alt={alt}/>
                            
              <div className={css.sliderCard__info}>
                <div className={css.sliderCard__infoUp}>
                    <h3 className={css.sliderCard__title}>{title}</h3>
                    <button  className={css.button} type='button' >
                      <svg className={css.icon}>
                            <use href={`${icons}#icon-arrow-right`} />
                      </svg>
                    </button>  
                </div>
                <div className={css.sliderCard__infoDown}>
                    <p className={css.sliderCard__description}>{description}</p>
                    <p className={css.sliderCard__description}>{date}</p> 
                </div>
                </div>
                </div>            
   );
 };
 export default SliderCard;