'use client';

import Link from 'next/link';

export default function BackButton() {
  return (
    <Link 
      href="/"
      className="fixed top-8 left-8 z-[100] flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 bg-black/80 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 shadow-lg"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-7 w-7" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2.5} 
          d="M10 19l-7-7m0 0l7-7m-7 7h18" 
        />
      </svg>
      <span className="text-xl font-semibold">Back</span>
    </Link>
  );
} 