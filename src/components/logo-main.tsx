import React from 'react'
import Image from "next/image";
// import logo from '../../public/logo.jpg'
import tremp from "../../public/tremp.png"
import real from '../../public/real.png'
import tremp1 from '../../public/Tremp_1.png'

const LogoMain = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <Image width={300} height={300} src={tremp1} alt='logo'>

        </Image>
    </div>
  )
}

export default LogoMain