
'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { videos, schedule, hindiVideos } from '@/lib/data';
import { ArrowRight, PlayCircle, Calendar, Mic2, BookOpen, Tv, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import VideoCard from '@/components/videos/VideoCard';
import { Badge } from '@/components/ui/badge';
import LogoCarousel from '@/components/layout/LogoCarousel';
import Autoplay from "embla-carousel-autoplay"


const ourPrograms = [
    { id: '1', title: 'Hinduism Teachings', description: 'Explore the vast wisdom of Sanatana Dharma.', imageUrl: 'https://plus.unsplash.com/premium_photo-1675601485116-b083859583b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974', imageHint: 'hinduism temple', genre: 'Hinduism', teacher: 'Scholars' },
    { id: '2', title: 'Buddhist Philosophy', description: 'Find peace through the teachings of the Buddha.', imageUrl: 'https://images.unsplash.com/photo-1549167008-dce1759943b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%\u003d\u003d&auto=format&fit=crop&q=80&w=1974', imageHint: 'buddhist statue', genre: 'Buddhism', teacher: 'Masters' },
    { id: '3', title: 'Jainism Principles', description: 'Learn about Ahimsa and non-violence.', imageUrl: 'https://media.istockphoto.com/id/494243298/photo/jain-temple-mahavira-in-jaisalmer-india.jpg?s=1024x1024&w=is&k=20&c=ysr4OAZ-yCc4l6cHpLMXB-0T10PKzIxYUOoM6fKxosU=', imageHint: 'jainism symbol', genre: 'Jainism', teacher: 'Gurus' },
    { id: '4', title: 'Sikhism Values', description: 'Discover the principles of selfless service and equality.', imageUrl: 'https://images.unsplash.com/photo-1582512403322-a73c407c0303?q=80&w=2070&auto=format&fit=crop', imageHint: 'golden temple', genre: 'Sikhism', teacher: 'Community' },
    { id: '5', title: 'Interfaith Dialogue', description: 'Exploring the common ground between spiritual paths.', imageUrl: 'https://plus.unsplash.com/premium_photo-1736961713901-63076826b437?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871', imageHint: 'religious books', genre: 'Interfaith', teacher: 'Various' }
];

const movingCarouselImages = [
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(91).png?updatedAt=1762260925846',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(93).png?updatedAt=1762260926141',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(94).png?updatedAt=1762260925745',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(105).png?updatedAt=1762260926261',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(101).png?updatedAt=1762260926309',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(92).png?updatedAt=1762260925786',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(103).png?updatedAt=1762260926305',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(98).png?updatedAt=1762260926374',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(97).png?updatedAt=1762260926358',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(95).png?updatedAt=1762260926399',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(100).png?updatedAt=1762260926425',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(99).png?updatedAt=1762260926425',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(104).png?updatedAt=1762260926420',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(96).png?updatedAt=1762260926267',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(102).png?updatedAt=1762260925823',
];

const scheduleCarouselImages = [
  'https://ik.imagekit.io/ggelm1lwa/dharmgranthtv.jpeg?updatedAt=1761734926711',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(107).png?updatedAt=1762260925332',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(105).png?updatedAt=1762260926261',
  'https://ik.imagekit.io/ggelm1lwa/Screenshot%20(106).png?updatedAt=1762260925955',
];


export default function Home() {
  const upcomingPrograms = schedule.slice(0, 3);
  const autoplay = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false, playOnInit: true, stopOnMouseEnter: true }));

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white">
        <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
            alt="A person doing yoga at sunset."
            fill
            className="object-cover"
            priority
            data-ai-hint="yoga sunset"
          />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 animate-fade-in-up space-y-6 max-w-4xl mx-auto px-4">
              <Quote className="h-16 w-16 text-primary mx-auto" />
              <h1 className="text-4xl md:text-6xl font-headline font-bold text-glow">
                  Spiritual Wisdom for the Modern World
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                  Promoting dharmic values and teachings through spiritual media for a peaceful and enlightened life.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/live">
                    <PlayCircle className="mr-2" /> Watch Live
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/videos">Explore Videos</Link>
                </Button>
              </div>
          </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="mb-16 text-center animate-fade-in-up">
            <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl mb-4">Our Programs</h2>
             <p className="max-w-3xl text-muted-foreground md:text-xl mx-auto">
              A diverse range of programs dedicated to spiritual learning and cultural enrichment.
            </p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <CarouselContent className="-ml-4">
              {ourPrograms.map((program) => (
                <CarouselItem key={program.id} className="pl-4 md:basis-1/2 lg:basis-[28%]">
                  <div className="p-1 h-full">
                      <VideoCard video={{
                        id: program.id,
                        title: program.title,
                        description: program.description,
                        thumbnailUrl: program.imageUrl,
                        thumbnailHint: program.imageHint,
                        genre: program.genre,
                        teacher: program.teacher,
                      }} className="w-full h-full" imageClassName="object-fill" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        
        <Carousel
          plugins={[autoplay.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-24"
        >
          <CarouselContent className="-ml-1">
            {movingCarouselImages.map((src, index) => (
              <CarouselItem key={index} className="pl-1 basis-full">
                <div className="p-1">
                  <div className="relative h-[60vh] md:h-[80vh]">
                    <Image
                      src={src}
                      alt={`Carousel image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="w-full py-16 md:py-24 bg-background bg-pattern-dark">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Featured Videos</h2>
            <p className="max-w-3xl text-muted-foreground md:text-xl">
              Explore a selection of our most popular discourses, guided meditations, and cultural programs.
            </p>
          </div>
          <div className="space-y-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {hindiVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden shadow-lg transition-all hover:shadow-primary/20 w-full max-w-4xl mx-auto border-transparent hover:border-primary/20 border-2 bg-card/80 backdrop-blur-sm group">
                <div className="grid md:grid-cols-2 items-center">
                  <div className="relative aspect-video">
                    <Image 
                      src={video.thumbnailUrl}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={video.thumbnailHint}
                    />
                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">{video.genre}</Badge>
                    <h3 className="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
                    <p className="text-muted-foreground text-sm">{video.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16 animate-fade-in-up">
            <Button asChild size="lg">
              <Link href="/videos">
                View All Videos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full pt-8 pb-16 md:pt-12 md:pb-24 bg-secondary/70">
        <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
            <div className="space-y-6 animate-fade-in-up">
                <Badge variant="outline" className="text-base py-2 px-4 rounded-lg border-primary/50 bg-primary/10 text-primary mb-4">
                  <Tv className="mr-2 h-5 w-5" /> Upcoming Programs
                </Badge>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-3">
                <Calendar className="h-10 w-10 text-primary" />
                Tune In to Our Daily Schedule
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                From morning chants to evening discourses, our programming is designed to guide and inspire you throughout your day.
                </p>
                <Button asChild size="lg" className="mt-6">
                <Link href="/schedule">
                    View Full Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                </Button>
            </div>
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="flex flex-col gap-4 mt-6">
                {upcomingPrograms.map(program => (
                <Card key={program.id} className="transition-all hover:shadow-lg bg-background/80 backdrop-blur-sm border-border hover:border-primary/30 group">
                    <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg flex flex-col items-center justify-center aspect-square w-24 text-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <span className="text-lg font-semibold">{program.time.split(' ')[1]}</span>
                        <span className="text-3xl font-bold tracking-tighter">{program.time.split(' ')[0]}</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-headline font-semibold group-hover:text-primary transition-colors">{program.title}</h3>
                        <p className="text-sm text-muted-foreground">{program.description}</p>
                    </div>
                    </CardContent>
                </Card>
                ))}
                </div>
            </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-16">
        <Carousel
            plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {scheduleCarouselImages.map((src, index) => (
                <CarouselItem key={index} className="pl-1 basis-full">
                  <div className="p-1">
                    <div className="relative h-[80vh] md:h-[120vh]">
                      <Image
                        src={src}
                        alt={`Schedule image ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
      </section>

      <section className="w-full py-16 md:py-24 border-y bg-background">
        <div className="container space-y-12 animate-fade-in-up">
            <div className="text-center">
              <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">
                Dharmagranth TV Available On
              </h2>
            </div>
            <LogoCarousel />
        </div>
      </section>
    </div>
  );
}

    

    

    
