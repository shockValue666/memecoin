import Link from 'next/link';
import { FaSquareXTwitter, FaTelegram } from 'react-icons/fa6';
import Image from 'next/image';
import pumpdotfun from '../../public/pumpdotfun/pumpdotfun.svg'

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4 mt-10">
      <div className="container mx-auto flex justify-around w-full ">
        <p className="text-sm mb-2">
          $ToD <a href="mailto:info@example.com" className="underline"></a>
        </p>
        {/* <p className="text-sm mb-2">
          Visit our <Link href="/about" target='_blank' className="underline"></Link> page for more information.
        </p> */}
        <div className="flex gap-3 text-xs">
            <Link href="https://x.com/" target='_blank'>
                <FaSquareXTwitter size={25} />
            </Link> 
            <Link href={"https://t.me/"} target='_blank'>
                <FaTelegram size={25} />
            </Link>
            <Link href="/">
                <Image width={25} height={25} src={pumpdotfun} className='bg-white rounded-lg' alt="DexScreener Logo" />
            </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;