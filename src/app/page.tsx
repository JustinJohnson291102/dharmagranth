import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { videos, schedule } from '@/lib/data';
import { ArrowRight, PlayCircle, Calendar } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel"
import VideoCard from '@/components/videos/VideoCard';
import { Badge } from '@/components/ui/badge';
import LogoCarousel from '@/components/layout/LogoCarousel';

const getPlaceholderImage = (id: string) => {
  return PlaceHolderImages.find(img => img.id === id);
}

const ourPrograms = [
    { id: '1', title: 'Hinduism Teachings', description: 'Explore the vast wisdom of Sanatana Dharma.', imageUrl: 'https://images.unsplash.com/photo-1598539967793-1ee7a303b608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxoYW51bWFufGVufDB8fHx8MTc2Mjg1NzcyNXww&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'hindu deity', genre: 'Hinduism', teacher: 'Scholars' },
    { id: '2', title: 'Buddhist Philosophy', description: 'Find peace through the teachings of the Buddha.', imageUrl: 'https://images.unsplash.com/photo-1596700543834-0c5a2a5b6c50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxidWRkaGF8ZW58MHx8fHwxNzYyODU3ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'buddha statue', genre: 'Buddhism', teacher: 'Masters' },
    { id: '3', title: 'Jainism Principles', description: 'Learn about Ahimsa and non-violence.', imageUrl: 'https://images.unsplash.com/photo-1629875213644-e55d7578e4c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzcGlyaXR1YWwlMjB0ZWFjaGVyfGVufDB8fHx8MTc2MTIxMTA0MXww&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'spiritual teacher', genre: 'Jainism', teacher: 'Gurus' },
    { id: '4', title: 'Sikhism Values', description: 'Discover the principles of selfless service and equality.', imageUrl: 'https://images.unsplash.com/photo-1582852239686-271618335559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtdXNpY2lhbnN8ZW58MHx8fHwxNzYxMjg4ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'sikh musicians', genre: 'Sikhism', teacher: 'Community' },
    { id: '5', title: 'Interfaith Dialogue', description: 'Exploring the common ground between spiritual paths.', imageUrl: 'https://images.unsplash.com/photo-1709580061994-f76359f5c6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtZWRpdGF0aW9uJTIwbGFrZXxlbnwwfHx8fDE3NjEyMTM5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'peaceful meditation', genre: 'Interfaith', teacher: 'Various' }
];

const comingSoon = [
    { id: '1', title: 'Ancient Scriptures', description: 'Unveiling the wisdom of the Vedas and Upanishads.', imageUrl: 'https://images.unsplash.com/photo-1759333344417-4116f7c5cf28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhbmNpZW50JTIwc2NyaXB0dXJlc3xlbnwwfHx8fDE3NjEyMTEwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'ancient scriptures', genre: 'Scriptures', teacher: 'Scholars' },
    { id: '2', title: 'Temple Architecture', description: 'Explore the sacred geometry of Indian temples.', imageUrl: 'https://images.unsplash.com/photo-1566915682737-3e97a7eed93b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB0ZW1wbGV8ZW58MHx8fHwxNzYxMTU2MDM3fDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'indian temple', genre: 'Documentary', teacher: 'Experts' },
    { id: '3', title: 'Ganges Ceremony', description: 'Witness the spectacular Ganga Aarti from Varanasi.', imageUrl: 'https://images.unsplash.com/photo-1605818725676-23c12926e41f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxnYW5nZXMlMjBjZXJlbW9ueXxlbnwwfHx8fDE3NjEyMTM5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'ganges ceremony', genre: 'Cultural', teacher: 'N/A' },
    { id: '4', title: 'The Power of Prayer', description: 'Understanding the science and art of prayer.', imageUrl: 'https://images.unsplash.com/photo-1554566205-d2a9e64cc5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwcmF5aW5nJTIwaGFuZHN8ZW58MHx8fHwxNzYxMDkxMzEzfDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'praying hands', genre: 'Discourse', teacher: 'Spiritual Masters' },
    { id: '5', title: 'Indian Instruments', description: 'A journey through the sounds of traditional Indian music.', imageUrl: 'https://images.unsplash.com/photo-1676804899250-18a342d77e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBpbnN0cnVtZW50c3xlbnwwfHx8fDE3NjEyMTM5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'indian instruments', genre: 'Music', teacher: 'Musicians' }
];

export default function Home() {
  const heroImage = getPlaceholderImage('hero-bg');
  const upcomingPrograms = schedule.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-fill"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="relative h-full flex flex-col items-center justify-end text-center p-4 md:p-8">
          <div className="container max-w-4xl pb-16">
            
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-yellow-100 text-black">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl mb-4">Our Programs</h2>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {ourPrograms.map((program) => (
                  <CarouselItem key={program.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                       <VideoCard video={{
                          id: program.id,
                          title: program.title,
                          description: program.description,
                          thumbnailUrl: program.imageUrl,
                          thumbnailHint: program.imageHint,
                          genre: program.genre,
                          teacher: program.teacher,
                       }} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
              <CarouselDots />
            </Carousel>
          </div>
          <div className='mt-24'>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl mb-4">Coming Soon</h2>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {comingSoon.map((program) => (
                  <CarouselItem key={program.id} className="md:basis-1/2 lg:basis-1/3">
                     <div className="p-1 h-full">
                        <VideoCard video={{
                            id: program.id,
                            title: program.title,
                            description: program.description,
                            thumbnailUrl: program.imageUrl,
                            thumbnailHint: program.imageHint,
                            genre: program.genre,
                            teacher: program.teacher,
                        }} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
              <CarouselDots />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Featured Videos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore a selection of our most popular discourses, guided meditations, and cultural programs.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {videos.slice(0, 8).map((video) => (
                <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <VideoCard video={video} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary">
              <Link href="/videos">
                View All Videos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 border-y bg-background">
        <div className="container space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                Available On OTT Platforms
              </h2>
            </div>
            <LogoCarousel />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Upcoming Programs</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tune In to Our Daily Schedule
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From morning chants to evening discourses, our programming is designed to guide and inspire you throughout your day.
            </p>
            <Button asChild>
              <Link href="/schedule">
                View Full Guide
                <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            {upcomingPrograms.map(program => (
              <Card key={program.id}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg flex flex-col items-center">
                    <span className="text-sm font-semibold">{program.time.split(' ')[1]}</span>
                    <span className="text-2xl font-bold">{program.time.split(' ')[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-headline font-semibold">{program.title}</h3>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

    