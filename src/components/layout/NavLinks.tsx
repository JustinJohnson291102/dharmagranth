
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
  <Link href={href} className={cn("text-lg font-medium text-foreground/80 transition-colors hover:text-foreground", className)}>
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
          className={cn(pathname === link.href ? "text-foreground" : "")}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
