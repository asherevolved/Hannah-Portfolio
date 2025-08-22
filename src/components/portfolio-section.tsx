import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Project Alpha',
    description: 'An e-commerce platform built with Next.js and Stripe for seamless online shopping.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'React', 'Stripe'],
    link: '#',
    aiHint: 'ecommerce website',
  },
  {
    title: 'Project Beta',
    description: 'A data visualization dashboard for tracking key business metrics in real-time.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'D3.js', 'Firebase'],
    link: '#',
    aiHint: 'dashboard analytics',
  },
  {
    title: 'Project Gamma',
    description: 'A mobile-first social networking app designed to connect like-minded individuals.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React Native', 'GraphQL', 'MongoDB'],
    link: '#',
    aiHint: 'mobile application',
  },
  {
    title: 'Project Delta',
    description: 'An open-source library for creating accessible and customizable UI components.',
    image: 'https://placehold.co/600x400.png',
    tags: ['TypeScript', 'Storybook', 'Open Source'],
    link: '#',
    aiHint: 'code library',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-secondary py-12 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">My Work</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link href={project.link} key={project.title} className="group block">
              <Card className="overflow-hidden shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    data-ai-hint={project.aiHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {project.title}
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
