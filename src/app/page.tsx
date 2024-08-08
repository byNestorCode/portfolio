import Image from "next/image";
import Head from 'next/head';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection';
import { Metadata } from 'next';

const globalMetadata: Metadata = {
  title: 'Mi Sitio Web',
  description: 'Descripción de mi sitio web',
  robots: 'index, follow',
  openGraph: {
    title: 'Mi Sitio Web',
    description: 'Descripción de mi sitio web',
    url: 'https://mi-sitio.com',
    images: ['https://mi-sitio.com/imagen.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mi Sitio Web',
    description: 'Descripción de mi sitio web',
    images: 'https://mi-sitio.com/imagen.jpg'
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}