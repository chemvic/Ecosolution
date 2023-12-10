import css from './Electricity.module.css';
const Electricity = ({value}) => {
    const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    return (
    <section className={css.section}>
        <div className={css.electro}>
          <div className={css.electricity_text}>    
            <h2 className={css.title}>Electricity we produced<br/> for all time</h2>       
          </div>
          <div className={css.energy}>
            <span className={css.energy_value}>{formattedValue}</span>
            <span className={css.energy_unit}>kWh</span>
          </div>  
        </div>
   
 </section>
   );
 };
 export default Electricity;