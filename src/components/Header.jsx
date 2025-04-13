import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <h2 className='flex-1 text-left text-2xl text-stone-900 font-bold px-4 dark:text-stone-100'><Link to="/">M.Isaie</Link></h2>
  )
}

export default Header