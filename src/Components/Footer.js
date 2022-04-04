import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-footer pt-56 pb-20   w-full  border-2 border-blue-900 flex flex-col  '>
      <img
        className='mx-8 w-1/3'
        src='https://res.cloudinary.com/djjgtili7/image/upload/v1649023866/fylo/logo_tqieb3.svg'
        alt=''
      />

      <div className='flex w-10/12 mx-auto border-2 border-green-800 mt-5 '>
        <div className='flex p-5'>
          <FontAwesomeIcon className='mr-5' icon={faLocationDot} />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div className='flex w-10/12 mx-auto border-2 border-green-800 mt-5 '>
        <div className='flex p-5'>
          <FontAwesomeIcon className='mr-5' icon={faPhone} />
          <p>+1-543-123-4567</p>
        </div>
      </div>
      <div className='flex w-10/12 mx-auto border-2 border-green-800 mt-5 '>
        <div className='flex p-5'>
          <FontAwesomeIcon className='mr-5' icon={faEnvelope} />
          <p>example@fylo.com</p>
        </div>
      </div>
      <div>
        <ul>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
