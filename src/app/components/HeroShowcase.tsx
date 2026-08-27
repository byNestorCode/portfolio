"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, ArrowUpRight, FileText, Github } from "lucide-react";
import Orb from "./Orb";

export default function HeroShowcase() {
    return (
        <section id="welcome" className="flex min-h-dvh items-center py-28 text-white sm:py-32">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-0">
                <div className="order-2 max-w-3xl text-center lg:order-1 lg:text-center">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                        Néstor Vázquez · Mexico
                    </p>
                    <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-500">secure, scalable</span> cloud platforms.
                    </h1>
                    <div className="mt-6 text-xl font-medium text-slate-200 sm:text-2xl" aria-label="Professional roles">
                        <TypeAnimation
                            sequence={["Platform Engineer", 1600, "DevSecOps Engineer", 1600, "Site Reliability Engineer", 1600]}
                            speed={55}
                            repeat={Infinity}
                            wrapper="span"
                        />
                    </div>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-auto">
                        I design resilient infrastructure, automate delivery, and embed security into the systems engineering teams rely on every day.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-center">
                        <a href="mailto:hola@nestorvazquez.mx?subject=Let%27s%20work%20together" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(103,232,249,0.28)] transition hover:scale-[1.02] hover:shadow-[0_0_38px_rgba(167,139,250,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
                            Let&apos;s work together <ArrowUpRight className="size-4" aria-hidden="true" />
                        </a>
                        <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-slate-950/45 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-200/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
                            View selected work <ArrowDown className="size-4" aria-hidden="true" />
                        </a>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-slate-400 lg:justify-center">
                        <a href="https://github.com/bynestorcode" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-200"><Github className="size-4" aria-hidden="true" /> GitHub</a>
                        <a href="https://rxresu.me/rocketmx_/cv-nestor-devsecops" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-200"><FileText className="size-4" aria-hidden="true" /> Download CV</a>
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100 shadow-[0_0_18px_rgba(110,231,183,0.12)]">
                            <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]" aria-hidden="true" />
                            Available for remote collaboration
                        </span>
                    </div>
                </div>

                <div className="order-1 flex justify-center lg:order-2 lg:justify-center">
                    <div className="relative size-[270px] rounded-full bg-gradient-to-br from-cyan-400/45 via-violet-500/30 to-pink-500/45 shadow-[0_0_70px_rgba(96,165,250,0.28)] sm:size-[360px] lg:size-[430px]">
                        <div className="absolute inset-[3px] rounded-full border border-white/20 bg-slate-950/20" />
                        <Image src="/images/nestor.png" alt="Néstor Vázquez" width={360} height={360} priority className="absolute left-1/2 top-1/2 z-10 w-[80%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-2xl" />
                        <div className="absolute -inset-[15%] z-20 overflow-hidden rounded-full" aria-hidden="true">
                            <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
