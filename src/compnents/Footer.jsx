import Image from "next/image";
import Link from "next/link"; // Added for navigation links

export default function Footer() {
  return (
    <footer className='bg-[#212529] text-white py-12 px-4 md:px-16'>
      <div className='container mx-auto flex flex-col md:flex-row gap-8 justify-between'>
        {/* Left Section: Logo and Contact Info */}
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <Link href='/'>
              <Image
                src='/logo.svg'
                alt='Ampersand Logo'
                height={40}
                width={40}
                className='object-contain relative -top-12'
              />
            </Link>
            <div className='flex flex-col gap-1'>
              <h2 className='text-2xl font-normal'>AMPERSAND</h2>
              <p className='mb-2 text-white/30'>Hi~Technologies</p>
              <p>info@ampersandhitech.com</p>
              <p>0701 234 5678</p>
              <p>0800 1000 3456</p>
            </div>
          </div>
          <p className='text-xs mt-3'>© 2025 Ampersand HI-Tech</p>
        </div>

        {/* Middle Section: Pages */}
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-normal'>Pages</h2>
          <Link href='/services' className='text-sm hover:underline'>
            Services
          </Link>
          <Link href='/about' className='text-sm hover:underline'>
            About us
          </Link>
          <Link href='/contact' className='text-sm hover:underline'>
            Contact us
          </Link>
        </div>

        {/* Right Section: Legal */}
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-normal'>Legal</h2>
          <Link href='/terms' className='text-sm hover:underline'>
            Privacy and Cookies Policy
          </Link>
          <Link href='/terms' className='text-sm hover:underline'>
            Terms & Condition
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className='flex gap-3'>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/in.svg'
              alt='LinkedIn'
              height={25}
              width={25}
              className='object-contain'
            />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/insta.svg'
              alt='Instagram'
              height={25}
              width={25}
              className='object-contain'
            />
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/facebook.svg'
              alt='Facebook'
              height={25}
              width={25}
              className='object-contain'
            />
          </a>
        </div>
      </div>

      {/* Powered By Section */}
      <div className='container mx-auto px-4 mt-6 text-right'>
        <a
          href='https://www.intplus.co'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p className='text-xs text-gray-400/40'>Powered by Int+ Technology</p>
        </a>
      </div>
    </footer>
  );
}
