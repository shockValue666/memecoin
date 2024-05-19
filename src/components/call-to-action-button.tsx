import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import pumpdotfun from '../../public/pumpdotfun/pumpdotfun.svg'

const CallToActionButton = () => {
  return (
    <Link href="" 
    className='inline-block'
    // className='flex items-center gap-4 justify-center rounded-xl bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none focus:ring-opacity-50 shadow-lg transform transition hover:scale-105 duration-300 ease-in-out'
    >
        <div className='border border-white flex items-center gap-4 bg-[#87eead] text-black font-extrabold text-lg rounded-xl'>
            <Image width={50} height={50} src={pumpdotfun} className='bg-white rounded-lg' alt="DexScreener Logo" /> 
            <p>
                Buy now on pump.fun
            </p>
        </div>
    </Link>
  )
}

export default CallToActionButton