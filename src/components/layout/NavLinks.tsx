
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/schedule', label: 'TV Guide' },
  { href: '/live', label: 'Live TV' },
];

const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode, className?: string }) => (
  <Link href={href} className={cn("relative text-lg font-medium text-foreground/70 transition-colors hover:text-foreground", className)}>
    {children}
  </Link>
);


export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-12">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          className={cn(pathname === link.href && "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-primary after:left-0 after:bottom-[-4px]")}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
