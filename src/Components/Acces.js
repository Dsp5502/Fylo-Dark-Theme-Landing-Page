import React from 'react';
import { acces } from '../data/data';

const Acces = () => {
  return (
    <div className=' mt-5 flex flex-col  justify-center items-center py-3 '>
      <div className='flex flex-wrap  w-80 md:w-4/5 '>
        {acces.map((item, index) => (
          <div
            key={index}
            className='w-full md:w-1/2 flex flex-col  justify-items-center items-center  text-center mb-10 '
          >
            <img className='w-20 h-20 my-5' src={item.imagen} alt='' />
            <h2 className=' text-xl font-bold my-2'>{item.titulo}</h2>
            <p className='font-light md:mx-14 mb-5 px-1'>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acces;
