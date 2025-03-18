'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import homeScreen from '../images/HomeScreen.png';
import tableScreen from '../images/TableScreen.png';
import betScreen from '../images/BetScreen.png';
import sitScreen from '../images/SitScreen.png';
import screen21 from '../images/21Screen.png';
import yourMoveScreen from '../images/YourMoveScreen.png';

export default function Screenshots() {
  const [activeSuit, setActiveSuit] = useState(0);
  const [visibleScreenshots, setVisibleScreenshots] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSuit((prev) => (prev + 1) % 4);
    }, 500);

    // Stagger the appearance of screenshots
    const timeouts = screenshots.map((_, index) => {
      return setTimeout(() => {
        setVisibleScreenshots(prev => [...prev, index]);
      }, index * 200); // 200ms delay between each screenshot
    });

    return () => {
      clearInterval(interval);
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const suits = [
    { symbol: '♥', color: 'text-red-500' },
    { symbol: '♦', color: 'text-red-500' },
    { symbol: '♠', color: 'text-white' },
    { symbol: '♣', color: 'text-white' },
  ];

  const screenshots = [
    {
      src: homeScreen,
      alt: "BlackCard Home Screen",
      title: "Welcome to BlackCard",
      description: "Elegant and intuitive home screen showcasing our premium blackjack experience."
    },
    {
      src: tableScreen,
      alt: "BlackCard Table Screen",
      title: "Exclusive Tables",
      description: "Choose from our selection of private tables, each with its own unique atmosphere."
    },
    {
      src: betScreen,
      alt: "BlackCard Betting Screen",
      title: "Strategic Betting",
      description: "Place your bets with precision using our streamlined betting interface."
    },
    {
      src: sitScreen,
      alt: "BlackCard Seating Screen",
      title: "Choose Your Seat",
      description: "Select your preferred position at the table for the perfect gaming experience."
    },
    {
      src: yourMoveScreen,
      alt: "BlackCard Gameplay Screen",
      title: "Your Move",
      description: "Clear and intuitive gameplay interface for making your next move."
    },
    {
      src: screen21,
      alt: "BlackCard Winning Hand",
      title: "Perfect 21",
      description: "Experience the thrill of hitting the perfect hand with our dynamic animations."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-16">
          <div className="flex items-center justify-center gap-12">
            {screenshots.slice(0, 2).map((screenshot, index) => (
              <div 
                key={`row1-${screenshot.title}`} 
                className={`flex items-center gap-12 transition-all duration-1000 ${
                  visibleScreenshots.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="group max-w-[280px] p-4 rounded-2xl border border-white/20 bg-white/5 hover:border-white/40 transition-all duration-300">
                  <div className="relative aspect-[9/19.5] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-[1.02] border border-white/10 bg-white/5">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">{screenshot.title}</h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{screenshot.description}</p>
                  </div>
                </div>
                {index === 0 && (
                  <span
                    className={`${suits[activeSuit].color} text-4xl transform transition-transform duration-500 w-12 h-12 flex items-center justify-center animate-bounce`}
                  >
                    {suits[activeSuit].symbol}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-12">
            {screenshots.slice(2, 4).map((screenshot, index) => (
              <div 
                key={`row2-${screenshot.title}`} 
                className={`flex items-center gap-12 transition-all duration-1000 ${
                  visibleScreenshots.includes(index + 2) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="group max-w-[280px] p-4 rounded-2xl border border-white/20 bg-white/5 hover:border-white/40 transition-all duration-300">
                  <div className="relative aspect-[9/19.5] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-[1.02] border border-white/10 bg-white/5">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">{screenshot.title}</h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{screenshot.description}</p>
                  </div>
                </div>
                {index === 0 && (
                  <span
                    className={`${suits[activeSuit].color} text-4xl transform transition-transform duration-500 w-12 h-12 flex items-center justify-center animate-bounce`}
                  >
                    {suits[activeSuit].symbol}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-12">
            {screenshots.slice(4).map((screenshot, index) => (
              <div 
                key={`row3-${screenshot.title}`} 
                className={`flex items-center gap-12 transition-all duration-1000 ${
                  visibleScreenshots.includes(index + 4) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="group max-w-[280px] p-4 rounded-2xl border border-white/20 bg-white/5 hover:border-white/40 transition-all duration-300">
                  <div className="relative aspect-[9/19.5] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-[1.02] border border-white/10 bg-white/5">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">{screenshot.title}</h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{screenshot.description}</p>
                  </div>
                </div>
                {index === 0 && (
                  <span
                    className={`${suits[activeSuit].color} text-4xl transform transition-transform duration-500 w-12 h-12 flex items-center justify-center animate-bounce`}
                  >
                    {suits[activeSuit].symbol}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 