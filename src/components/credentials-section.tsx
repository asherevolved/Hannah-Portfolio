import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.S. in Computer Science',
    institution: 'University of Technology',
    period: '2016 - 2020',
  },
];

const certifications = [
  {
    name: 'Next.js Certified Developer',
    issuer: 'Vercel',
    date: 'Issued 2023',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Issued 2022',
  },
];

export default function CredentialsSection() {
  return (
    <section id="credentials" className="container py-12 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-12 font-headline">Credentials</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
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
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Award className="text-primary" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <h4 className="font-bold">{cert.name}</h4>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
