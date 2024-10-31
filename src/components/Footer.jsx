import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const formatDate = (date) => {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <footer className=' p-4 mt-8 text-xs md:text-sm text-gray-500 flex-col md:flex items-center justify-between'>
      <p>{formatDate(currentTime)}</p>

      <div className='md:flex flex-col  text-xs md:text-sm space-x-2 items-center'>
      <p> © 2024 Metrack v2.3.1</p>

      <Link className='text-cyan-600 text-xs md:text-sm font-semibold underline' to="/" >
      Need Help
      </Link>
      </div>
    </footer>
  );
};

export default Footer;
