'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateIntro } from '@/ai/flows/generate-intro';
import { useToast } from '@/hooks/use-toast';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [qualifications, setQualifications] = useState('');
  const [generatedIntro, setGeneratedIntro] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateIntro = async () => {
    if (!qualifications.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your qualifications first.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setGeneratedIntro('');

    try {
      const result = await generateIntro({ qualifications });
      setGeneratedIntro(result.introStatement);
    } catch (error) {
      console.error('Failed to generate intro:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate a new introduction. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="home" className="container py-12 md:py-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 items-center">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Image
            src="https://placehold.co/200x200.png"
            alt="Professional Photo"
            width={200}
            height={200}
            className="rounded-full mb-6 shadow-lg"
            data-ai-hint="professional portrait"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
            John Doe
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Creative full-stack developer with a passion for building beautiful and functional web applications. Experienced in React, Next.js, and modern web technologies. Let's build something amazing together.
          </p>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-accent" />
              AI Intro Generator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Enter your qualifications and experience to generate an alternative introduction.
            </p>
            <div className="space-y-4">
              <Textarea
                placeholder="e.g., 5 years of experience in React, specialized in e-commerce platforms..."
                value={qualifications}
                onChange={(e) => setQualifications(e.target.value)}
                rows={5}
              />
              <Button onClick={handleGenerateIntro} disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? 'Generating...' : 'Generate New Intro'}
              </Button>
              {generatedIntro && (
                <div className="mt-4 rounded-md border bg-background p-4">
                  <h4 className="font-semibold">Generated Intro:</h4>
                  <p className="text-sm text-secondary-foreground">{generatedIntro}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
