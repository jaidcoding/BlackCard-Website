'use client';

import Screenshots from '../../components/Screenshots';
import BackButton from '../../components/BackButton';
import { useEffect, useState } from 'react';

export default function ScreenshotsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 animate-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.15)_0%,transparent_50%)]"></div>
      <BackButton />
      <div className={`pt-64 pb-20 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 animate-glow">
            BlackCard Screenshots
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 animate-fade-in">
            Explore the beautiful interface and immersive gameplay of BlackCard through our collection of screenshots.
          </p>
          <div className="animate-slide-up">
            <Screenshots />
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255,255,255,0.1); }
          50% { text-shadow: 0 0 30px rgba(255,255,255,0.3); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          animation-delay: 0.5s;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
          animation-delay: 0.8s;
        }
      `}</style>
    </main>
  );
} 