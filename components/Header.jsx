import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImSearch} from 'react-icons/im'
const Header = () => {
  return (
    <div className='flex items-center justify-between py-4 px-5 shadow-xl'>
        <GiHamburgerMenu size={30}/>
        <h2 className='font-[900] text-[30px]'>billboard</h2>
        <ImSearch size={30}/>
    </div>
  )
}

export default Header