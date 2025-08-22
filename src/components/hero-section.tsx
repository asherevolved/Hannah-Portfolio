'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="container py-12 md:py-24">
      <div className="grid grid-cols-1 gap-8 md:gap-16 items-center">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/profile.jpg"
            alt="Professional Photo"
            width={200}
            height={200}
            className="rounded-full mb-6 shadow-lg object-cover"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
            Hannah Esther Margaret
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Creative full-stack developer with a passion for building beautiful and functional web applications. Experienced in React, Next.js, and modern web technologies. Let's build something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
}
