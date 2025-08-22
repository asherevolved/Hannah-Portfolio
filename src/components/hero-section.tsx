'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="home" className="container py-12 md:py-24">
      <motion.div
        className="grid grid-cols-1 gap-8 md:gap-16 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ perspective: 1000 }}
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={itemVariants}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="https://placehold.co/200x200.png"
              alt="Professional Photo"
              width={200}
              height={200}
              className="rounded-full mb-6 shadow-lg object-cover"
              priority
              data-ai-hint="woman smiling"
            />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline"
          >
            Hannah Esther Margaret
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-muted-foreground max-w-2xl"
          >
            Creative full-stack developer with a passion for building beautiful and functional web applications. Experienced in React, Next.js, and modern web technologies. Let's build something amazing together.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
