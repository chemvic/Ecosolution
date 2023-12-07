import css from './Faq.module.css';
// import icons from '../../images/icons.svg';

const Faq = () => {

   return (
    <section  className={css.section}>
         <div className={css.grid_container}>
            <div className={css.title}><p>Lorem ir ssumenda, veritatis!</p>></div>
            <div className={css.questions}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quae, optio cumque vero sapiente non, nam quis quidem commodi voluptatem asperiores. Corporis facilis beatae, excepturi tempore placeat nesciunt quidem pariatur exercitationem mollitia nam debitis voluptates esse? Voluptatum soluta quidem tempore.</p>></div>
            <div className={css.more_questions}>
                <div className={css.more_wrapper}>
                   <p>Lorem ir ssumenda, veritatis!</p>
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
