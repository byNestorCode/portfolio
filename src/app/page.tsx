import HeroSection from "./components/HeroSection";
import AboutSection from './components/AboutSection';
import { Metadata } from 'next';
import ProjectSection from './components/ProjectSection';
import GlassmorphNavbar from "./components/GlassmorphNavbar";
import Providers from "./components/Providers";
import Grainient from "./components/Grainient";
import Background from "./components/Background";

export const metadata: Metadata = {
  metadataBase: new URL('https://nestorvazquez.mx/'),
  icons: {
    icon: './saturno.ico',
    apple: 'https://www.nestorvazquez.mx/images/apple-touch-icon.png',
    shortcut: "https://www.nestorvazquez.mx/images/apple-touch-icon.png",
  },
  title: "👋 Welcome friend | Néstor Vázquez",
  description: "Platform Engineer specializing in DevSecOps, Site Reliability, Cloud Infrastructure, and mission-critical systems.",
  robots: 'index, follow',
  keywords: [
    'Néstor Vázquez México',
    'Nestor Vazquez México',
    'nestor vazquez méxico',
    'Nestor Mexico',
    'Platform Engineer',
    'DevSecOps Engineer',
    'Site Reliability Engineer',
    'Cloud Engineer',
    'Kubernetes',
    'Terraform',
    'Docker',
    'AWS',
    'Cloud Infrastructure',
    'Infrastructure as Code',
    'CI/CD',
    'Cloud Security',
    'Platform Engineering',
    'Python',
    'Django',
    'Next.js',
    'Mexico',
    'DevSecOps Mexico',
    'Cloud Engineer Mexico',
    'Platform Engineer Mexico',
    'SRE Mexico'
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
    title: '👋 Welcome friend',
    description: 'Platform Engineer specializing in DevSecOps, Site Reliability, Cloud Infrastructure, and mission-critical systems.',
    url: 'https://nestorvazquez.mx',
    images: ['https://nestorvazquez.mx/images/og-image.png'],
    siteName: '👋 Welcome friend | Néstor Vázquez'
  },
  twitter: {
    card: 'summary_large_image',
    title: '👋 Welcome friend',
    description: 'Platform Engineer specializing in DevSecOps, Site Reliability, Cloud Infrastructure, and mission-critical systems.',
    images: 'https://nestorvazquez.mx/images/og-image.png'
  }
};

export default function Home() {
  return (
    <Providers>
      <main className="relative flex min-h-screen flex-col bg-transparent overflow-hidden">
        <Background />
        <GlassmorphNavbar />
        <div className="container mx-auto px-4 relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
        </div>
      </main>
    </Providers>
  );
}