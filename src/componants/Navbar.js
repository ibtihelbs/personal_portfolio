import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Assets/css/Navbar.css'
import gsap  from 'gsap';
import MenuIcon from '../Assets/menu.svg'
gsap.registerPlugin();
const Navbar = () => {
  const timeLine = gsap.timeline();
  let li1 = useRef(null);
  let li2 = useRef(null);
  let li3 = useRef(null);
  let li4 = useRef(null);
 
  
  useEffect(() => {
    timeLine.from([li1,li2,li3,li4], {
        opacity: 1,
        duration: 1,
        delay: .2,
        y: 20,
        stagger: {
            amount: .6
        }
    })
})
  
  return (
    <nav>
      <div id="Logo">ibtihel ben salah</div>
      <div className="toggle-menu">
        <img src={MenuIcon} alt="" />
      </div>
      <ul className="menu-items">
       <li ref={el => li1 =el}>
         <Link to="/" className='li'>Home</Link>
       </li>
       <li ref={el => li2 =el}>
        <Link to="About" className='li'>About</Link>
       </li>
       <li ref={el => li3 =el}>
        <Link to="Work" className='li'>Work</Link>
       </li>
       <li ref={el => li4 =el}>
        <Link to="Contact" className='li'>Contact</Link>
       </li>
      </ul>
    </nav>
  )}

export default Navbar
