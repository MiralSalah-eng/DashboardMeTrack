import { useState } from "react";
import Popup from "./Popup";
import { HiSearch } from "react-icons/hi";

const IconCard = ({handleClick, data , showNotification,showInbox,title,  Icon, num, color}) => {

  const [numOfItems,setNumOfItems] = useState(num)

  return (
    <div
    className={`relative w-6 h-6 rounded-md sm:w-8 sm:h-8 sm:rounded-xl flex items-center justify-center border text-gray-500 cursor-pointer ${Icon === HiSearch ? 'sm:hidden' : ''}`}
    onClick={()=>{
    handleClick()
    setNumOfItems('')
  }}
   >
      <Icon className={`w-4 h-4 sm:w-5 sm:h-5`} 
      style={{ color: color }}
       />
   
      {numOfItems && (
         <span className='absolute top-[-7px] right-[-5px] w-4 h-4 flex justify-center items-center
         text-white text-[10px] font-semibold rounded-full bg-[#f76265] '>{num}</span>   
      )}

      {(showNotification || showInbox) && (
        <Popup data={data} num={num} title={title}/>

      )}
     
     </div>
  )
}

export default IconCard