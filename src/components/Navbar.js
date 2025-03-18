'use client';

import Link from 'next/link';
import Image from 'next/image';
import crownLogo from '../images/crown-logo.png';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-black/30 p-2 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={crownLogo}
                alt="BlackCard Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain animate-float"
              />
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors duration-300 animate-glow">
              BlackCard
            </span>
          </Link>
          <button className="px-6 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300">
            App Coming Soon{dots}
          </button>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255,255,255,0.1); }
          50% { text-shadow: 0 0 30px rgba(255,255,255,0.3); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
}
