import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-footer pt-56 pb-20   w-full  border-2 border-blue-900 flex flex-col   '>
      <img
        className='mx-8 md:mx-28 w-1/3 md:w-1/12 '
        src='https://res.cloudinary.com/djjgtili7/image/upload/v1649023866/fylo/logo_tqieb3.svg'
        alt=''
      />
      <div className='flex flex-col md:flex-row md:w-10/12 md:mx-auto'>
        <div className='flex w-10/12 mx-auto border-2 border-green-800 mt-5 '>
          <div className='flex p-5'>
            <FontAwesomeIcon className='mr-5' icon={faLocationDot} />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className='flex flex-col w-10/12 mx-auto border-2 border-green-800 mt-5 '>
          <div className=''>
            <div className='flex px-5 py-2 mt-4'>
              <FontAwesomeIcon className='mr-5' icon={faPhone} />
              <p>+1-543-123-4567</p>
            </div>
          </div>
          <div className=' '>
            <div className='flex px-5 py-2'>
              <FontAwesomeIcon className='mr-5' icon={faEnvelope} />
              <p>example@fylo.com</p>
            </div>
          </div>
        </div>
        <div className='w-10/12 border-2 border-green-800 mt-5 flex mx-auto'>
          <ul>
            <li className='font-bold mt-4 mb-3'>About US</li>
            <li className='font-light mb-3'>Jobs</li>
            <li className='font-light mb-3'>Press</li>
            <li className='font-light mb-3'>Blog</li>
          </ul>
        </div>
        <div className='w-10/12 border-2 border-green-800 mt-5 flex mx-auto'>
          <ul>
            <li className='font-bold mt-4 mb-3'>Contact Us</li>
            <li className='font-light mb-3'>Terms</li>
            <li className='font-light mb-3'>Privacy</li>
          </ul>
        </div>
        <div className='w-10/12 border-2 border-green-800 mt-5 pt-4 flex mx-auto justify-center '>
          <FontAwesomeIcon className='mx-2 h-6 ' icon={faFacebookSquare} />
          <FontAwesomeIcon className='mx-2 h-6 ' icon={faTwitterSquare} />
          <FontAwesomeIcon className='mx-2 h-6 ' icon={faInstagramSquare} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
