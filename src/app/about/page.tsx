import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart, Globe, BookOpen } from 'lucide-react';

const getPlaceholderImage = (id: string) => {
  return PlaceHolderImages.find(img => img.id === id);
}

export default function AboutPage() {
  const aboutImage = getPlaceholderImage('about-us-img');

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
          <div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
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
