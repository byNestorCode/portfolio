import HeroShowcase from "./components/HeroShowcase";
import AboutSection from './components/AboutSection';
import { Metadata } from 'next';
import ProjectShowcase from './components/ProjectShowcase';
import FloatingNavbar from "./components/FloatingNavbar";
import Providers from "./components/Providers";
import Grainient from "./components/Grainient";
import Background from "./components/Background";
import SiteFooter from './components/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://nestorvazquez.mx/'),
  icons: {
    icon: './saturno.ico',
    apple: 'https://www.nestorvazquez.mx/images/apple-touch-icon.png',
    shortcut: "https://www.nestorvazquez.mx/images/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  title: "Néstor Vázquez | Platform Engineer, DevSecOps & SRE en México",
  description: "Platform Engineer specializing in DevSecOps, Site Reliability, Cloud Infrastructure, and mission-critical systems.",
  robots: 'index, follow',
  keywords: [
    // Personal Brand
    'Néstor Vázquez',
    'Néstor Vázquez Portfolio',
    'Néstor Vázquez DevSecOps',
    'Néstor Vázquez Platform Engineer',
    'Néstor Vázquez México',
    'Nestor Vazquez México',
    'nestor vazquez méxico',
    'Nestor Mexico',

    // Core Roles
    'Platform Engineer',
    'DevSecOps Engineer',
    'Site Reliability Engineer',
    'Cloud Engineer',
    'Infrastructure Engineer',

    // Cloud & DevOps
    'Cloud Infrastructure',
    'Platform Engineering',
    'Infrastructure as Code',
    'Terraform',
    'Kubernetes',
    'Docker',
    'AWS',
    'CI/CD',
    'GitHub Actions',
    'Cloud Native',

    // Reliability & Security
    'Cloud Security',
    'Observability',
    'High Availability',
    'Platform Reliability',
    'Infrastructure Automation',
    'Mission Critical Systems',

    // Development
    'Python',
    'Django',
    'Next.js',
    'TypeScript',

    // Geographic SEO
    'Platform Engineer Mexico',
    'DevSecOps Engineer Mexico',
    'Cloud Engineer Mexico',
    'Site Reliability Engineer Mexico',
    'Mexican Platform Engineer',
    'LATAM Platform Engineer',
    'Remote DevSecOps Engineer',
    'Remote Platform Engineer',
    'SRE Mexico',
  ],
  authors: [
    { 
      name: 'byNestorCode', 
      url: 'https://github.com/bynestorcode' 
    },
  ],
  creator: 'byNestorCode',
  publisher: 'byNestorCode',
  openGraph: {
    title: 'Néstor Vázquez | Platform Engineer, DevSecOps & SRE en México',
    description: 'Platform Engineer specializing in DevSecOps, Site Reliability, Cloud Infrastructure, and mission-critical systems.',
    url: 'https://nestorvazquez.mx',
    images: ['https://nestorvazquez.mx/images/og-image.png'],
    siteName: 'Néstor Vázquez | Platform Engineering'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Néstor Vázquez | Platform Engineer, DevSecOps & SRE en México',
    description: 'Platform Engineer specializing in DevSecOps, Site Reliability, Cloud Infrastructure, and mission-critical systems.',
    images: 'https://nestorvazquez.mx/images/og-image.png'
  }
};

export default function Home() {
  return (
    <Providers>
      <main className="relative flex min-h-screen flex-col bg-transparent overflow-hidden">
        <Background />
        <FloatingNavbar />
        <div className="container mx-auto px-4 relative z-10">
          <HeroShowcase />
          <AboutSection />
          <ProjectShowcase />
          <SiteFooter />
        </div>
      </main>
    </Providers>
  );
}
