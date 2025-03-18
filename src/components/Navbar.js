'use client';

import Link from 'next/link';
import Image from 'next/image';
import crownLogo from '../images/crown-logo.png';

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <Image
              src={crownLogo}
              alt="BlackCard Crown Logo"
              width={56}
              height={56}
              className="object-contain brightness-110"
              priority
            />
          </div>
          <span className="text-3xl font-bold tracking-wide">BlackCard</span>
        </Link>
        <div>
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
            App Coming Soon...
          </button>
        </div>
      </div>
    </nav>
  );
}
