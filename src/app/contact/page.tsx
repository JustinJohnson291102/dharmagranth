"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const faqs = [
  {
    question: "How can I watch Dharmagranth TV?",
    answer: "You can watch our live stream directly on our website's 'Live TV' page. Our video library is also available 24/7 for on-demand viewing."
  },
  {
    question: "Is there a subscription fee?",
    answer: "Dharmagranth TV is a free-to-access platform, supported by donations from our community. We believe spiritual knowledge should be available to everyone."
  },
  {
    question: "How can I support your mission?",
    answer: "Thank you for your interest! You can support us through donations or by volunteering. Please contact us for more information on how you can contribute."
  },
  {
    question: "Do you have a mobile app?",
    answer: "A dedicated mobile app is currently in development. In the meantime, our website is fully responsive and can be accessed from any device."
  }
];

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We’d love to hear from you. Whether it’s a question, feedback, or a prayer request, our team is here for you.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div>
              <h2 className="text-2xl font-headline font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                Reach out to us through any of the following channels.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full"><Mail className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground text-sm">info@dharmagranthtelevision.com</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full"><Phone className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground text-sm">8700930012</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full"><MapPin className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-semibold">Our Address</h3>
                    <p className="text-muted-foreground text-sm">123 Dharma Lane, Spirituality City, 10001</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
                <h2 className="text-2xl font-headline font-bold mb-4">FAQs</h2>
                <p className="text-muted-foreground mb-6">
                    Find answers to common questions.
                </p>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>

        <div className="md:col-span-3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Have a specific question? Fill out the form and we'll get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                </div>
                <Input placeholder="Subject" required />
                <Textarea placeholder="Your Message" required rows={8} />
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
