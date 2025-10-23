import Link from 'next/link';
import Logo from '@/components/Logo';

const exploreLinks = [
  { href: '/live', label: 'Live TV' },
  { href: '/videos', label: 'Video Library' },
  { href: '/schedule', label: 'Program Guide' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="font-headline text-xl font-bold text-primary">Dharmagranth TV</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Promoting dharmic values and teachings through spiritual media for a peaceful and enlightened life.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                {exploreLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
                <h3 className="font-headline font-semibold mb-4">Connect</h3>
                <p className="text-sm text-muted-foreground">Social media links can be placed here.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dharmagranth TV. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
