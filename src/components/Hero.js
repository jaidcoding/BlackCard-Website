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
    <section className="min-h-screen flex items-center justify-center bg-black text-white">
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
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
