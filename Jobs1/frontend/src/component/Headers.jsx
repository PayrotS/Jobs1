import logo from '../asset/UUI.png';
import React from 'react';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Tentang Kami", href: "Tentang" },
  { name: "Kontak", href: "kontak" },
];

const Headers = () => {
  return (
    <nav className='bg-white fixed top-0 left-0 right-0 z-50 drop-shadow-xl'>
      <header className='z-50'>
        <div className="flex items-center justify-between p-6 lg:px-8 border-b border-slate-500">
          <img src={logo} alt="" className='h-12 w-auto' />
          <p className='font-mono text-2xl text-[#213e92]'>Fasilkom</p>
          <p ></p>
        </div>
      </header>
      <nav className="flex items-center space-x-6 p-4 lg:px-8">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-base not-italic font-semibold leading-6 text-gray-900 ease-in-out duration-300 no-underline hover:underline "
          >
            {item.name}
          </a>
        ))}
      </nav>
    </nav>
  )
}

export default Headers;
