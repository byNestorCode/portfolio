import HeroSection from "./components/HeroSection";
import AboutSection from './components/AboutSection';
import { Metadata } from 'next';
import ProjectSection from './components/ProjectSection';
import GlassmorphNavbar from "./components/GlassmorphNavbar";
import Providers from "./components/Providers";
import Grainient from "./components/Grainient";

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
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Grainient
            color1="#006d8f"
            color2="#002e7a"
            color3="#B19EEF"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        <GlassmorphNavbar />
        <div className="container mx-auto px-12 relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
        </div>
      </main>
    </Providers>
  );
}