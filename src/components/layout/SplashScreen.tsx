"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative w-48 h-48 animate-splash-zoom">
        <Image
          src="https://ik.imagekit.io/ggelm1lwa/DharmaGranth-Logo_1-removebg-preview.png?updatedAt=1761733737365"
          alt="Dharmagranth TV Logo"
          fill
          sizes="192px"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}