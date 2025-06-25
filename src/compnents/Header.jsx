"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname()

  return (
    <div className='flex justify-between items-center px-4 md:px-14 py-4 text-white relative z-50'>
      {/* Logo Section */}
      <div className='flex items-center gap-3'>
        <Link href="/">
        <Image
          src='/realLogo.svg'
          alt='Ampersand Logo'
          height={40}
          width={160}
          className='object-contain'
        />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className='hidden md:flex items-center gap-6'>
        <Link href='/' className={'hover:text-gray-300 transition-colors' + (path === '/' ? ' font-bold' : '')}>
          Home
        </Link>
        <Link href='/about' className={'hover:text-gray-300 transition-colors' + (path === '/about' ? ' font-bold' : '')}>
          About us
        </Link>
        <Link href='/services' className={'hover:text-gray-300 transition-colors' + (path === '/services' ? ' font-bold' : '')}>
          Services
        </Link>
        <Link href='/contact' className='hover:text-gray-300 transition-colors'>
          <button className='rounded-[40px] w-[145px] h-[50px] bg-white/50 text-white py-1 hover:bg-gray-500 transition-colors'>
            Contact us
          </button>
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button className='md:hidden' onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        {isOpen ? <X className='w-7 h-7' /> : <Menu className='w-7 h-7' />}
      </button>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className='fixed inset-0 bg-black/90 text-white flex flex-col items-center justify-center gap-8 text-xl z-40'>
           <X onClick={() => setIsOpen(!isOpen)} className='w-7 h-7 absolute top-6 right-7' />
          <Link href='/' onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href='/about' onClick={() => setIsOpen(false)}>
            About us
          </Link>
          <Link href='/services' onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href='/contact' onClick={() => setIsOpen(false)}>
            Contact us
          </Link>
        </div>
      )}
    </div>
  );
}
