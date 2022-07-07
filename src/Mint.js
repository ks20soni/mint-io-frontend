import React from 'react'
import LandingPageMainSec from './Components/LandingPage/LandingPage'
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'
import Feed from './Components/Feed/Feed'
import Widget from './Components/Widget/Widget'
import './Mint.css';

function Mint() {
  return (
    <div className='mint'>
      <Header/>
      <div className='mint__contents'>
        <div className='mint__content'>
        <SideBar/>
        <Feed/>
        <Widget/>
        </div>
      </div>
    </div>
  )
}

export default Mint;
