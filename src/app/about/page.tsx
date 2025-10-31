import Image from 'next/image';
import { Heart, Globe, BookOpen, Eye, Users, Target } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const teamMembers = [
  { name: 'Swami Ananda', role: 'Spiritual Director', avatar: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=2053&auto=format&fit=crop', fallback: 'SA' },
  { name: 'Ananya Sharma', role: 'Content Head', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', fallback: 'AS' },
  { name: 'Dr. Ramesh Rao', role: 'Chief Editor', avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop', fallback: 'RR' },
  { name: 'Priya Mehta', role: 'Community Manager', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop', fallback: 'PM' },
];

export default function AboutPage() {
  return (
    <div className="bg-card">
      <div className="container py-16 md:py-24 space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
          <div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Our Mission</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Dharmagranth TV is a non-profit initiative dedicated to sharing the timeless wisdom of dharmic traditions with a global audience. Our mission is to provide authentic, high-quality spiritual content that inspires, educates, and supports individuals on their path to inner peace and self-realization.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in the power of media to uplift and transform lives. Through our live broadcasts, video library, and community engagement, we aim to create a sanctuary for spiritual seekers everywhere.
            </p>
          </div>
          <div className="flex items-center justify-center p-8">
            <Image
              src="https://ik.imagekit.io/ggelm1lwa/DharmaGranth-Logo_1-removebg-preview.png?updatedAt=1761733737365"
              alt="Dharmagranth TV Logo"
              width={400}
              height={400}
              className="w-full max-w-sm h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center justify-center order-first md:order-last">
                <Image
                src="https://ik.imagekit.io/ggelm1lwa/_Pngtree_tv-shape-red-live-icon_5602091-removebg-preview.png?updatedAt=1761748975338"
                alt="Our Vision"
                width={400}
                height={400}
                className="w-full max-w-xs h-auto"
                />
            </div>
            <div>
                <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Our Vision</h1>
                <p className="text-lg text-muted-foreground mb-4">
                Our vision is to be the leading global platform for dharmic and spiritual content, fostering a world where ancient wisdom is accessible to all, and every individual is empowered to live a life of purpose, balance, and inner harmony.
                </p>
                <p className="text-lg text-muted-foreground">
                We envision a future where technology and spirituality converge to create a global community of seekers, united by a shared quest for knowledge, self-discovery, and universal well-being.
                </p>
            </div>
        </div>
        
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-3xl font-headline font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Welcoming all seekers, regardless of background or belief.</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Authenticity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Presenting teachings from genuine and respected spiritual lineages.</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Serving humanity by making spiritual knowledge accessible to all.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h2 className="text-3xl font-headline font-bold mb-12">Meet Our Team</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
                We are a dedicated team of spiritual seekers, professionals, and volunteers passionate about sharing dharmic wisdom.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                        <Avatar className="h-24 w-24 border-4 border-primary/20">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.fallback}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-headline font-semibold text-lg">{member.name}</h3>
                            <p className="text-sm text-primary">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
