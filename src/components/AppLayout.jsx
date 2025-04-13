import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function AppLayout() {
  return (
    <div className='w-screen h-screen flex flex-col space-y-8 bg-white text-black dark:bg-black dark:text-white my-0 mx-auto px-8'>
      <Navbar />
      <main className='w-full min-h-full bg-stone-100 text-stone-700 dark:bg-stone-700 dark:text-stone-100 mx-auto'>
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}

export default AppLayout
