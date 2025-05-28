import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-9 py-4 text-white">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="Ampersand Logo"
          height={40}
          width={40}
          className="object-contain"
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">AMPERSAND</h2>
          <p className="text-xs">Hi~Technologies</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition-colors">
          About us
        </Link>
        <Link href="/services" className="hover:text-gray-300 transition-colors">
          Services
        </Link>
        <button className="rounded-[40px] w-[145px] h-[50px] bg-white/50 text-white py-1 hover:bg-gray-500 transition-colors">
          Contact us
        </button>
      </div>
    </div>
  );
}