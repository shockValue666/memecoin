import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import dexscreenerIcon from '../../public/dexscreener/dex-screener-seeklogo.svg'
import pumpdotfun from '../../public/pumpdotfun/pumpdotfun.svg'
import Image from 'next/image'
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='flex w-full justify-around'>
        <Link href="https://x.com/" target='_blank'>
            <FaSquareXTwitter size={50} />
        </Link> 
        <Link href={"https://t.me/"} target='_blank'>
            <FaTelegram size={50} />
        </Link>
        <Link href="https://pump.fun/">
            <Image width={50} height={50} src={pumpdotfun} className='bg-white rounded-lg' alt="DexScreener Logo" />
        </Link>

    </div>
  )
}

export default Navbar