// Importing required icons, assets, and components
import { IoBriefcase, IoLocation, IoStar } from 'react-icons/io5';
import profileimg from '../assets/profileimg.jpg';
import figma from '../assets/figma.png';
import photoshop from '../assets/photoshop.png';
import webflow from '../assets/webflow.png';
import framer from '../assets/framer.png';
import { PiCurrencyDollarFill } from 'react-icons/pi';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { HiCurrencyDollar, HiFolder, HiUser } from 'react-icons/hi';
import { notifications, earnedData, profileData, projectData, revenuData } from '../data';
import Example from '../components/Example';

const Profile = () => {

    // Skills data array
    const skills = [
        { name: "Figma", icon: figma },
        { name: "Webflow", icon: webflow },
        { name: "Photoshop", icon: photoshop },
        { name: "Framer", icon: framer },
    ];

 

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mt-6'>
            
            {/* Profile Sidebar */}
            <div className='bg-white max-w-full lg:col-span-1 flex flex-col gap-4 rounded-lg overflow-hidden'>
            
                {/* Profile Header */}
                <div className='flex flex-col p-3 md:flex-row gap-4 justify-between md:p-5 flex-wrap bg-slate-200 items-center'>
                    {/* Profile Info */}
                    <div className='flex flex-col items-center text-center'>
                        <img className='w-20 rounded-full' src={profileimg} alt="profile-avatar" />
                        <h2 className='font-semibold text-base md:text-xl text-gray-700 mt-2'>Alex Dave</h2>
                        <p className='text-xs text-gray-500'>UI UX Designer</p>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex flex-col md:flex-row gap-2'>
                        <Button 
                            variant="contained" 
                            size="small" 
                            disableElevation
                            sx={{
                                backgroundColor:'#626bf7', 
                                paddingX:"20px", 
                                alignSelf: 'start',
                                
                            }}
                        >
                            Edit my profile
                        </Button>
                        
                        <Button 
                            variant="outlined" 
                            size="small" 
                            disableElevation
                            sx={{
                                color:'#626bf7', 
                                paddingX:"20px", 
                                alignSelf: 'start',
                                
                            }}
                        >
                            Logout
                        </Button>
                    </div>
                </div>

                {/* Overview Section */}
                <div className='text-sm md:text-base pt-5 px-5 text-gray-600'>
                    <h3 className='font-bold mb-2'>Overview</h3>
                    <p className='text-sm'>A UI/UX designer is a creative professional responsible for crafting intuitive and engaging digital experiences. They combine the principles of user interface (UI) design, focusing on the look and feel, with user experience (UX) design, which emphasizes how users interact with a product.</p>
                </div>

                {/* Additional Profile Details */}
                <div className='pt-0 pb-5 px-5 flex flex-col gap-5'>
                    
                    {/* Profile Metrics */}
                    <div className='p-5 bg-slate-100 w-full flex flex-wrap justify-between md:justify-start gap-4 md:items-start rounded-md text-sm shadow-sm'>
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
                        <p className='flex flex-col md:flex-row justify-center md:items-center gap-2'>
                            <IoStar className='text-yellow-400 text-lg' />
                            <span className='font-semibold'>Rating:</span>
                            <span className='text-gray-700'>5.0 (24 reviews)</span>
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className='w-full bg-slate-100 rounded-md p-5'>
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
                </div>
            </div>

            {/* Main Content Section */}
            <div className='p-5 lg:col-span-2 flex flex-col'>

                {/* Statistics Heading */}
                <h2 className='font-bold text-base md:text-lg text-gray-600'>Your Statistics</h2>

                {/* Statistics Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 mt-5'>
                    {/* Card for Clients */}
                    <Link to='/clients'>
                        <Card 
                            icon={HiUser}
                            title="New Clients"
                            value={30}
                            data={profileData}
                            dataKey="clients"
                            color="#0891b2"
                            text="text-[#0891b2]"
                            percentageChange="4.5% of last month"
                        />
                    </Link>

                    {/* Card for Revenue */}
                    <Link to='/'>
                        <Card 
                            icon={HiCurrencyDollar}
                            title="Total earned"
                            value={`$16+`}
                            data={earnedData}
                            dataKey={`$`}
                            color="#34d399"
                            text="text-[#34d399]"
                            percentageChange="2.28% of last week"
                        />
                    </Link>

                    {/* Card for Projects */}
                    <Link to='/projects'>
                        <Card 
                            icon={HiFolder}
                            title="Total Projects"
                            value={37}
                            data={projectData}
                            dataKey="project"
                            color="#D1ACD1"
                            text="text-[#D1ACD1]"
                            percentageChange="0.85% of last month"
                        />
                    </Link>   
                </div>

                {/* Notifications Section */}
                <div className='grid grid-cols-1 md:grid-cols-4 mt-6 gap-6'>
                    <div className='bg-white md:col-span-2 w-full rounded-md p-5'>
                        <h2 className='font-bold text-base md:text-lg text-gray-600'>Notifications</h2>
                        <div className='mt-6'>
                            {notifications.map((notification, index) => (
                                <div key={index} className='flex gap-4 mb-4'>
                                    <img className='w-8 h-8 rounded-full object-cover' src={notification.image} alt='notification'/>
                                    <div>
                                        <h6 className='font-semibold text-sm md:text-base text-gray-600'>{notification.title}</h6>
                                        <p className='text-gray-500 italic text-sm md:text-base'>{notification.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Placeholder section */}
                    <div className='col-span-1 md:col-span-2 max-h-full'>
                        <Example />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
