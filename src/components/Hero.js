'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [activeSuit, setActiveSuit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSuit((prev) => (prev + 1) % 4);
    }, 500); // Change suit every 500ms

    return () => clearInterval(interval);
  }, []);

  const suits = [
    { symbol: '♥', color: 'text-red-500' },
    { symbol: '♦', color: 'text-red-500' },
    { symbol: '♠', color: 'text-white' },
    { symbol: '♣', color: 'text-white' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center bg-black text-white relative pt-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          BlackCard
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          The Blackjack Experience, Redefined.
        </p>
        <div className="flex justify-center gap-4 text-4xl">
          {suits.map((suit, index) => (
            <span
              key={suit.symbol}
              className={`${suit.color} transform transition-transform duration-500 ${
                activeSuit === index ? 'translate-y-[-20px]' : ''
              }`}
            >
              {suit.symbol}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2">
        <svg
          className="w-8 h-8 text-white animate-bounce"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
