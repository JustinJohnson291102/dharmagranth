"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Menu, Tv, Clapperboard, Calendar, Info, Mail, LogIn, UserPlus } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/live', label: 'Live TV', icon: Tv },
  { href: '/videos', label: 'Video Library', icon: Clapperboard },
  { href: '/schedule', label: 'Program Guide', icon: Calendar },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/contact', label: 'Contact', icon: Mail },
];

const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode, className?: string }) => (
  <Link href={href} className={cn("text-sm font-medium text-foreground/80 transition-colors hover:text-foreground", className)}>
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, onSelect }: { href: string; children: React.ReactNode, onSelect: () => void }) => (
    <Link href={href} onClick={onSelect} className="flex items-center gap-4 px-4 py-3 text-lg font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted rounded-md">
        {children}
    </Link>
);

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-6 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="hidden sm:inline-block font-headline text-xl font-bold text-primary">Dharmagranth TV</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button size="sm" asChild className="hidden md:inline-flex">
            <Link href="/register">
              <UserPlus className="mr-2 h-4 w-4" />
              Register
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <Link href="/" onClick={() => setIsOpen(false)} className="mb-8 flex items-center gap-2">
                    <Logo />
                    <span className="font-headline text-xl font-bold text-primary">Dharmagranth TV</span>
                </Link>
                <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <MobileNavLink key={link.href} href={link.href} onSelect={() => setIsOpen(false)}>
                            <link.icon className="h-5 w-5" />
                            {link.label}
                        </MobileNavLink>
                    ))}
                </div>
                <div className="mt-8 flex flex-col gap-3">
                    <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                        <Link href="/login">
                            <LogIn className="mr-2 h-4 w-4" />
                            Login
                        </Link>
                    </Button>
                    <Button asChild onClick={() => setIsOpen(false)}>
                        <Link href="/register">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Register
                        </Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
