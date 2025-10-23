import { cn } from "@/lib/utils";

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-8 w-8 text-primary", props.className)}
      {...props}
    >
      <path d="M50 95C74.8528 95 95 74.8528 95 50C95 25.1472 74.8528 5 50 5C25.1472 5 5 25.1472 5 50C5 63.8071 16.1929 75 30 75" />
      <path d="M42 33c0-8.8366 7.1634-16 16-16s16 7.1634 16 16" />
      <path d="M83 26c-1.6667 4.6667-10 12-22 10" />
      <path d="M38 58c0-9.9411 8.0589-18 18-18 8.0569 0 14.897 5.2866 17.156 12.5" />
    </svg>
  );
}
