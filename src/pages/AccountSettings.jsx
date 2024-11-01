import React, { act, useState } from 'react';

// Icon Imports
import {  FaShieldAlt, FaUser } from 'react-icons/fa';
import { IoBriefcase, IoLocation, IoShareSocialSharp } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { PiCurrencyDollarFill } from 'react-icons/pi';
import { BiPlus } from 'react-icons/bi';
import { Button, InputAdornment, TextField } from '@mui/material';

// Image Imports
import profileimg from '../assets/profileimg.jpg';
import figma from '../assets/figma.png';
import photoshop from '../assets/photoshop.png';
import webflow from '../assets/webflow.png';
import framer from '../assets/framer.png';
import goodbye from '../assets/goodbye.png';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const AccountSettings = () => {
  // State to manage active tab
  const [active, setActive] = useState('Basic Info');

  const [accounts, setAccounts] = useState({
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: '',
  })

  const handleChange = (e) => {
    setAccounts({ ...accounts, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // You could save the accounts here by calling an API, for example.
    console.log("Saved social accounts:", accounts);
  };


  // Function to update active tab
  const handleSetActive = (tabName) => {
    setActive(tabName);
  };

  // Array of skills with icons
  const skills = [
    { name: "Figma", icon: figma },
    { name: "Webflow", icon: webflow },
    { name: "Photoshop", icon: photoshop },
    { name: "Framer", icon: framer },
  ];

  return (
    <>
      {/* Navigation Tabs */}
      <div className='flex justify-center gap-2 items-center mt-4 lg:gap-8'>
        <span
          onClick={() => handleSetActive('Basic Info')}
          className={`flex cursor-pointer rounded-tl-md rounded-tr-md p-2 gap-2 items-center text-base font-medium ${
            active === 'Basic Info' ? 'text-white bg-slate-600' : 'text-gray-500'
          }`}
        >
          <FaUser /> <span className='hidden lg:block'>Basic Info</span>
        </span>

        <span
          onClick={() => handleSetActive('Security')}
          className={`flex cursor-pointer rounded-tl-md rounded-tr-md p-2 gap-2 items-center text-base font-medium ${
            active === 'Security' ? 'text-white bg-slate-600' : 'text-gray-500'
          }`}
        >
          <FaShieldAlt /> <span className='hidden lg:block text-sm lg:text-base'>Security</span>
        </span>

        <span
          onClick={() => handleSetActive('Social accounts')}
          className={`flex cursor-pointer rounded-tl-md rounded-tr-md p-2 gap-2 items-center text-base font-medium ${
            active === 'Social accounts' ? 'text-white bg-slate-600' : 'text-gray-500'
          }`}
        >
          <IoShareSocialSharp /> <span className='hidden lg:block text-sm lg:text-base'>Social accounts</span>
        </span>

        <span
          onClick={() => handleSetActive('Delete account')}
          className={`flex cursor-pointer rounded-tl-md rounded-tr-md p-2 gap-2 items-center text-base font-medium ${
            active === 'Delete account' ? 'text-white bg-slate-600' : 'text-gray-500'
          }`}
        >
          <MdDelete /> <span className='hidden lg:block text-sm lg:text-base'>Delete account</span>
        </span>
      </div>
      {/* END Navigation Tabs */}

      <div className='bg-white overflow-hidden rounded-md w-full mb-6'>
        {/* Content Section Based on Active Tab */}
        <div className='w-full text-white bg-slate-600 p-4 md:p-8'>
              <h3 className='text-base md:text-2xl font-bold'>{active}</h3>
              <p className='text-xs md:text-base'>
              {
                  active === 'Basic Info' ? (
                    <span>Manage your personal details, including name, email, and profile information.</span>
                  ) : active === 'Security' ? (
                    <span>Update your password and configure two-factor authentication for added security.</span>
                  ) : active === 'Social accounts' ? (
                    <span>Connect and manage your social media accounts linked to your profile.</span>
                  ) : active === 'Delete account' ? (
                    <span>Permanently delete your account and remove your data.</span>
                  ) : null
              }
              </p>
            </div>

        {active === 'Basic Info' && (
          <>        

            {/* Basic Info Content */}
            <div className='grid px-4 md:px-8 py-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
              {/* Profile Image Section */}
              <img className='rounded-md w-full' src={profileimg} alt="profile-avatar" />


              {/* Profile Details Section */}
              <div className='text-sm col-span-2 md:text-base px-5 text-gray-600'>
                <h2 className='font-semibold text-base md:text-xl text-gray-700 mt-2'>Alex Dave</h2>
                <p className='text-xs text-gray-500 pb-4 border-b'>UI UX Designer</p>
                <h3 className='font-bold my-4'>Overview</h3>
                <p className='text-sm'>
                  A UI/UX designer is a creative professional responsible for crafting intuitive and engaging digital experiences. They combine the principles of user interface (UI) design, focusing on the look and feel, with user experience (UX) design, which emphasizes how users interact with a product.
                </p>

                {/* Additional Profile Info */}
                <div className='mt-5 w-full flex flex-wrap justify-between md:justify-start gap-4 md:items-start text-sm'>
                  <p className='flex flex-col md:flex-row justify-center md:items-center gap-2 mb-2'>
                    <PiCurrencyDollarFill className='text-green-600 text-lg' />
                    <span className='font-semibold'>Hour rate:</span>
                    <span className='text-gray-700'>$40</span>
                  </p>

                  <p className='flex flex-col md:flex-row justify-center md:items-center gap-2 mb-2'>
                    <IoBriefcase className='text-blue-600 text-lg' />
                    <span className='font-semibold'>Experience:</span>
                    <span className='text-gray-700'>5 years</span>
                  </p>

                  <p className='flex flex-col md:flex-row justify-center md:items-center gap-2'>
                    <IoLocation className='text-cyan-500 text-lg' />
                    <span className='font-semibold'>Location:</span>
                    <span className='text-gray-700'>USA</span>
                  </p>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-2 py-4'>
                  <Button disableElevation sx={{ textTransform: "none", backgroundColor: '#626bf7' }} variant='contained' size='small'>
                    Upload new image
                  </Button>
                  <Button disableElevation sx={{ textTransform: "none", color: '#626bf7', borderColor: '#626bf7' }} variant='outlined' size='small'>
                    Edit info
                  </Button>
                </div>
              </div>

              {/* Skills Section */}
              <div className='w-full bg-slate-100 rounded-md p-5 flex flex-col justify-between'>
                <div>
                  <h2 className='text-sm md:text-base font-semibold text-center mb-2'>Skills</h2>
                  <ul className='flex gap-2 flex-wrap'>
                    {skills.map((skill, index) => (
                      <li key={index} className='flex items-center gap-2 py-1 px-3 bg-white rounded-full shadow-sm'>
                        <img className='w-4' src={skill.icon} alt={`${skill.name} icon`} />
                        <span className='text-sm'>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add Skill Button */}
                <Button disableElevation 
                  sx={{ textTransform: "none", color: '#626bf7', width: "fit-content", borderColor: '#626bf7', borderRadius: "50px", border: "0.5px dashed" }} 
                  variant='outlined' size='small' startIcon={<BiPlus />}>
                  Add skill
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Security Tab Content */}
        {active === 'Security' && (
          <div className='bg-white w-full p-4 lg:p-8 '>
                <h4 className='text-gray-800 font-semibold mb-4 text-sm md:text-lg'>Chanage Password</h4>
            <div className='flex flex-wrap gap-3'>
                <TextField sx={{width:"fit-content",}} type='password' label="Current Password" variant="outlined" />
                <TextField sx={{width:"fit-content"}} type='password' label="New Password" variant="outlined" />
                <TextField sx={{width:"fit-content"}} type='password' label="Confirm Password" variant="outlined" />
                <Button disableElevation variant='contained'>Save Changements</Button>
            
            </div>
           
           
          </div>
        )}

        {active === 'Social accounts' && (
              <div className='bg-white w-full p-4 lg:p-8 '>
              <h4 className='text-gray-800 font-semibold mb-4 text-sm md:text-lg'>Add accounts</h4>
          <div className='flex flex-wrap gap-3'>
              <TextField 
                 slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <BsTwitter />
                      </InputAdornment>
                    ),
                  },
                }}
              
              sx={{width:"fit-content",}} type='text' label="Twitter" variant="outlined" />
              <TextField
              slotProps={{
                input:{
                  startAdornment:(
                    <InputAdornment position="start">
                      <BsLinkedin />
                    </InputAdornment>
                  )
                }
              }}
              
              sx={{width:"fit-content"}} type='text' label="LinkedIn" variant="outlined" />
              <TextField
                slotProps={{
                  input:{
                    startAdornment:(
                      <InputAdornment position="start">
                        <BsInstagram />
                      </InputAdornment>
                    )
                  }
                }}
              
              sx={{width:"fit-content"}} type='text' label="Instagram" variant="outlined" />
              <Button disableElevation variant='contained'>Save Info</Button>
          
          </div>
         
         
        </div>
        )} 
        
        
        {active === 'Delete account' &&(
          <div className='p-4 w-full lg:p-8'>
          <h3 className='text-base mb-3 text-gray-800 font-semibold lg:text-xl'>Delete My account</h3>
          <div className='flex md:flex-wrap lg:flex-nowrap justify-between'> 
              <div className='flex w-full flex-col gap-5'>
              <p className='w-full text-gray-500 text-sm lg:text-base'>
              Can you please share to us what was not working? We are fixing bugs as soon as we spot them. If something slipped through our fingers, we'd be so grateful to be aware of it and fix it.</p>
              <TextField
              fullWidth
              id="outlined-textarea"
              rows={6}
              label="Your thoughts"
              placeholder="Your explanation is entirly optional ..."
              multiline
            />
              <span className='flex gap-3'>
              <Button disableElevation variant='contained'>Confirm</Button>
              <Button disableElevation variant='outlined'>Back</Button>
              </span>
              </div>


          <div className='hidden md:flex md:w-full md:justify-center'>
          <img  className=' md:w-[400px]' src={goodbye} alt='delete account'/>

          </div>

          </div>

          </div>

        ) }
      </div>
    </>
  );
};

export default AccountSettings;
