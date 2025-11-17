"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Menu, Tv, Calendar, Info, Mail, LogIn, UserPlus, Home } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavLinks from './NavLinks';

const mobileNavLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Info },
    { href: '/contact', label: 'Contact', icon: Mail },
    { href: '/schedule', label: 'TV Guide', icon: Calendar },
    { href: '/live', label: 'Live TV', icon: Tv },
];

const MobileNavLink = ({ href, children, onSelect }: { href: string; children: React.ReactNode, onSelect: () => void }) => (
    <Link href={href} onClick={onSelect} className="flex items-center gap-4 px-4 py-3 text-lg font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted rounded-md">
        {children}
    </Link>
);

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="flex items-center mr-auto">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-14 w-14" />
          </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <NavLinks />
        </div>

        <div className="hidden md:flex items-center gap-2 ml-auto">
            <Button variant="ghost" asChild>
              <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link href="/register">
                <UserPlus className="mr-2 h-4 w-4" />
                Register
              </Link>
            </Button>
        </div>

        <div className="flex items-center md:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <Link href="/" onClick={() => setIsOpen(false)} className="mb-8 flex items-center gap-2">
                    <Logo className="h-12 w-12"/>
                    <span className="font-headline font-bold text-xl">Dharmagranth TV</span>
                </Link>
                <div className="flex flex-col gap-2">
                    {mobileNavLinks.map((link) => (
                        <MobileNavLink key={link.href} href={link.href} onSelect={() => setIsOpen(false)}>
                            <link.icon className="h-5 w-5 text-primary" />
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
