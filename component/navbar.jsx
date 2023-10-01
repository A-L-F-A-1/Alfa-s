import React,{ useState } from 'react';
import { FaBars ,FaTimes } from 'react-icons/fa';
import { AiOutlineUser ,AiOutlineShoppingCart} from 'react-icons/ai';
import  logo from '../img/logo.png';
import './style/navbar.css';

const Navbar = () => {
  const [click , setClick ] = useState(false);  

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
        <ul className={`nav-menu ${click ? 'active' : ''}`}>
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/">Contact Us</a></li>
            <li className="nav-item"><a href="/"><AiOutlineUser size={20}/></a></li>
            <li className="nav-item"><a href="/"><AiOutlineShoppingCart/></a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: 'white' }} />) : (<FaBars size={30} style={{ color: 'white' }} />)}
        </div>
      </div>
    </>
  );
};

export default Navbar;