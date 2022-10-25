import { Link } from "react-router-dom";
import '../Assets/css/Navbar.css'
import MenuIcon from '../Assets/menu.svg'
const Navbar = () => {
  return (
    <nav>
      <div id="Logo"></div>
      <div className="toggle-menu">
        <img src={MenuIcon} alt="" />
      </div>
      <ul className="menu-items">
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
    </nav>
  )}

export default Navbar
