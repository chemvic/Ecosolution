import { Link} from 'react-scroll';
import Logo from '../Logo/Logo';
import css from './Footer.module.css';
import icons from '../../images/icons.svg';

const Footer = () => {
   return (
     <section className={css.section}>
       
       <div className={css.flex_container}>
        <div className={css.flex_logo}>
          <Logo/>  
        </div>
        <div className={css.flex_button}>
        <Link
                      className={css.button}
                      as='button'
                      type='button'
                      to="main"                     
                      smooth={true}
                      duration={500}
                    ><div className={css.icon_wrapper}>
                  <svg className={css.button_icon}>
                    <use href={`${icons}#icon-arrow-up2`} />
                  </svg>
                </div>
                    </Link>           
        </div>
        <div className={css.flex_socials}>
                            <div className={css.contacts_socials}>
                              <div>
                                <a 
                                    className={css.social__link}
                                    href="/">                                    
                                    <svg className={css.icon}>
                                        <use href={`${icons}#icon-facebook`} />
                                    </svg>
                                </a>
                              </div>
                              <div>
                                <a 
                                    className={css.social__link}
                                    href="/">                                    
                                    <svg className={css.icon}>
                                        <use href={`${icons}#icon-instagram`} />
                                    </svg>
                                </a>
                              </div>
                            </div>                   
        </div>                        
                        
       </div>
       <div className={css.contacts}>       
         
         <a
                   className={css.contacts__link}
                   href="https://maps.app.goo.gl/SZX7RGnyEbdFQhdW6"
                   target="_blank"
                   rel="noopener noreferrer nofollow"
                   >79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</a
                 >
        
           <a
             lang="en" 
             className={css.contacts__link}
             href="mailto:office@ecosolution.com"              
             >office@ecosolution.com</a
           >
       
            <p className={css.contacts__link}>ecosolution © 2023</p>             
       </div>
      
     </section>
   );
 };
 export default Footer;