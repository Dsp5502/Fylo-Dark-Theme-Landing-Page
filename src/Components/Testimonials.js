import React from 'react';
import { testimo } from '../data/data';

const Testimonials = () => {
  return (
    <div className='  mt-5 flex flex-col md:flex-row md:flex-wrap justify-center  items-center py-3  '>
      <div className='w-10/12 md:w-full md:ml-7 '>
        <img
          className='w-6 md:w-12   md:absolute'
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1649023863/fylo/bg-quotes_wg1v65.png'
          alt='quote'
        />
      </div>
      {testimo.map((testimonial, index) => (
        <div
          className='flex justify-center  items-center md:w-1/3 md:mt-8 md:z-40   '
          key={index}
        >
          <div className='w-10/12    bgTesti mb-7 '>
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
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
