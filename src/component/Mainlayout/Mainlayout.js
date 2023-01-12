import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'
const Mainlayout = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <div id='main' className='flex-grow'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Mainlayout