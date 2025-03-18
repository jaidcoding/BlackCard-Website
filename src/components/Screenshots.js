'use client';

import Image from 'next/image';
import homeScreen from '../images/HomeScreen.png';
import tableScreen from '../images/TableScreen.png';
import betScreen from '../images/BetScreen.png';
import sitScreen from '../images/SitScreen.png';
import screen21 from '../images/21Screen.png';
import yourMoveScreen from '../images/YourMoveScreen.png';

export default function Screenshots() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Experience BlackCard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { src: homeScreen, alt: "BlackCard Home Screen" },
            { src: tableScreen, alt: "BlackCard Table Screen" },
            { src: betScreen, alt: "BlackCard Betting Screen" },
            { src: sitScreen, alt: "BlackCard Seating Screen" },
            { src: screen21, alt: "BlackCard Winning Hand" },
            { src: yourMoveScreen, alt: "BlackCard Gameplay Screen" },
          ].map((image, index) => (
            <div key={index} className="relative group">
              <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] border-2 border-white/20 bg-white/5">
                <div className="absolute inset-0 -top-2 -bottom-2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 