import React, {useState} from 'react'
import './navbar.css';
import logo from '../../assets/logoipsum-292.svg';
import { Link } from 'react-scroll';
import contactImg from '../../assets/icons8-contact-48.png'
import menu from '../../assets/icons8-menu-64.png'
const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true}  smooth={true}
            offset={-100} duration={500}
            className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true}  smooth={true}
            offset={-50} duration={500}
            className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true}  smooth={true}
            offset={-50} duration={500}
            className='desktopMenuListItem'>Clients</Link>
            <Link activeClass='active' to='clients' spy={true}  smooth={true}
            offset={-50} duration={500}
            className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactImg} alt='' className='desktopMenuImg'/> 
            Contact Me
        </button>
        <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true}  smooth={true}
            offset={-100} duration={500}
            className='listItem'
            onClick={()=>{setShowMenu(!showMenu)}}>Home</Link>
            <Link activeClass='active' to='skills' spy={true}  smooth={true}
            offset={-50} duration={500}
            className='listItem'
            onClick={()=>{setShowMenu(!showMenu)}}>About</Link>
            <Link activeClass='active' to='works' spy={true}  smooth={true}
            offset={-50} duration={500}
            className='listItem'
            onClick={()=>{setShowMenu(!showMenu)}}>Clients</Link>
            <Link activeClass='active' to='clients' spy={true}  smooth={true}
            offset={-50} duration={500}
            className='listItem'
            onClick={()=>{setShowMenu(!showMenu)}}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true}  smooth={true}
            offset={-50} duration={500}
            className='listItem'
            onClick={()=>{setShowMenu(!showMenu)}}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
