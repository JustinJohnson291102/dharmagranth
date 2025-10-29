import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Logo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative h-8 w-8", className)} {...props}>
      <Image
        src="https://ik.imagekit.io/ggelm1lwa/DharmaGranth-Logo_1-removebg-preview.png?updatedAt=1761733737365"
        alt="Dharmagranth TV Logo"
        fill
        sizes="32px"
        className="object-contain"
      />
    </div>
  );
}
