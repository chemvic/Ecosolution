
import css from './HiddenAnswer.module.css';
import icons from '../../images/icons.svg';

const HiddenAnswer = ({quest, asw, showText, showAnswer}) => {

   return (
    
        <div className={css.grid_container}>

            <div className={css.question_wrapper}>
              <div className={css.question}><p className={css.question_text}>{quest}</p></div>
  
              <button className={css.button} type='button' onClick={showAnswer}>
                <svg className={css.button_icon}>
                 <use href={`${icons}#${showText ? 'icon-minus' : 'icon-Plus'}`}/>                 
                </svg> 
              </button> 

            </div>
             
             {showText &&
             (<div className={css.answer}><p className={css.answer_text}>{asw}</p></div>)}
                        
        </div>            
        );
 };
 export default HiddenAnswer; 
