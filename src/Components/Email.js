import React from 'react';

const Email = () => {
  return (
    <div className='m-5 p-5 bg-mail rounded-xl text-center relative -bottom-44 md:w-2/3 md:mx-auto '>
      <h1 className='font-bold text-2xl mt-10'>Get early access today</h1>
      <p className='font-light mx-7 my-5'>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <input
        type='text'
        placeholder='email@example.com'
        className='w-11/12 outline-none text-black md:w-2/4 rounded-3xl h-12 md:h-14 md:mx-6 my-5 p-5'
      />
      <button className=' w-11/12 md:w-1/4  h-12 md:h-14 font-bold py-2 text-md rounded-full btnColor mb-10'>
        Get Started For Free
      </button>
    </div>
  );
};

export default Email;
