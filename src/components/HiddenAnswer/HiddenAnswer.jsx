
import css from './HiddenAnswer.module.css';
import icons from '../../images/icons.svg';

const HiddenAnswer = ({quest, asw, showText, showAnswer}) => {

   return (
    
         <div className={css.grid_container}>
              <button className={css.button} type='button' onClick={showAnswer}>
                <svg className={css.button_icon}>
                 <use href={`${icons}#${showText ? 'icon-minus' : 'icon-Plus'}`}/>                 
                </svg> 
              </button> 
            <div className={css.question}><p>{quest}</p></div>
            {showText &&
            (<div className={css.answer}><p>{asw}</p></div>)};            
            </div>            
        );
 };
 export default HiddenAnswer; 
