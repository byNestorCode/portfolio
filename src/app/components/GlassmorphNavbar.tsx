"use client";

import { LayoutGrid, Menu, Search, Home, User, Briefcase, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

export const navigationItems = [
    {
        title: "Home",
        href: "#home",
        items: [],
    },
    {
        title: "About",
        href: "#about",
        items: [],
    },
    {
        title: "Projects",
        href: "#contact",
        items: [],
    },
];

export default function GlassmorphNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // Cambia el valor si quieres que se encoja antes o después
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
        };

        checkScreen(); // set initial
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <nav className={`fixed left-1/2 ${isMobile ? 'top-auto bottom-6' : 'top-0 bottom-auto'} z-50 mt-7 w-11/12 max-w-7xl -translate-x-1/2 rounded-full bg-background/20 p-3 backdrop-blur-lg transition-all duration-300 ease-in-out ${
            isMobile 
            ? (scrolled ? 'w-7/12' : 'w-11/12') 
            : (scrolled ? 'w-5/12' : 'w-11/12')
        }`}>
            <div className="relative flex items-center justify-between w-full">
                {/* Logo a la izquierda */}
                <div className="flex-shrink-0">
                    <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                        <Image
                            src={"/saturno.png"}
                            width={45}
                            height={45}
                            alt="About me"
                        />
                    </Link>
                </div>

                {/* Links al centro */}
                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-20 md:flex">
                    {navigationItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* <div className="hidden md:block">
                    <Button variant="ghost">
                        <LayoutGrid className="size-4" />
                    </Button>
                    <Button variant="ghost">
                        <Search className="size-4" />
                    </Button>
                </div> */}

                {/* Botón del menú hamburguesa a la derecha en móvil */}
                <div className="md:hidden">
                    <Button onClick={() => setIsOpen(!isOpen)}>
                        <Menu className="size-4" />
                    </Button>
                </div>
            </div>

            {/* Menú móvil expandido */}
            {isOpen && (
                <div className="absolute bottom-full left-0 mb-3 w-full rounded-xl bg-background/100 backdrop-blur-lg px-6 py-4 shadow-lg transition-all duration-300 ease-in-out md:hidden z-40">
                    <div className="flex flex-col gap-4">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-black text-center text-base font-medium tracking-wide hover:text-secondary-50 transition-colors duration-200"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

        </nav>
    );
}