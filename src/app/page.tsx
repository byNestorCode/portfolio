import HeroSection from "./components/HeroSection";
import AboutSection from './components/AboutSection';
import { Metadata } from 'next';
import ProjectSection from './components/ProjectSection';
import GlassmorphNavbar from "./components/GlassmorphNavbar";
import Providers from "./components/Providers";

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
      <main className="flex min-h-screen flex-col bg-[url(/images/fondo.svg)] bg-cover">
        {/* <Navbar /> */}
        <GlassmorphNavbar />
        <div className="container mx-auto px-12">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
        </div>
      </main>
    </Providers>
  );
}