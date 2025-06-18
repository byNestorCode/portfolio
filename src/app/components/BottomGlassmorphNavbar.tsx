"use client";

import { LayoutGrid, Menu, Search, Home, User, Briefcase, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

const navigationItems = [
    { href: "#about", title: "Inicio", icon: <Home size={20} /> },
    { href: "#projects", title: "Proyectos", icon: <Briefcase size={20} /> },
    { href: "#contact", title: "Contacto", icon: <Mail size={20} /> },
];

export default function GlassmorphNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState("#about");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Optional: scroll to section and set active tab
    const handleNavClick = (href: string) => {
        setActiveTab(href);
        setIsOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* NAVBAR DESKTOP */}
            <nav
                className={`fixed left-1/2 top-0 z-50 mt-7 w-11/12 max-w-7xl -translate-x-1/2 rounded-full bg-background/20 p-3 backdrop-blur-lg transition-all duration-300 ease-in-out hidden md:flex ${scrolled ? "w-5/12" : "w-11/12"
                    }`}
            >
                <div className="relative flex items-center justify-between w-full">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
                            <Image src="/saturno.png" width={45} height={45} alt="About me" />
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-20 md:flex">
                        {navigationItems.map((item) => (
                            <Link key={item.href} href={item.href} className="text-white hover:text-primary transition-colors">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* NAVBAR MÓVIL INFERIOR */}
            <div className="fixed bottom-0 left-0 z-50 w-full bg-background/10 backdrop-blur-lg border-t border-white/10 py-2 px-6 md:hidden">
                <div className="flex justify-around items-center">
                    {navigationItems.map((item) => {
                        const isActive = activeTab === item.href;
                        return (
                            <button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={`flex flex-col items-center text-xs transition-all ${isActive ? "text-primary" : "text-white/60"
                                    }`}
                            >
                                {item.icon}
                                <span className="mt-0.5">{item.title}</span>
                                {isActive && <span className="mt-1 h-1 w-6 rounded-full bg-primary" />}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* MENÚ HAMBURGUESA EXPANDIBLE EN MÓVIL */}
            {isOpen && (
                <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 w-11/12 rounded-xl bg-background/90 backdrop-blur-lg px-6 py-4 shadow-lg transition-all duration-300 ease-in-out md:hidden">
                    <div className="flex flex-col gap-4">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className="text-white text-center text-base font-medium tracking-wide hover:text-primary transition-colors duration-200"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* BOTÓN HAMBURGUESA MÓVIL (puede quedar fuera del nav) */}
            <div className="fixed top-5 right-5 z-50 md:hidden">
                <Button onClick={() => setIsOpen(!isOpen)} variant="ghost">
                    <Menu className="size-5 text-white" />
                </Button>
            </div>
        </>
    );
}