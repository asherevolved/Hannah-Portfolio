'use client';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'I PU PCMB',
    institution: '',
    period: '',
  },
  {
    degree: 'Student of Photography and Cinematography',
    institution: 'RAVIVARMA ART INSTITUTE',
    period: '',
  },
  {
    degree: 'Member',
    institution: 'MPA (Mysore Photographic Association)',
    period: '',
  },
];

const certifications = [
  {
    name: 'Certified Content Marketer',
    issuer: 'Udemy',
    date: 'Issued 2019',
    imageUrl: '/Content Marketing Certification.jpeg'
  },
];

export default function CredentialsSection() {
    const sectionVariants = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="credentials" className="container py-12 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-12 font-headline">Credentials</h2>
      <motion.div
        className="grid grid-cols-1 gap-12 md:grid-cols-2"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <h4 className="font-bold">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Award className="text-primary" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <a 
                key={index} 
                href={cert.imageUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-bold">{cert.name}</h4>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
