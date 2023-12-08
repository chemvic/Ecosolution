import React, { useState } from 'react';
import HiddenAnswer from 'components/HiddenAnswer/HiddenAnswer';
import css from './Faq.module.css';
import {questions} from './questions';

const Faq = () => {
const [activeQuestion, setActiveQuestion]= useState(0);


   return (
    <section  className={css.section}>
         <div className={css.grid_container}>            
            <div className={css.title}><p className={css.title_text}>Frequently Asked<br/> Questions</p></div>
              <div className={css.questions}>
               {questions.map((question, index)=>(<HiddenAnswer
                key={question.qwest}
                quest={question.qwest}
                asw={question.asw}
                showText={index===activeQuestion} 
                showAnswer={()=>setActiveQuestion(index)}               
                />))}               
              </div>
            <div className={css.more_questions}>
              <div className={css.more_wrapper}>
                   <p className={css.more_text}>Didn't find the answer to your question?</p>
                 <button className={css.button} type='button' >
                    Contact Us
                 </button> 
              </div>
                
            </div> 
        </div>   
     </section>     
   );
 };
 export default Faq; 
