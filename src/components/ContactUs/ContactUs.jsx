
import css from './ContactUs.module.css';
import icons from '../../images/icons.svg';
import MessageForm from 'components/Form/Form';


const ContactUs = () => {
   return (
     <div className={css.section}>
                         
            <h2 className={css.title}>Contact us</h2>

            <div className={css.contactUs}>

          

            <address>
                <ul className={css.contacts_list}>
                    <li className={css.contacts_item}>
                        <div>
                            <h3 className={css.contacts_names}>Phone:</h3>
                            <div className={css.contacts_phone1}>                                
                                <a 
                                    className={css.contacts__link}
                                    href="tel:38 (098) 12 34 567"              
                                    >
                                    <svg className={css.icon}>
                                       <use href={`${icons}#icon-call`} />
                                    </svg>
                                    38 (098) 12 34 567
                                </a>
                            </div>
                            <div>                                
                                <a 
                                    className={css.contacts__link}
                                    href="tel:38 (093) 12 34 567"              
                                    >
                                    <svg className={css.icon}>
                                       <use href={`${icons}#icon-call`} />
                                    </svg>
                                    38 (093) 12 34 567
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className={css.contacts_item}>
                        <div>
                            <h3 className={css.contacts_names}>E-mail:</h3>
                            <div>
                               
                                <a 
                                    className={css.contacts__link}
                                    href="mailto:office@ecosolution.com"              
                                    >
                                    <svg className={css.icon}>
                                        <use href={`${icons}#icon-sms`} />
                                    </svg>                                        
                                    office@ecosolution.com
                                </a>
                            </div>
                            
                        </div>
                    </li>
                    <li className={css.contacts_item}>
                    <div>
                            <h3 className={css.contacts_names}>Address:</h3>
                            <div>
                                
                                <a 
                                    className={css.contacts__link}
                                    href="https://maps.app.goo.gl/SZX7RGnyEbdFQhdW6"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    >
                                    <svg className={css.icon}>
                                        <use href={`${icons}#icon-map`} />
                                    </svg>
                                    79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                                </a>
                            </div>
                            
                        </div>
                    </li>
                    <li className={css.contacts_item}>
                        <div>
                            <h3 className={css.contacts_names}>Social Networks:</h3>
                            <div className={css.contacts_socials}>
                            <div>
                                <a 
                                    className={css.contacts__link}
                                    href="/">                                    
                                    <svg className={css.icon}>
                                        <use href={`${icons}#icon-facebook`} />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a 
                                    className={css.contacts__link}
                                    href="/">                                    
                                    <svg className={css.icon}>
                                        <use href={`${icons}#icon-instagram`} />
                                    </svg>
                                </a>
                            </div>
                            </div>
                        </div> 
                    </li>
                </ul>
            </address>

            <MessageForm/>

     
         </div>
       </div>
       

 
   );
 };
 export default ContactUs;