import React from 'react'
import Header from './Header'
import { links } from '../data'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import { FiMenu } from 'react-icons/fi'
function Navbar() {
  const [toggle, setToggle] = React.useState(false)
  const onToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className='w-full flex  justify-center space-x-3 sm:space-x-4 items-center py-4 dark:bg-stone-800'>
      <Header />
      <div className=' hidden sm:flex gap-4 mx-4 flex-1 bg-light capitalize text-sm text-stone-800 font-semibold dark:text-stone-100 dark:bg-dark'>
        {links.map((link)=>{
            const{id,to,text} = link;
         return   <Link to={to} key={id} className='flex-1'>{text}</Link>
        })}
      </div>

      <button id="menu-toggle" className="flex-1 sm:hidden sm:bg-stone-900  focus:outline-none" onClick={()=>onToggle()}><FiMenu className='w-7 h-70 font-bold text-stone-800  dark:text-stone-100 rounded text-2xl'/> </button>
        
      <DarkModeToggle />
    </div>
  )
}

export default Navbar
