import React, { useState } from 'react'
import Dashboard from '../assets/images/List-Menu.svg'
import Market from '../assets/images/trade.svg'
import Wallet from '../assets/images/Group.svg'
import Staking from '../assets/images/donate.svg'
import Loans from '../assets/images/protocols.svg'
import Settings from '../assets/images/setting.svg'
import user from '../assets/images/user.svg'
import LogOut from '../assets/images/logout.svg'


export default function Sidemenu() {
  const [isToggled, setIsToggled] = useState(false);

    // Function to handle button click
    const handleToggle = () => {
      setIsToggled(!isToggled);
    };
  return (
    <>
    <button className='btn btn-dark btn-sm clchn ms-3 d-inline-block d-sm-none' onClick={handleToggle}> <span class="navbar-toggler-icon"></span></button>
     <div className={`sidemenu fixed-top ${isToggled ? 'active' : ''}`} >

     
        <ul>
            <li><a href='@!' className='active'> <img src={(Dashboard)}></img> <span>Dashboard</span></a></li>
            <li><a href='@!'> <img src={(Market)}></img> <span>Market</span> </a></li>
            <li><a href='@!'> <img src={(Wallet)}></img> <span>Wallet</span></a></li>
            <li><a href='@!'> <img src={(Staking)}></img> <span>Staking</span></a></li>
            <li><a href='@!'> <img src={(Loans)}></img> <span>Loans</span></a></li>
            <li><a href='@!'> <img src={(Settings)}></img> <span>Settings</span></a></li>
            <li><a href='@!'> <img src={(user)}></img> <span>Profile</span></a></li>
            <li className='mt-auto'><a href='@!'> <img src={(LogOut)}></img> <span>Log Out</span></a></li>
        </ul>
     </div>
    </>
  )
}
