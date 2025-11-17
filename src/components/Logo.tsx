import { cn } from '@/lib/utils';

export default function Logo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative h-16 w-16", className)} {...props}>
      <video
        src="https://ik.imagekit.io/ggelm1lwa/Dharmgranth_logo_with_Tagline_HD_Logo.12.08.2022%20(1).mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-contain"
      />
    </div>
  );
}
