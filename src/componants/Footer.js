import '../Assets/css/Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
           <div className="footer">
               <div className="footer-container">
                   <div className="message-for-users">
                       <span>
                           Please contact me in any way <br /> you like
                       </span>
                   </div>
                   <div className="social-links">
                       <div className="social-links-h">
                           Social
                       </div>
                       <div className="social-links-items">
                           
                           <a href="https://github.com/ibtihelbs">Github</a>
                           <a href="https://www.linkedin.com/in/ibtihel-ben-salah/">LinkedIn</a>
                           
                       </div>
                   </div>
                   <div className="social-links">
                       <div className="social-links-h">
                           Contact
                       </div>
                       <ul className="social-links-items">
                           
                           <li>+216 92398964</li>
                       </ul>
                   </div>
                   <div className="footer-menu social-links">
                       <div className="footer-menu-h social-links-h">
                           Other Menu
                       </div>
                       
                       <ul className="footer-menu-links social-links-items">
                       <li>
                         <Link to="/" className='li'>Home</Link>
                       </li>
                       <li>
                         <Link to="About" className='li'>About</Link>
                       </li>
                       <li>
                         <Link to="Work" className='li'>Work</Link>
                       </li>
                       <li>
                         <Link to="Contact" className='li'>Contact</Link>
                       </li>
                     </ul>
                   </div>
                  
               </div>
               <div className="footer-bottom">
                   <div className="left-footer-bottom">
                       <p>Tunisia</p>
                   </div>
                   <div className="right-footer-bottom">
                       <p>2021. Ibtihel Ben Salah. ALL RIGHT RESERVED</p>
                   </div>
               </div>
           </div>
           <div className="footer-ticker">
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
               <div className="footer-ticker-item">&nbsp; - Ibtihel Ben Salah </div>
           </div>
        </div>
  )
}

export default Footer
