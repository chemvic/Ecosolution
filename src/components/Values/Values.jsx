

import Card from 'components/Card/Card';
import css from './Values.module.css';
import workerImage from '../../images/man-worker-firld-by-solar-panels 1.jpg';
import workersImage from '../../images/workers.jpg';

const Values = ({id}) => {  
   return (
    <section id={id} className={css.section}>
        <div  className={css.values}>

        <div className={css.values_text}>
          <div className={css.values_title}>
            <h2 className={css.title}>Main values of<br/> our company</h2>       
          </div>
          <div className={css.wrapper}>
            <p className={css.description}>EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.
            </p>
          </div>  
        </div>
     
        <div className={css.grid_container}>
          <div className={css.card1}><Card title='Openness' text='to the world, people, new ideas and projects' icon='icon-maximize-circle'/></div>
          <div className={css.card2}><Card title='Responsibility' text='we are aware that the results of our work have an impact on our lives and the lives of future generations' icon='icon-global-edit'/></div>
          <div className={css.image1}>
            <img  src={workersImage} alt="workers at wind turbines"/>
          </div>
          <div className={css.image2}> 
            <img  src={workerImage} alt="worker at solar panels"/>
          </div>  
          <div className={css.card3}><Card title='Innovation' text='we use the latest technology to implement non-standard solutions' icon='icon-cpu-charge'/></div>  
          <div className={css.card4}><Card title='Quality' text='we do not strive to be the first among others, but we want to be the best in our business' icon='icon-ranking'/></div>

        </div>

        </div>
        
     
     </section>
   );
 };
 export default Values;