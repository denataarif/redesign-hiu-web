import React from 'react'
import assets from '../../assets'

const Navbar = () => {
  return (
    <div className="Navbar flex justify-between px-[68px] py-7 bg-Secondary1">
        <div className="">
          <img src={assets.Logohiu} alt="Logo"/>
        </div>
        <div className="flex justify-between items-center text-Primer1">
          <p className='px-6'>Home</p>
          <p className='px-6'>HIU News</p>
          <select name="Tutorial" className='bg-transparent px-6'>
            <option>Tutorial</option>
            <option className='text-blk1'>Profile</option>
            <option className='text-blk1'>2020</option>
            <option className='text-blk1'>2021</option>
            <option className='text-blk1'>2022</option>
          </select>
          <p className='px-6'>Kepengurusan</p>
        </div>
      </div>
  )
}

export default Navbar