'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleVideoError = (e) => {
    console.error('Video loading error:', e);
  };

  return (
    <section className="pt-8 pb-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            BlackCard in Action
          </h2>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl mb-12 mx-auto w-[280px] aspect-[9/19.5] border-8 border-white">
            <div className="absolute inset-x-2 inset-y-2 -bottom-4 bg-neutral-900">
              <video
                ref={videoRef}
                className="w-full h-full object-cover scale-105"
                muted
                playsInline
                loop
                onError={handleVideoError}
                poster="/images/HomeScreen.png"
              >
                <source src="/videos/Gameplay.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="text-center">
            <Link 
              href="/screenshots" 
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-100 transition-colors duration-300"
            >
              View Screenshots
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 