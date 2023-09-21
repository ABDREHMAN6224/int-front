import React from 'react'
import {FaChevronDown,FaTelegram} from "react-icons/fa"
import { useThemeContext } from '../themeContext'
const Navbar = () => {
    const {theme,handleTheme}=useThemeContext();
    
  return (
    <div className='navbar-container'>
        <img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" className='logo' alt="" srcset="" />
        <div className="nav-btn-container">
            <button className='btn'>inr <FaChevronDown></FaChevronDown></button>
            <button className='btn'>btc <FaChevronDown></FaChevronDown></button>
            <button className='btn'>buy btc</button>
        </div>
        <div className="link-container">
            <div className="circle-nav">
                <p>13</p>
            </div>
            <button className="telegram-btn btn">
                <span>
                    <FaTelegram/>
                </span>
                Connect Telegram
            </button>
            <button className="switch">
                <div className="slider" style={theme=="dark"?{right:"4px"}:{left:"4px"}} onClick={handleTheme}></div>
            </button>
        </div>
    </div>
  )
}

export default Navbar