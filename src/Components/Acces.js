import React from 'react';
import { acces } from '../data/data';

const Acces = () => {
  return (
    <div className='border-2 border-red-800 mt-5 flex flex-col  justify-center items-center py-3 '>
      <div className='flex flex-wrap  w-80 md:w-3/4 '>
        {acces.map((item) => (
          <div className='w-full md:w-1/2 border-2 flex flex-col  justify-items-center items-center border-blue-800 text-center mb-10'>
            <img className='w-16 my-5' src={item.imagen} alt='' />
            <h2 className=' text-xl font-bold my-2'>{item.titulo}</h2>
            <p className='font-light mb-5'>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acces;
