import React from 'react'
import Image from "next/image";
import logo from '../../public/logo.jpg'

const LogoMain = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <Image width={300} height={300} src={logo} alt='logo'>

        </Image>
    </div>
  )
}

export default LogoMain