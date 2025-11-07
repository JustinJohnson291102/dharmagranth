"use client";

import Image from 'next/image';

const logos = [
  { src: 'https://ik.imagekit.io/ggelm1lwa/zeetv.webp?updatedAt=1761739430386', alt: 'Zee TV' },
  { src: 'https://ik.imagekit.io/ggelm1lwa/airtelxstream.webp?updatedAt=1761739430332', alt: 'Airtel Xstream' },
  { src: 'https://ik.imagekit.io/ggelm1lwa/ebabaent.webp?updatedAt=1761739430285', alt: 'EBaba Entertainment' },
  { src: 'https://ik.imagekit.io/ggelm1lwa/jiotv.webp?updatedAt=1761739430314', alt: 'Jio TV' },
  { src: 'https://ik.imagekit.io/ggelm1lwa/samsungsmartv.webp?updatedAt=1761739430297', alt: 'Samsung Smart TV' },
  { src: 'https://ik.imagekit.io/ggelm1lwa/vipotv.webp?updatedAt=1761739429879', alt: 'Vi Movies and TV' },
  { src: 'https://ik.imagekit.io/ggelm1lwa/livenettv.webp?updatedAt=1761739429843', alt: 'Live Net TV' },
  { src: 'https://ik.imagekit.io/ggelm1lwa/cabletv.webp?updatedAt=1761739429859', alt: 'Cable TV' },
];

export default function LogoCarousel() {
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
        {extendedLogos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={150} height={75} className="h-16 w-auto object-fill" />
          </li>
        ))}
      </ul>
    </div>
  );
}
