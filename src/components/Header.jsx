import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <h2 className='flex-1  text-xl md:text-2xl text-stone-700 font-bold dark:text-stone-100 md:ml-10'><Link to="/">M.Isaie</Link></h2>
  )
}

export default Header