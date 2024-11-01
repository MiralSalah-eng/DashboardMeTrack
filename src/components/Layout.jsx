import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  true
  const [openSidebar, setOpenSidebar] = useState(true)
  


  return (
    <div className='flex bg-[#F5F6FA] '>
     <Sidebar className='fixed top-0 left-0' openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} /> 

        <div className='w-full px-4 flex flex-col justify-between'>
           <div>
           <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
           <Outlet  />
           </div>
            <Footer />

            
        </div>
    </div>
  )
}

export default Layout