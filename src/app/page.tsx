import Image from "next/image";
import Head from 'next/head';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection';
import { Metadata } from 'next';
import ProjectSection from './components/ProjectSection';
import {NextUIProvider} from "@nextui-org/react";

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000/'),
  icons: {
    icon: './saturno.ico',
  },
  title: "👋 Welcome friend",
  description: "Generated by create next app",
  robots: 'index, follow',
  openGraph: {
    title: '👋 Welcome friend',
    description: 'Generated by create next app',
    url: 'https://mi-sitio.com',
    images: ['https://mi-sitio.com/imagen.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: '👋 Welcome friend',
    description: 'Generated by create next app',
    images: 'https://mi-sitio.com/imagen.jpg'
  }
};

export default function Home() {
  return (
    <NextUIProvider>
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
    </NextUIProvider>
  );
}