import Link from 'next/link';
import { Code } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold">Persona</span>
          </Link>
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            <Link href="#portfolio" className="transition-colors hover:text-primary">
              Portfolio
            </Link>
            <Link href="#credentials" className="transition-colors hover:text-primary">
              Credentials
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
