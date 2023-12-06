
import css from './SliderCard.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircumIcon from "@klarr-agency/circum-icons-react";
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
                    <button style={{
        backgroundColor: '#97D28B',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
        width: '60px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer'}}  type='button' >
            <CircumIcon name="circle_chev_right" color="#000" size="80px"/>
                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" color='#000' size='28px' /> */}
                    </button>  
                </div>
                <div className={css.sliderCard__infoDown}>
                    <p className={css.sliderCard__description}>{description}</p>
                    <p className={css.sliderCard__description}>{date}</p> 
                </div>
{/* className={css.button} */}

                </div>
                </div>
                 
   
    
   );
 };
 export default SliderCard;