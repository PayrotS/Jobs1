import React from 'react'
import {FiMap} from 'react-icons/fi'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineShareAlt} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BiLogoFacebookSquare} from 'react-icons/bi'
import {FaTwitterSquare} from 'react-icons/fa'
import fsilkom from '../asset/Fslikm.png'

export function Kontac() {
  return (
    <div className='max-w-md mx-auto md:max-w-7xl'>
    <div className='ml-10 mt-40 mb-12 '>
        <img src={fsilkom} alt="" className="ml-4 h-2/4 w-2/5 float-right" />
            <article className="flex items-center mb-4">
                 <div className="mr-7">
                <FiMap className="text-3xl text-[#94a3b8]" />
                  </div>
              <div>
              <h4 className="text-2xl font-bold">Alamat</h4>
             <p className='text-[#475569]'>Fakultas Ilmu Komputer Universitas Indonesia
                 Pondok Cina, Kecamatan Beji, Kota Depok,
                  Jawa Barat 16424</p>
                </div>
            </article>

<article className="flex items-center mb-4">
  <div className="mr-7">
    <BsTelephone className="text-3xl text-[#94a3b8]" />
  </div>
  <div>
    <h4 className="text-2xl font-bold">Phone</h4>
    <p className='text-[#475569]'>021-1500002 / +62 815 15000002</p>
  </div>
</article>

<article className="flex items-center mb-4">
  <div className="mr-6">
    <MdOutlineEmail className="text-4xl text-[#94a3b8]" />
  </div>
  <div>
    <h4 className="text-2xl font-bold">Email</h4>
    <p className='text-[#475569]'>sip@ui.ac.id / humas-ui@ui.ac.id</p>
  </div>
</article>

<article className="flex items-center mb-4">
  <div className="mr-5">
    <AiOutlineShareAlt className="text-4xl text-[#94a3b8]" />
  </div>
  <div className="flex flex-col items-center">
  <h4 className="text-2xl font-bold mb-4">Follow Us</h4>
  <div className="flex">
    <a href='https://www.instagram.com/fasilkomuiofficial/'>
      <AiFillInstagram className="text-3xl mr-4" />
    </a>
    <a href='https://www.facebook.com/pages/Fasilkom-UI/161828047196998'>
      <BiLogoFacebookSquare className="text-3xl mr-4" />
    </a>
    <a href='https://twitter.com/FASILKOM_UI?s=20'>
      <FaTwitterSquare className="text-3xl" />
    </a>
  </div>
</div>
</article>
    </div>
    </div>
  )
}

