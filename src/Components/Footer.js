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
    <div className='bg-footer pt-56 pb-20   w-full    flex flex-col   '>
      <img
        className='mx-8 md:mx-28 w-1/3 md:w-1/12 '
        src='https://res.cloudinary.com/djjgtili7/image/upload/v1649023866/fylo/logo_tqieb3.svg'
        alt=''
      />
      <div className='flex flex-col md:flex-row md:w-10/12 md:mx-auto'>
        <div className='flex w-10/12 mx-auto   mt-5 '>
          <div className='flex  p-5'>
            <FontAwesomeIcon className='mr-5' icon={faLocationDot} />
            <p className='hover:font-bold hover:underline cursor-pointer'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className='flex flex-col w-10/12 mx-auto md:mx-10    mt-5 '>
          <div className=''>
            <div className='flex px-5 py-2 mt-4'>
              <FontAwesomeIcon className='mr-5' icon={faPhone} />
              <p className='hover:font-bold hover:underline cursor-pointer'>
                +1-543-123-4567
              </p>
            </div>
          </div>
          <div>
            <div className='flex px-5 py-2'>
              <FontAwesomeIcon className='mr-5' icon={faEnvelope} />
              <p className='hover:font-bold hover:underline cursor-pointer'>
                +example@fylo.com
              </p>
            </div>
          </div>
        </div>
        <div className='w-10/12  mr-6 mt-5 flex mx-auto cursor-pointer'>
          <ul>
            <li className='font-bold mt-4 mb-3'>About US</li>
            <li className='font-light mb-3 hover:font-bold hover:underline'>
              Jobs
            </li>
            <li className='font-light mb-3 hover:font-bold hover:underline'>
              Press
            </li>
            <li className='font-light mb-3 hover:font-bold hover:underline'>
              Blog
            </li>
          </ul>
        </div>
        <div className='w-10/12  mr-6 mt-5 flex mx-auto cursor-pointer '>
          <ul>
            <li className='font-bold mt-4 mb-3 hover:font-bold hover:underline'>
              Contact Us
            </li>
            <li className='font-light mb-3 hover:font-bold hover:underline'>
              Terms
            </li>
            <li className='font-light mb-3 hover:font-bold hover:underline'>
              Privacy
            </li>
          </ul>
        </div>
        <div className='w-10/12   mt-5 pt-4 flex mx-auto justify-center '>
          <FontAwesomeIcon
            className='mx-2 h-6 btnicon '
            icon={faFacebookSquare}
          />
          <FontAwesomeIcon
            className='mx-2 h-6  btnicon'
            icon={faTwitterSquare}
          />
          <FontAwesomeIcon
            className='mx-2 h-6  btnicon'
            icon={faInstagramSquare}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
