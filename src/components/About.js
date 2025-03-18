'use client';

import Image from 'next/image';
import crownLogo from '../images/crown-logo.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Who We Are</h2>
            <p className="text-gray-300 text-lg">
              BlackCard brings elegance and simplicity to the classic game of Blackjack. 
              We've stripped away the complexity, creating a refined experience that 
              focuses on what truly matters – the pure enjoyment of the game.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-xl">♠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Elegant Simplicity</h3>
                  <p className="text-gray-400">
                    A clean, intuitive interface that puts the focus on the game, not the distractions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-500 text-xl">♥</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Premium Experience</h3>
                  <p className="text-gray-400">
                    Luxurious design meets seamless gameplay for an elevated gaming experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-500 text-xl">♦</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Refined Gameplay</h3>
                  <p className="text-gray-400">
                    Classic Blackjack rules presented in their purest form, without unnecessary complications.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-xl">♣</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Exclusive Tables</h3>
                  <p className="text-gray-400">
                    Join private tables where sophistication meets the thrill of the game.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute w-64 h-64 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full blur-3xl opacity-30"></div>
            <div className="relative w-48 h-48">
              <Image
                src={crownLogo}
                alt="BlackCard Crown Logo"
                fill
                className="object-contain brightness-110"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
