import { useState } from 'react';
import avatar from '../assets/avatar.png';
import { clientsDataList } from '../data';
import { HiOutlineVideoCamera , HiOutlinePhone, HiOutlineInformationCircle } from "react-icons/hi2";
import { RiAttachment2 } from "react-icons/ri";
import { FiSend } from "react-icons/fi";



const truncateMessage = (message, maxLength) => {
  if (message.length > maxLength) {
    return message.slice(0, maxLength) + '...';
  }
  return message;
};

const Messages = () => {
  const [cureentIndex, setCurrentIndex] = useState(0);

  const users = clientsDataList.data;
  const messageMaxLength = 20; // Adjust the number of characters to truncate the message
  
  return (
    <div className='flex min-h-screen items-start gap-6 py-4'>
      
      {/* Chat List */}
      <div className='bg-white hidden md:block w-72 rounded-md p-4'>
        <div>
          <h2 className='text-lg font-semibold text-gray-800'>Chats</h2>
          <ul>
            {users.map((user, index) => (
              <li
                onClick={() => setCurrentIndex(index)}
                key={index}
                className={`${index === cureentIndex ? 'bg-[#626bf7] hover:bg-[#626bf7] text-white' : 'hover:bg-slate-100'} text-gray-800 flex gap-3 items-center my-2 p-2 rounded-md cursor-pointer`}
              >
                {user.image ? 
                <img className='w-6 h-6 object-cover rounded-full' src={user.image } alt={user.client}/>
                : 
                <img className='w-6 h-6 object-cover rounded-full' src={avatar} alt="avatar" />}
                <span className='text-sm flex-1 font-semibold'>
                  {user.client}
                  <p className='flex justify-between font-normal'>
                    <span className={`${index === cureentIndex && 'text-white'} text-xs flex-1 text-gray-600`}>
                      {truncateMessage(user.messageContent, messageMaxLength)}
                    </span>
                    <span className={`${index === cureentIndex && 'text-white'} text-xs text-gray-600`}>{user.time}</span>
                  </p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Messages List and Typing Area */}
      <div className='bg-white flex-1 rounded-md p-4 flex flex-col'>
        
        {/* Active User Info */}
       <div className='flex justify-between items-center border-b pb-3'>
       <div className='flex gap-2 items-center'>
          {users[cureentIndex].image ? 
          <img src={users[cureentIndex].image}  className='w-9 h-9 object-cover rounded-full' alt={users[cureentIndex].client}/>
          : <img className='w-9 h-9 object-cover rounded-full' src={avatar} alt="avatar" />}
          <span>
            <h2 className='text-lg font-semibold text-gray-800'>{users[cureentIndex].client}</h2>
            <p className={`${users[cureentIndex].activeStatus ? 'text-green-600' : 'text-slate-500'} flex gap-2 items-center text-sm`}>
              <span className={`${users[cureentIndex].activeStatus ? 'bg-green-600' : 'bg-slate-500'} w-2 h-2 block rounded-full`}></span>
              {users[cureentIndex].activeStatus ? 'Online Now' : 'Offline'}
            </p>
          </span>   
        </div>
            <div className='flex gap-4 text-gray-600 justify-center px-4'>
            <HiOutlinePhone className='md:w-6 md:h-6 w-4 h-4 hover:text-[#626bf7] cursor-pointer' />
            <HiOutlineVideoCamera className='md:w-6 md:h-6 w-4 h-4 hover:text-[#626bf7] cursor-pointer' />
            <HiOutlineInformationCircle className='md:w-6 md:h-6 w-4 h-4 hover:text-[#626bf7] cursor-pointer' />
            </div>
       </div>

        {/* Messages Container */}
        <div className='mt-4 flex-grow overflow-y-auto'>
          <ul className='flex flex-col gap-4  h-[430px]'>
            {users[cureentIndex].messages.map((msg, index) => (
              <li
                key={index}
                className={`p-4 rounded-md max-w-xs ${msg.id % 2 === 0 ? 'bg-[#626bf7] text-white self-end' : 'bg-gray-100 self-start'}`}
              >
                <p>{msg.message}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Typing Area */}
        <div className='bg-slate-100 w-full h-20 p-2 rounded-md mt-4 flex justify-between 
        items-center selection:border selection:border-[#626bf7]'>
          <input
            type='text'
            placeholder='Type a message...'
            className='w-full bg-transparent p-2 rounded-md outline-none '
          />
            <div className='flex gap-2  text-gray-600 px-4'>
              <span className='w-8 h-8 rounded-full flex items-center justify-center bg-white hover:text-white hover:bg-[#626bf7]'>
              <FiSend/>
              </span>
              <span className='w-8 h-8 rounded-full flex items-center justify-center bg-white hover:text-white hover:bg-[#626bf7]'>
              <RiAttachment2 />
              </span>
           
            </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
