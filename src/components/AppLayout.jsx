import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function AppLayout() {
  return (
    <div className='min-w-screen min-h-screen bg-white text-stone-800 dark:bg-stone-900 dark:text-white my-0 mx-auto px-8'>
      <Navbar />
      <main className='w-full h-full mx-auto bg-white text-stone-800 dark:bg-stone-800 '>
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}

export default AppLayout
