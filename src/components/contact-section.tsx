'use client';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const containerVariants = {
    offscreen: {},
    onscreen: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    offscreen: { scale: 0, y: 50 },
    onscreen: {
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <section id="contact" className="bg-secondary py-12 md:py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4 font-headline">Get In Touch</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to reach out or connect with me on social media.
        </p>
        <motion.div
          className="flex justify-center gap-4"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.div variants={iconVariants}>
            <Button asChild variant="outline" size="icon">
              <Link href="#" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={iconVariants}>
            <Button asChild variant="outline" size="icon">
              <Link href="#" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={iconVariants}>
            <Button asChild variant="outline" size="icon">
              <Link href="#" target="_blank" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
