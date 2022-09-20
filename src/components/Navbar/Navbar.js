import React from 'react';
import "./navbar.css";

import Logo from "../../assets/neutronLogo.png";

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BoltIcon from '@mui/icons-material/Bolt';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';

import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
    const navigation = useNavigate();
  return (
    <div className='navbar'>
        <div onClick={() => navigation("/")} className='navbar_left'>
            <div className='navbar_left_content'>
                <img className='navbar_left_img' src={Logo} />
                <div className='navbar_left_content_title'>
                    <h1 className='navbar_left_content_title_top'>Neutron</h1>
                    <h2 className='navbar_left_content_title_bottom'>.games</h2>
                </div>
            </div>
        </div>
        <div className='navbar_right'>
            <div className='navbar_right_content'>
                <div className='navbar_right_content_links'>
                    <Link className='navbar_right_content_link' to="" >Portfolio</Link>
                    <Link className='navbar_right_content_link' to="" >Games</Link>
                    <Link className='navbar_right_content_link' to="" >Blogs</Link>
                    <Link className='navbar_right_content_link' to="" >Community</Link>
                </div>
                <button className='navbar_right_content_donate'><OfflineBoltIcon fontSize='48px' className="donate_thunder" />Donate</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar