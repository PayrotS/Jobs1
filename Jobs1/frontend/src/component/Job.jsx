import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ui from '../asset/UI.png'

function Jobs() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/jobs/magangs/')
      .then(response => {
        setJobData(response.data);  
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='grid grid-cols-2 gap-2'>
  {jobData.map((job, index) => (
    <div className='' key={index}>
      <div className='w-auto h-80 bg-[#FBFBFB] p-4 mx-16 border-l-4 border-indigo-500 rounded-lg mb-5 relative'>
        <img src={Ui} alt="" className='w-auto h-10 mb-3'/>
        <p className='text-lg text-blue-700 font-semibold'>{job.judul}</p>
        <p className='text-gray-500'>
          {job.deskripsi}<br />
        </p>
        <p className='mt-4'>Jurusan: {job.jurusan}</p>
        <p>Pengarang: {job.nama_id}</p>
        <p className='font-semibold'>Deadline: {job.deadline}</p>
        <p className="absolute bottom-3 left-4 text-gray-500">{job.publish}</p>
        <p> {job.is_closed ? 'Closed' : 'Open'}</p>
      </div>
    </div>
  ))}
</div>
  );
}

const Job = () => {
  return (
    <div className='mb-8 max-w-md mx-auto md:max-w-7xl'>
      <p className='text-3xl mt-8  ml-8 '>Job</p>
      <div className='mt-2 ml-2 mr-2 border py-8 px-8 bg-[#dddddd] rounded-md h-auto'>      
        <p className='mb-8 text-xl'>Lowongan</p>
        <div className=''>
          <Jobs />
        </div>
      </div>
    </div>
  );
};

export default Job;
