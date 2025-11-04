"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';

const marqueeImages = [
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(91).png?updatedAt=1762260925846',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(93).png?updatedAt=1762260926141',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(94).png?updatedAt=1762260925745',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(105).png?updatedAt=1762260926261',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(101).png?updatedAt=1762260926309',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(92).png?updatedAt=1762260925786',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(103).png?updatedAt=1762260926305',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(98).png?updatedAt=1762260926374',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(97).png?updatedAt=1762260926358',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(95).png?updatedAt=1762260926399',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(100).png?updatedAt=1762260926425',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(99).png?updatedAt=1762260926425',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(104).png?updatedAt=1762260926420',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(96).png?updatedAt=1762260926267',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(102).png?updatedAt=1762260925823',
];

export default function ImageMarquee() {
  const extendedImages = [...marqueeImages, ...marqueeImages];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start animate-scroll-right-to-left">
            {extendedImages.map((src, index) => (
            <li key={index} className="relative h-48 w-80 mx-2 flex-shrink-0">
                <Image 
                    src={src} 
                    alt={`Marquee Image ${index + 1}`} 
                    fill
                    className="object-fill rounded-lg"
                />
            </li>
            ))}
        </ul>
    </div>
  );
}
