import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineBell, HiOutlineChevronDown, HiOutlineCog, HiOutlineMail, HiOutlineMenu, HiSearch } from 'react-icons/hi'
import profilePic from '../assets/profileimg.jpg'
import IconCard from './IconCard'
import { inboxData, notificationsData } from '../data'


const Header = ({openSidebar , setOpenSidebar}) => {


  const [showNotification,setShowNotification] = useState(false)
  const [showInbox,setShowInbox] = useState(false)

   // References for notifications and inbox
   const notificationRef = useRef(null);
   const inboxRef = useRef(null);

  const handlemenu = () => {
    setOpenSidebar (!openSidebar)
  }

  const handleNotificationClick = () => {
    setShowNotification(!showNotification)
    setShowInbox(false)
    
  }
  const handleInboxClick = () => {
    setShowInbox(!showInbox)
    setShowNotification(false)
  }
  


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current && !notificationRef.current.contains(event.target) &&
        inboxRef.current && !inboxRef.current.contains(event.target)
      ) {
        setShowNotification(false);
        setShowInbox(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  return (
    <div className='w-full flex justify-between items-center md:pr-6 pl-2 m px-2 py-2 mt-2 bg-white rounded-md'>

        {/* menu and search */}
      <div className='fixed top-5 md:top-0 bg-white z-50 md:relative flex space-x-2 items-center'>
        <button 
        onClick={handlemenu}
        className='flex sm:hidden'>
        <IconCard 
        Icon={HiOutlineMenu} 
        count = {false} 
        />
        </button>
            
          <div className='hidden text-[#8B8C8F]  sm:flex border border-[#d5d5d5]/40 py-1 rounded-xl justify-between px-4 
          bg-[#FAFAFA] items-center'>
            <input className='bg-transparent focus:outline-none  text-sm ' type='text' placeholder='Search...' />
            <HiSearch />
       
          </div>
      </div>

      {/* right side */}

     <div className='flex  w-full justify-end items-center gap-6'>
        <div className='flex ml-8 md:ml-0 items-center space-x-2'>
          <IconCard   Icon={HiSearch} count = {false} />

                {/* Inbox */}
                <div ref={inboxRef}>
            <IconCard
              data={inboxData}
              handleClick={handleInboxClick}
              showInbox={showInbox}
              Icon={HiOutlineMail}
              num={inboxData.length}
              title='Inbox'
            />
          </div>

          {/* Notification */}
          <div ref={notificationRef}>
            <IconCard
              data={notificationsData}
              handleClick={handleNotificationClick}
              showNotification={showNotification}
              Icon={HiOutlineBell}
              num={notificationsData.length}
              title='Notifications'
            />
          </div>
         
          </div>

      {/* Avatar */}
      <div className='flex space-x-1 items-center'>
        <img src={profilePic} alt="user-avatar" className='w-8 h-8  rounded-full mr-2' />

          <div className='flex items-center gap-3'>
            <div className='hidden md:flex text-gray-700  flex-col gap-0  '>
              <h6 className='text-sm font-semibold'>Alex Dave</h6>
             <span className='text-xs'>Admin</span>
           </div>
           
        <span className='p-1 rounded-full border flex items-center cursor-pointer justify-center '>
        <HiOutlineChevronDown className='w-3 h-3 text-gray-600 ' />
        </span>
      </div>
     </div>
     </div>

    </div>
  )
}

export default Header