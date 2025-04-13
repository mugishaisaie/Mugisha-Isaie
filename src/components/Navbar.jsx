import React, { useState } from 'react'
import Header from './Header'
import { links } from '../data'
import { Link, NavLink } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import { FiMenu, FiX } from 'react-icons/fi'
function Navbar() {
  const [toggle, setToggle] =useState(false)
  const onToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className='w-full flex sticky top-0 z-50 bg-white shadow-md  justify-center space-x-3 sm:space-x-4 items-center py-4 dark:bg-stone-800'>
      <Header />
      <div className=' hidden text-left sm:flex gap-4 mx-4 flex-1 bg-light capitalize text-sm text-stone-800 font-semibold dark:text-stone-100 dark:bg-dark'>
        {links.map((link)=>{
            const{id,to,text} = link;
         return   <NavLink to={to} key={id} className={({isActive})=> isActive ?'text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold transition-all duration-300 ease-in-out': 'font-semibold hover:text-blue-500'}>{text}</NavLink>
        })}
      </div>

      <button id="menu-toggle" className="flex-1 sm:hidden sm:bg-stone-900  focus:outline-none" onClick={()=>onToggle()}><FiMenu className='w-7 h-70 font-bold text-stone-800  dark:text-stone-100 rounded text-2xl'/> </button>
        
      <DarkModeToggle />

      {toggle && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          {/* Modal Box */}
          <div className="bg-white w-11/12 max-w-sm p-6 rounded-xl relative shadow-lg text-center space-y-6">
            {/* Close Button */}
            <button
              onClick={onToggle}
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
            >
              <FiX />
            </button>
            <div className='w-auto flex flex-col text-xm sm:hidden gap-4 mx-4  capitalize text-sm text-stone-800 font-semibold'>
        {links.map((link)=>{
            const{id,to,text} = link;
         return   <NavLink to={to} key={id} className={({isActive})=> isActive ?'text-blue-600 w-fit  border-b-2 border-blue-600 pb-1 font-semibold transition-all duration-300 ease-in-out'
      : 'font-semibold hover:text-blue-500 w-fit '} onClick={onToggle}>{text}</NavLink>
        })}
      </div>
            
          </div>
        </div>}
    </div>
  )
}

export default Navbar
