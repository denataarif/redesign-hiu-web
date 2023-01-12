import React from 'react'
import assets from '../../assets'
const Footer = () => {
  return (
    <div className='flex justify-between px-[68px] py-7 bg-Accent1 items-center'>
        <div>
            <p className='text-Accent3'>Copyright © 2023 Tigin Chaerul & Denata Arif </p>
        </div>
        <div className='flex justify-between'>
            <img src={assets.Instagram} className='mx-6 w-[76px] h-[76px]'/>
            <img src={assets.Youtube} className='mx-6 w-[76px] h-[76px]'/>
            <img src={assets.Facebook} className='mx-6 w-[76px] h-[76px]' />
            <img src={assets.Linkedin} className='mx-6 w-[76px] h-[76px]'/>
            <img src={assets.Twitter} className='mx-6 w-[76px] h-[76px]'/>

        </div>
    </div>
  )
}

export default Footer