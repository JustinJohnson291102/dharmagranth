"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

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
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-headline font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-8">
            We would love to hear from you. Whether you have a question, feedback, or a partnership proposal, please don't hesitate to reach out.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Input placeholder="Subject" required />
                <Textarea placeholder="Your Message" required rows={5} />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="text-3xl font-headline font-bold mb-8">Frequently Asked Questions</h2>
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
    </div>
  );
}
