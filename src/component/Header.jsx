/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome, 
    HiMagnifyingGlass, 
    HiStar, 
    HiPlayCircle, 
    HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItem from './Headeritem';

function Header() {
    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            name: 'HOME',
            icon:HiHome
        },
        {
            name: 'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon:HiPlus
        },
        {
            name: 'ORIGINALS',
            icon:HiStar
        },
        {
            name: 'MOVIES',
            icon:HiPlayCircle
        },
        {
            name: 'SERIES',
            icon:HiTv
        },
    ]
  return (
    <div className='flex item-center justify-between p-5'>
        <div className='flex gap-8 item-center'>
       <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>

        <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>

        <div className='flex md:hidden gap-5' onClick={()=>setToggle(!toggle)}>
            {menu.map((item,index)=>index<3&&(
                <HeaderItem name={''} Icon={item.icon} />
             ))}
            <div className='md:hidden mt-3'>
                <HeaderItem name={''} Icon={HiDotsVertical} />
                {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                {menu.map((item,index)=>index>2&&(
                    <HeaderItem name={item.name} Icon={item.icon} />
                ))}
                </div>:null}
            </div>
        </div>
       </div>
       <img src='https://static-00.iconduck.com/assets.00/user-avatar-glad-icon-256x255-cbmmpmut.png' className='w-[40px] h-[40px] rounded-full'/>
    </div>
  )
}

export default Header