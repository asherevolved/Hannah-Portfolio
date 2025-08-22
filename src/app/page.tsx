import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import PortfolioSection from '@/components/portfolio-section';
import CredentialsSection from '@/components/credentials-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PortfolioSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
