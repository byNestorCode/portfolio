"use client";

import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Home, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const navigationItems = [
    { label: "Welcome", href: "#welcome", icon: Home },
    { label: "About", href: "#about", icon: UserRound },
    { label: "Projects", href: "#projects", icon: BriefcaseBusiness },
];

const sectionIds = navigationItems.map((item) => item.href.slice(1));

export default function FloatingNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const activeSection = useActiveSection(sectionIds);

    useEffect(() => {
        const updateScrollState = () => setScrolled(window.scrollY > 16);
        updateScrollState();
        window.addEventListener("scroll", updateScrollState, { passive: true });
        return () => window.removeEventListener("scroll", updateScrollState);
    }, []);

    return (
        <>
            <nav aria-label="Primary navigation" className={`fixed left-1/2 top-5 z-50 hidden w-[calc(100%-2rem)] -translate-x-1/2 items-center rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 shadow-xl shadow-slate-950/25 backdrop-blur-xl transition-[max-width,padding,background-color,box-shadow] duration-500 ease-out md:flex ${scrolled ? "max-w-3xl bg-slate-950/80 py-2 shadow-cyan-950/20" : "max-w-6xl"}`}>
                <Link href="#welcome" aria-label="Go to welcome" className="rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
                    <Image src="/saturno.png" width={44} height={44} alt="Néstor Vázquez" className={`transition-all duration-500 ${scrolled ? "size-9" : "size-11"}`} priority />
                </Link>

                <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1" role="list">
                    {navigationItems.map(({ label, href, icon: Icon }) => {
                        const active = activeSection === href.slice(1);
                        return (
                            <Link key={href} href={href} role="listitem" aria-current={active ? "page" : undefined} className={`inline-flex min-h-10 items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 ${active ? "bg-cyan-300/15 text-cyan-100 shadow-[0_0_18px_rgba(103,232,249,0.14)]" : "text-slate-400 hover:bg-white/[0.06] hover:text-white"}`}>
                                <Icon className={`size-4 transition ${active ? "text-cyan-200" : "text-slate-500"}`} aria-hidden="true" />
                                <span className={scrolled ? "inline" : "hidden lg:inline"}>{label}</span>
                            </Link>
                        );
                    })}
                </div>

                <span className={`ml-auto hidden text-xs font-medium text-slate-400 transition-opacity duration-300 lg:block ${scrolled ? "opacity-0" : "opacity-100"}`}>{/* Platform Engineer */}</span>
            </nav>

            <nav aria-label="Primary navigation" className="fixed bottom-5 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center justify-around rounded-2xl border border-white/10 bg-slate-950/75 p-2 shadow-xl shadow-slate-950/30 backdrop-blur-xl md:hidden">
                {navigationItems.map(({ label, href, icon: Icon }) => {
                    const active = activeSection === href.slice(1);
                    return (
                        <Link key={href} href={href} aria-current={active ? "page" : undefined} className={`flex min-h-14 min-w-20 flex-col items-center justify-center gap-1 rounded-xl px-3 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 ${active ? "bg-cyan-300/15 text-cyan-100" : "text-slate-400"}`}>
                            <Icon className={`size-5 ${active ? "text-cyan-200" : "text-slate-500"}`} aria-hidden="true" />
                            {label}
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
