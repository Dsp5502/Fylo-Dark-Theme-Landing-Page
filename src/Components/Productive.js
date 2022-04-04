import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Productive = () => {
  return (
    <div className='border-2 border-red-800 mt-5 flex flex-col md:flex-row   justify-center items-center  py-3 '>
      <img
        className=' my-5 w-4/5 md:w-1/2 md:p-10 '
        src='https://res.cloudinary.com/djjgtili7/image/upload/v1649023865/fylo/illustration-stay-productive_zd8mi8.png'
        alt='productive'
      />
      <div className='w-full md:w-1/2  my-10 '>
        <h1 className='font-bold text-xl mx-5'>
          Stay productive, wherever you are
        </h1>
        <p className='font-light text-lg text-left  m-5 '>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className='font-light text-lg text-left  m-5 '>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <button
          className='mx-5 my-1 btnProductive hover:text-white underline '
          href='#inicio'
        >
          See how Fylo works{' '}
          <FontAwesomeIcon className='underline' icon={faCircleArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Productive;
