'use client';

import Image from 'next/image';
import crownLogo from '../images/crown-logo.png';
import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className={`text-4xl font-bold text-white text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Who We Are
        </h2>
        <div className="flex flex-col items-center">
          <p className={`text-gray-300 text-lg text-center max-w-2xl mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            BlackCard brings elegance and simplicity to the classic game of Blackjack. 
            We&apos;ve stripped away the complexity, creating a refined experience that 
            focuses on what truly matters – the pure enjoyment of the game.
          </p>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
            BlackCard isn&apos;t just another blackjack app - it&apos;s a premium gaming experience designed for those who demand excellence.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-4">
              {[
                { symbol: '♠', title: 'Elegant Simplicity', desc: 'A clean, intuitive interface that puts the focus on the game, not the distractions.' },
                { symbol: '♥', title: 'Premium Experience', desc: 'Luxurious design meets seamless gameplay for an elevated gaming experience.' },
                { symbol: '♦', title: 'Refined Gameplay', desc: 'Classic Blackjack rules presented in their purest form, without unnecessary complications.' },
                { symbol: '♣', title: 'Exclusive Tables', desc: 'Join private tables where sophistication meets the thrill of the game.' }
              ].map((card, index) => (
                <div
                  key={card.symbol}
                  className={`flex items-start space-x-4 group transition-all duration-500 hover:scale-105 cursor-pointer ${
                    hoveredCard === index ? 'translate-x-4' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-red-500 ${
                    hoveredCard === index ? 'scale-125' : ''
                  }`}>
                    <span className="text-black text-xl group-hover:text-white transition-colors duration-300">{card.symbol}</span>
                  </div>
                  <div className={`transition-all duration-500 ${hoveredCard === index ? 'translate-x-2' : ''}`}>
                    <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                    <p className="text-gray-400">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute w-96 h-96 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className={`relative w-72 h-72 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src={crownLogo}
                  alt="BlackCard Crown Logo"
                  fill
                  className="object-contain brightness-110 animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
