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
  },
  title: "👋 Welcome friend",
  description: "Check my projects and follow me!",
  robots: 'index, follow',
  openGraph: {
    title: '👋 Welcome friend',
    description: 'Check my projects and follow me!',
    url: 'https://nestorvazquez.mx',
    images: ['https://nestorvazquez.mx/images/nestor.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: '👋 Welcome friend',
    description: 'Check my projects and follow me!',
    images: 'https://nestorvazquez.mx/images/nestor.png'
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