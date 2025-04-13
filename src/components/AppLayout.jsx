import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function AppLayout() {
  return (
    <div className='w-screen h-screen bg-white text-stone-800 dark:bg-stone-900 dark:text-white my-0 mx-auto px-8'>
      <Navbar />
      <main className='w-full min-h-ful mx-auto'>
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}

export default AppLayout
