import React from 'react';

const Navbar = () => {
  return (
    <div className=' px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
      <div className='container flex flex-nowrap  items-center mx-auto md:flex-wrap justify-between'>
        <div className='w-32 md:w-52 border-2 flex border-red-800'>
          <img
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649023866/fylo/logo_tqieb3.svg'
            alt=''
          />
        </div>
        <div className=''>
          <ol className='flex flex-row'>
            <li className='mx-2 md:mx-5 cursor-pointer hover:font-bold hover:underline duration-75 transition-all '>
              Features
            </li>
            <li className='mx-2 md:mx-5 cursor-pointer hover:font-bold hover:underline duration-75 transition-all '>
              Team
            </li>
            <li className='mx-2 md:mx-5 cursor-pointer hover:font-bold hover:underline duration-75 transition-all '>
              Sign In
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
