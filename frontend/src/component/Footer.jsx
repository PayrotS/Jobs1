import React from 'react';
import UI from '../asset/UI.png';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#2E3192] w-full h-full'>
      <footer className='max-w-md mx-auto md:max-w-7xl sm:mt-6'>
        <div className='flex items-center'>
          <div className=''>
            <img src={UI} alt="" className='w-auto h-40 my-20 mx-16' />
          </div>
          <div className='flex flex-col border-l  pr-5'>
            <p className='text-white ml-4 mt-1'>
              Fakultas Ilmu Komputer Universitas Indonesia
            </p>
            <p className='text-white ml-4'>Pondok Cina, Kecamatan Beji, Kota Depok,</p>
            <p className='text-white ml-4'>Jawa Barat 16424</p>
            <div className='flex items-center my-3'>
              <MdOutlineEmail className='text-white mr-2 ml-5 text-3xl' />
              <p className='text-white mt-1'>sip@ui.ac.id / humas-ui@ui.ac.id</p>
            </div>
            <div className='flex items-center my-3'>
              <HiOutlinePhone className='text-white mr-2 ml-5 text-3xl' />
              <p className='text-white mt-1'>021-1500002 / +62 815 15000002</p>
            </div>
            <div className='flex items-center my-3'>
            <a href='https://www.instagram.com/fasilkomuiofficial/'>
            <AiFillInstagram className="text-white mr-2 ml-5 text-3xl" />
            </a>
            <a href='https://www.facebook.com/pages/Fasilkom-UI/161828047196998'>
            <BiLogoFacebookSquare className="text-white mr-2 ml-5 text-3xl" />
            </a>
            <a href='https://twitter.com/FASILKOM_UI?s=20'>
            <FaTwitterSquare className="text-white mr-2 ml-5 text-3xl " />
            </a>
            </div>
          </div>
          <div>
          <div className='flex flex-col ml-8'>
           <a href="/" className='text-white '>Home</a>
           <a href="/Tentang" className='text-white '>Tentang Kami</a>
           <a href="/Kontak" className='text-white '>Kontak</a>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
