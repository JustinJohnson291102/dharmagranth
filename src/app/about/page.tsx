import Image from 'next/image';
import { Heart, Globe, BookOpen, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-card">
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Our Mission</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Dharmagranth TV is a non-profit initiative dedicated to sharing the timeless wisdom of dharmic traditions with a global audience. Our mission is to provide authentic, high-quality spiritual content that inspires, educates, and supports individuals on their path to inner peace and self-realization.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in the power of media to uplift and transform lives. Through our live broadcasts, video library, and community engagement, we aim to create a sanctuary for spiritual seekers everywhere.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://ik.imagekit.io/ggelm1lwa/DharmaGranth-Logo_1-removebg-preview.png?updatedAt=1761733737365"
              alt="Dharmagranth TV Logo"
              width={500}
              height={500}
              className="w-3/4 h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
            <div className="flex items-center justify-center">
                <Image
                src="https://ik.imagekit.io/ggelm1lwa/_Pngtree_tv-shape-red-live-icon_5602091-removebg-preview.png?updatedAt=1761748975338"
                alt="Our Vision"
                width={500}
                height={500}
                className="w-3/4 h-auto"
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
        
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-headline font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Inclusivity</h3>
              <p className="text-muted-foreground">Welcoming all seekers, regardless of background or belief.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Authenticity</h3>
              <p className="text-muted-foreground">Presenting teachings from genuine and respected spiritual lineages.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Service</h3>
              <p className="text-muted-foreground">Serving humanity by making spiritual knowledge accessible to all.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
