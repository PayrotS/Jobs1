import React, { useState } from 'react';
import ui from '../asset/UUI.png';
import {HiOutlineUserCircle} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className='bg-[#213e92] min-h-screen flex items-center justify-center '>
      <div className='w-full h-92 mx-64 border rounded-lg p-8 bg-[#efefef] max-w-md mx-auto md:max-w-4xl'>
        <img src={ui} alt="" className='w-auto h-16 mr-12'/>
        <div className='my-6 mx-60'>
          <h1 className='block text-gray-700 font-bold mb-2 text-xl'>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'></label>
              <div className='relative'>
                <span className='absolute left-3 top-2 text-gray-600 my-0.5'>
                  <div className='border-r border-gray-400'>
                  <HiOutlineUserCircle className='text-xl text-gray-400	mr-1'/>
                  </div>                
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder='Username'
                  required
                  className='pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-900'
                />
              </div>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'></label>
              <div className='relative'>
                <span className='absolute left-3 top-2 text-gray-600 my-0.5'>
                  <div className='border-r border-gray-400'>
                  <RiLockPasswordLine className='text-xl text-gray-400	mr-1'/>
                  </div>                
                </span>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder='Password'
                required
                className='pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-900'
                />
              </div>
            </div>
            <Link
              to="/"
              className='bg-[#213e92] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
