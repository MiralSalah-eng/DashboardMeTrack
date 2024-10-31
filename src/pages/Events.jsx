import { Button } from '@mui/material'
import React from 'react'
import { HiOutlineVideoCamera, HiPlus } from 'react-icons/hi'
import { EventsList } from '../data'
import { TbClock } from 'react-icons/tb'

const Events = () => {



  return (
    <div className='p-2 md:p-5 flex flex-col gap-6'>
      <h1 className='text-base pb-2 md:text-xl text-gray-800 font-bold md:pb-4 border-b border-slate-300'>Events Managemnets</h1>
      <div>
        <Button
        variant='contained'
        startIcon={<HiPlus />}
        sx={{textTransform:'none', fontFamily:'DM Sans', backgroundColor:'#626bf7', paddingX:"20px"}}
        size="small" 
        disableElevation
      
        >
          
          New Event
        </Button>

        {/* Search bar */}
      </div>

       {/* Events */}

       {EventsList.map((ev,index)=> (
          <div key={index} className='flex flex-col gap-3 md:flex md:flex-row md:gap-6'>
          
            <div className='flex w-full flex-col mb-2 md:mb-0 bg-slate-200/55 p-4 rounded-md md:w-32 md:min-h-40  '>
              <h3 className='text-base font-semibold text-gray-800 md:text-xl'>{ev.date}</h3>
              <p className='text-sm text-gray-500'>{ev.day}</p>
            </div>
          

            <div className='w-full flex flex-col gap-2'>
              {/* card */}
              {ev.events.map((evv,index)=> (
              <div key={index} className='w-full p-3 border bg-white rounded-md flex gap-3'>
                <div className='md:h-14 border-2 rounded-md' style={{ borderColor: `${evv.color}` }}></div>
                <div className='flex flex-col'>
                  <h4 className='text-sm md:text-base font-semibold text-gray-700 '>{evv.title}</h4>
                  <div className='flex flex-col md:flex md:flex-row justify-between md:gap-5'>
                    <span className='flex gap-2 items-center text-sm md:text-sm text-slate-600 py-2'>
                      <img className='w-6 h-6 object-cover rounded-full' src={evv.image} alt=''/>
                      {evv.username}
                    </span>

                    <span className='flex gap-1 items-center text-gray-500 text-sm'>
                      <TbClock />
                      <span>{evv.clock}</span>
                    </span>


                    <span className='flex gap-1 items-center text-gray-500 text-sm'>
                      <HiOutlineVideoCamera/>
                      <span>{evv.type}</span>
                    </span>
                  </div>
                </div>

              </div>

              ))}
              
              {/* card end */}
            </div>

          </div>


       ))}




    
    </div>
  )
}

export default Events