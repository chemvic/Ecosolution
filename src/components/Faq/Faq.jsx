import React, { useState } from 'react';
import { Link} from 'react-scroll';
import HiddenAnswer from 'components/HiddenAnswer/HiddenAnswer';
import css from './Faq.module.css';
import icons from '../../images/icons.svg';
import {questions} from './questions';

const Faq = ({id}) => {
const [activeQuestion, setActiveQuestion]= useState(0);


   return (
    <section id={id} className={css.section}>
         <div className={css.grid_container}>            
            <div  className={css.title}><p className={css.title_text}>Frequently Asked<br/> Questions</p></div>
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
                   <Link
                      className={css.button}
                      as='button'
                      type='button'
                      to="contacts"
                      offset={-100}                     
                      smooth={true}
                      duration={500}
                    >
                      Contact Us
                <div className={css.icon_wrapper}>
                  <svg className={css.icon}>
                    <use href={`${icons}#icon-arrow-down`} />
                  </svg>
                </div>
                    </Link>
              </div>
                
            </div> 
        </div>   
     </section>     
   );
 };
 export default Faq; 
