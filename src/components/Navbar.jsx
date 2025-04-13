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
    <div className='w-full flex  items-center dark:bg-stone-800 dark:text-stone-100 p-4 mx-8'>
      <Header />
      <div className=' hidden sm:flex gap-4 mx-4 flex-1 capitalize text-sm text-stone-950 font-semibold dark:text-stone-100'>
        {links.map((link)=>{
            const{id,to,text} = link;
         return   <Link to={to} key={id}>{text}</Link>
        })}
      </div>

      <button id="menu-toggle" className="sm:hidden bg-stone-900 text-3xl focus:outline-none" onClick={()=>onToggle()}><FiMenu className='w-7 h-70 font-bold px-2 '/> </button>
        
      <DarkModeToggle />
    </div>
  )
}

export default Navbar
