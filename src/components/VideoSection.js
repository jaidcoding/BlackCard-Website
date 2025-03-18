'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);

  useEffect(() => {
    // Preload the video
    if (videoRef.current) {
      videoRef.current.load();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    console.log('Video started playing successfully');
                  })
                  .catch(error => {
                    console.error('Error playing video:', error);
                    setIsVideoError(true);
                  });
              }
            }
          } else if (videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
        videoElement.pause();
      }
    };
  }, []);

  const handleVideoError = (e) => {
    console.error('Video loading error:', e);
    console.error('Video error details:', videoRef.current?.error);
    setIsVideoError(true);
  };

  const handleVideoLoadedData = () => {
    console.log('Video data loaded successfully');
    setIsVideoLoaded(true);
  };

  return (
    <section className="pt-8 pb-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
      <div className="container mx-auto px-4 relative">
        <div className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 animate-glow">
            BlackCard in Action
          </h2>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl mb-12 mx-auto w-[280px] aspect-[9/19.5] border-8 border-white/20 group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-x-2 inset-y-2 -bottom-4 bg-neutral-900">
              {!isVideoError ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
                  muted
                  playsInline
                  loop
                  onError={handleVideoError}
                  onLoadedData={handleVideoLoadedData}
                  poster="/images/HomeScreen.png"
                  preload="auto"
                >
                  <source src="/videos/Gameplay.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/HomeScreen.png"
                    alt="BlackCard Gameplay"
                    width={280}
                    height={608}
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="text-center">
            <Link 
              href="/screenshots" 
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 animate-bounce"
            >
              View Screenshots
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255,255,255,0.1); }
          50% { text-shadow: 0 0 30px rgba(255,255,255,0.3); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 