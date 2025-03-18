'use client';

import Image from 'next/image';
import homeScreen from '../images/HomeScreen.png';
import tableScreen from '../images/TableScreen.png';
import betScreen from '../images/BetScreen.png';
import sitScreen from '../images/SitScreen.png';
import screen21 from '../images/21Screen.png';
import yourMoveScreen from '../images/YourMoveScreen.png';

export default function Screenshots() {
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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience BlackCard</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Immerse yourself in our premium blackjack experience with elegant design and seamless gameplay.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[9/19.5] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-[1.02] border border-white/10 bg-white/5">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white mb-2">{screenshot.title}</h3>
                <p className="text-gray-300">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 