import React from 'react';

const AllFiles = () => {
  return (
    <div className='border-2 border-red-800 mt-5 flex flex-col  justify-center items-center py-3 '>
      <div className='my-5 border-2 border-blue-800 '>
        <img
          className='  w-80 md:w-full '
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1649023865/fylo/illustration-intro_phyjps.png'
          alt='allFiles'
        />
      </div>
      <div className=' my-5  w-full md:w-1/2  text-center  border-2 border-blue-800 '>
        <p className='font-bold text-2xl md:text-3xl  m-6 md:px-2 border-2 border-green-800 leading-relaxed'>
          All your files in one secure location, accesible anywhere
        </p>
        <p className='text-sm md:text-xl border-2 m-8 md:m-6 border-green-800 '>
          Fylo stores all your most important files in one secure location.
          Acces them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className=' w-56 md:w-72  h-12 md:h-14 font-bold py-2 text-md rounded-full btnColor'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AllFiles;
