'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Creative Photography',
    description: 'Capturing stunning moments through the lens with a unique artistic perspective.',
    image: '/WhatsApp Image 2025-08-21 at 10.44.57 PM (1).jpeg',
    tags: ['Portrait', 'Landscape', 'Creative'],
    link: '#',
    aiHint: 'creative photography',
  },
  {
    title: 'Brand Storytelling',
    description: 'Helping brands tell their stories through compelling visual content and strategy.',
    image: '/WhatsApp Image 2025-08-21 at 10.44.57 PM.jpeg',
    tags: ['Branding', 'Content', 'Strategy'],
    link: '#',
    aiHint: 'brand storytelling',
  },
  {
    title: 'Social Media Content',
    description: 'Creating engaging content that drives engagement and builds communities.',
    image: '/WhatsApp Image 2025-08-21 at 10.44.58 PM (1).jpeg',
    tags: ['Social Media', 'Content Creation', 'Engagement'],
    link: '#',
    aiHint: 'social media content',
  },
  {
    title: 'Visual Marketing',
    description: 'Transforming ideas into powerful visual marketing campaigns that convert.',
    image: '/WhatsApp Image 2025-08-21 at 10.44.58 PM.jpeg',
    tags: ['Marketing', 'Campaigns', 'Visuals'],
    link: '#',
    aiHint: 'visual marketing',
  },
];

export default function PortfolioSection() {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
      rotateX: -45,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="portfolio" className="bg-secondary py-12 md:py-24">
      <div className="container" style={{ perspective: 2000 }}>
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">My Work</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <motion.div variants={cardVariants}>
                <div className="group block cursor-pointer" onClick={(e) => {
                  e.preventDefault();
                  const card = e.currentTarget.closest('.group');
                  if (card) {
                    card.classList.add('animate-pulse');
                    setTimeout(() => card.classList.remove('animate-pulse'), 300);
                  }
                }}>
                  <Card className="overflow-hidden shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl">
                    <div className="relative h-96 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                        data-ai-hint={project.aiHint}
                        priority
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>
                        {project.title}
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
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
