import React, { useState } from 'react';
import ui from '../asset/UUI.png';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/', {
        username,
        password,
      });
    
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
    
        console.log('Token stored in localStorage:', token);

        navigate('/');
      }
    
      console.log('Response data:', response.data);
    
    } catch (error) {
      if (error.response) {
        console.error('Request made, but got an error response:', error.response.data);
        setErrorMessage('Username or password is incorrect'); // Set pesan kesalahan
      } else if (error.request) {
        console.error('Request made, but no response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }

    
    
    
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
            {errorMessage && (
             <p className='text-red-500 mb-2'>{errorMessage}</p>
            )}
              <button
                type='submit'
                className='bg-[#213e92] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Login
              </button>
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
