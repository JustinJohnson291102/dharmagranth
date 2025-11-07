import Link from 'next/link';
import Logo from '@/components/Logo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const exploreLinks = [
  { href: '/live', label: 'Live TV' },
  { href: '/videos', label: 'Video Library' },
  { href: '/schedule', label: 'Program Guide' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/register', label: 'Register' },
];

const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/60">
      <div className="container py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-14 w-14" />
              <span className="font-headline font-bold text-lg">Dharmagranth TV</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Promoting dharmic values and teachings through spiritual media for a peaceful and enlightened life.
            </p>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold mb-6 text-foreground">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold mb-6 text-foreground">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-foreground">Stay Connected</h3>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex gap-2">
              <Input placeholder="Enter your email" className="bg-background" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex gap-5">
                {socialLinks.map((social) => (
                    <Link key={social.label} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                    </Link>
                ))}
            </div>
            <p className="text-sm text-muted-foreground text-center sm:text-right">
              &copy; {new Date().getFullYear()} Dharmagranth TV. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
