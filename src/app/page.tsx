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
    apple: 'https://0.gravatar.com/avatar/d90353701b3af920d04f475c8ae336bba5e93e1f99b0a5cb766de3d87ae7bfd2?size=256',
    shortcut: "https://0.gravatar.com/avatar/d90353701b3af920d04f475c8ae336bba5e93e1f99b0a5cb766de3d87ae7bfd2?size=256",
  },
  title: "👋 Welcome friend | Néstor Vázquez",
  description: "Platform Engineer specializing in DevSecOps, Site Reliability, Cloud Infrastructure, and mission-critical systems.",
  robots: 'index, follow',
  keywords: [],
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