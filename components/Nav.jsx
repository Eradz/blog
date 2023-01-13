import React from 'react'
import {ImSearch} from 'react-icons/im'
import {HiPlus} from 'react-icons/hi'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {IoChevronForwardSharp} from 'react-icons/io5'

const Nav = () => {
    const categories = ['Charts', 'Music', 'Culture', 'Media', 'Business','Pro Tools', 'Billboard Espanol', 'Honda Music']
    const footer = ['About us', "Accessibility", "Advertise", "Shop", "Events", 'Careers', "Contact Us"]
  return (
  <div className='text-white h-max'>
        <div className='flex bg-blue items-center px-4 py-3 gap-4 '>
            <ImSearch size={25} className='w-[8%]'/>
            <input type='search' placeholder='Search' name='search' className='bg-blue focus:outline-none w-[92%] '/>
        </div>
      <div className='bg-black h-full'>
        <div className=' py-8 px-4 flex justify-center gap-9 border-b-[0.5px] border-white'>
            <div className='flex w-[90%]  gap-[10%]'>
              <button className='py-2 w-[50%] outline outline-white outline-1 hover:cursor-pointer bg-cyan-500'>SUBSCRIBE</button>
              <button className='py-2 w-[50%] outline outline-white outline-1 hover:cursor-pointer'>LOGIN</button>
            </div>
          </div>
          <div>
            {categories.map((cate) =>{
              return(
                  <div className='flex justify-between p-4 border-b-[0.5px] border-white'>
                    <p className='font-[900]'>{cate}</p>
                    <HiPlus className='text-plus_red'/>
                  </div>
              )
            })}
          </div>
        <div className='flex flex-col gap-3 py-4'>
          <span className='flex gap-3 items-center justify-center'>
          <FaFacebookF  size={32} className='bg-icon_blue p-2 rounded-full hover:cursor-pointer'/>
          <BsTwitter size={32} className='bg-icon_blue p-2 rounded-full hover:cursor-pointer'/>
          <AiOutlineInstagram size={35} className='bg-icon_blue p-2 rounded-full hover:cursor-pointer'/>
          </span>
          <div className='flex flex-col items-center   w-[60%] mx-auto'>
            <div className='flex w-full  bg-blue p-2'>
            <input name='email' placeholder='Enter your Email' className='bg-blue focus:outline-none border-b-[1px] border-b-terms w-[92%]'/>
            <IoChevronForwardSharp size={30} className='w-[8%]'/>
            </div>
            <p className='text-[12px] w-full text-terms'>
            This site is protected by reCAPTCHA Enterprise and the Google <u className='hover:cursor-pointer'>Privacy Policy</u> and <u className='hover:cursor-pointer'>Terms of Service</u> apply.
            </p>
          </div>
      <div className='flex text-center gap-2 w-full mx-auto p-2'>
      {footer.map((link) =>{
        return(
          <p className='text-[12px]'>{link}</p>
        )
      })}
      </div>
      </div>
    </div>
  </div>
  )
}

export default Nav