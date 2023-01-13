import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImSearch} from 'react-icons/im'
import Nav from './Nav'
const Header = () => {
  const [nav, setNav] = useState(false)
  return (
    <>
    <div className='flex items-center justify-between py-4 px-5 shadow-xl z-10'>
        <GiHamburgerMenu onClick={() =>{setNav(!nav)}} size={30}/>
        <h2 className='font-[900] text-[30px]'>billboard</h2>
        <ImSearch size={30}/>
    </div>
    <div className={nav? 'transition duration-500 -translate-y-[150%] scale-0' : 'transition duration-500 translate-y-0 '}>
    <Nav />
    </div>
    </>
  )
}

export default Header