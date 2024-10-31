import logo from '../assets/logo.png'; 
import logomin from '../assets/logo-mini.png'; 
import { 
  HiOutlineHome,
  HiOutlineFolderOpen,
  HiOutlineUsers,
  HiOutlineMail,
  HiOutlineClipboardList,
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineCog, 
  HiOutlineLogout,
  HiOutlineChevronLeft,
  HiOutlineChevronRight // Add collapse icons
} from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SIDE_LINKS = [
  {
    category: 'Main Menu',
    links: [
      { id:0, name:'Dashboard', icon:HiOutlineHome , path:'/' },
      { id:1, name:'Projects', icon:HiOutlineFolderOpen , path:'/projects' },
      { id:2, name:'Clients', icon:HiOutlineUsers, path:'/clients' },
    ]
  },
  {
    category: 'Work',
    links: [
      { id:3, name:'To-do', icon:HiOutlineClipboardList, path:'/todo' },
      { id:4, name:'Messages', icon:HiOutlineMail, path:'/messages' },
      { id:5, name:'Events', icon:HiOutlineCalendar, path:'/events' },
    ]
  },
  {
    category: 'Account',
    links: [
      { id:6, name:'Profile', icon:HiOutlineUser , path:'/profile' },
      { id:7, name:'Account Settings', icon:HiOutlineCog , path:'/account-settings' },
    ]
  }
];

const Sidebar = ({ openSidebar ,setOpenSidebar }) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState('');
  const [collapsed, setCollapsed] = useState(false); // default is not collapsed

  useEffect(() => {
    const currentPath = location.pathname; // Use full pathname to match exactly
    setActivePath(currentPath);
  }, [location.pathname]);

  const handleActive = (pth) => {
    setActivePath(pth);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`fixed z-40 md:relative transition-all duration-300 ease-in-out w-16 ${collapsed ? 'md:w-16' : 'md:w-56'} p-4 min-h-screen bg-white sm:block ${openSidebar && 'hidden'}`}>
      <>
        {/* Collapse button */}
        <button onClick={toggleCollapse} className=" invisible md:visible md:flex items-center justify-center mb-4">
          {collapsed ? (
            <HiOutlineChevronRight className="w-6 h-6 text-gray-500" />
          ) : (
            <HiOutlineChevronLeft className="w-6 h-6 text-gray-500" />
          )}
        </button>

        {/* Logo section */}
        <div>
          <Link to='/'>
          <img className={`cursor-pointer  ${collapsed ? "hidden" : "hidden md:flex w-28"}`} src={logo} alt="logo" />
          </Link>
          <Link to='/'>
          <img  className={`flex cursor-pointer  w-8 ${collapsed ? 'md:flex' : 'md:hidden'}`} src={logomin} alt="min-logo" />
          </Link>
        </div>

        {/* Sidebar links */}
        {SIDE_LINKS.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mt-6 text-gray-600">
            {/* Category heading */}
            <h4 className={collapsed ? "hidden" : "hidden md:flex text-xs font-semibold uppercase text-gray-400 pl-2"}>
              {section.category}
            </h4>
            <div className='w-full h-1 border-t md:hidden'></div>

            {/* Links */}
            <ul className='space-y-4 mt-3'>
              {section.links.map((item) => (
                <li
                  key={item.id}
                  className={`px-2 py-2 rounded-md text-sm
                     font-medium ${activePath === item.path ? 'bg-[#626bf7] text-white' : 'hover:bg-gray-50'}`}
                >
                  <Link
                    to={item.path}
                    className='flex justify-center md:justify-start space-x-2 items-center'
                    onClick={() => {handleActive(item.path), setOpenSidebar(true)}}
                  >
                    <item.icon className='w-5 h-5' />
                    <span className={`${collapsed ? "hidden" : "hidden md:flex"} transition-all duration-300 ease-in-out`}>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className='w-full h-1 border-t mt-2 '></div>

        {/* Logout link */}
            <div className={`px-2 py-2 rounded-md text-sm
                     font-medium hover:bg-gray-50 mt-2 text-gray-600`}>
                      <Link
                        to='/login'
                        className='flex justify-center md:justify-start space-x-2 items-center'
                      >
                        <HiOutlineLogout className='w-5 h-5' />
                        <span className={`${collapsed ? "hidden" : "hidden md:flex"} transition-all duration-300 ease-in-out`}>Logout</span>
                      </Link>

            </div>
      </>
    </div>
  );
};

export default Sidebar;
