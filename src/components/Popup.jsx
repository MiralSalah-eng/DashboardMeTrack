import React from 'react'
import { HiCheckCircle } from 'react-icons/hi'

const Popup = ({data, title}) => {
  
  return (
    <>
   <div className='absolute flex flex-col space-y-2 min-w-[300px] h-fit 
   z-10 top-[25px] right-2 py-2 px-2  text-slate-700 bg-white 
   shadow-lg rounded-lg'>
        <h4 className='font-bold  text-base'>{title}</h4>
        
       {data.map((item,index)=>(
       <>
         <div key={index} className='flex space-x-2 items-start  py-2 px-2 rounded-md hover:bg-slate-50 '>
            {item.icon && (<div className='text-[#34d399]' >{item.icon()}</div>
)}
       <div className='flex flex-col space-y-1 w-full '>
            <h6 className='text-sm font-semibold  text-slate-700 leading-[1.1rem]'>{item.title} 
                {item.subject}
            </h6>
            <p className='font-normal text-slate-600 text-xs'>{item.message}</p>
          {
            item.sender && (
                <p className=' flex items-center justify-between text-xs
                text-slate-500 leading-none'>
                   <span className='mt-2 flex gap-2 items-center'>
                   <img className='w-6 h-6 rounded-full object-cover' src={item.src} />
                   {item.sender}
                   </span>
                   <span className='mt-2'>{item.time}</span>
               </p>
            )
          }
        </div>
       </div>
        <div className='border-b w-full'></div>
       </>

       ))}
      </div>
  </>
  )
}

export default Popup