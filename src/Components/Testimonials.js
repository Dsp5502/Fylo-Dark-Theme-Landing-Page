import React from 'react';
import { testimo } from '../data/data';

const Testimonials = () => {
  return (
    <div className='border-2 border-red-800 mt-5 flex flex-col  justify-center items-center py-3 '>
      <div className='w-10/12'>
        <img
          className='w-6'
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1649023863/fylo/bg-quotes_wg1v65.png'
          alt='quote'
        />
      </div>
      {testimo.map((testimonial, index) => (
        <>
          <div className='w-10/12   bgTesti mb-7'>
            <p className='m-5 mt-8  text-xs'>{testimonial.descripcion}</p>
            <div className='flex'>
              <img
                className=' my-2 mx-5 w-11 h-11 rounded-full'
                src={testimonial.imagen}
                alt='perfil'
              />
              <div className='mt-2 mb-5 flex flex-col'>
                <span className='font-bold'>{testimonial.nombre}l</span>
                <span className='font-light'>{testimonial.cargo}</span>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Testimonials;
