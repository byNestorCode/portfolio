"use client";

import {
    ArrowUpRight,
    CheckCircle2,
    Cloud,
    GitBranch,
    ShieldCheck,
    Activity,
} from "lucide-react";
import { Image } from "@heroui/react";
import CountUp from "./CountUp";

const capabilities = [
    { icon: Cloud, title: "Cloud platforms", description: "Resilient infrastructure designed to grow with engineering teams and business demand." },
    { icon: ShieldCheck, title: "Security by design", description: "Practical DevSecOps controls embedded throughout delivery and operations." },
    { icon: GitBranch, title: "Delivery automation", description: "Repeatable CI/CD workflows that reduce manual work and release risk." },
    { icon: Activity, title: "Reliable operations", description: "Observability and reliability practices for systems that cannot afford downtime." },
];

const specialties = [
    "Platform Engineering",
    "DevSecOps",
    "Cloud Infrastructure",
    "Site Reliability",
    "CI/CD Automation",
    "Technical Leadership",
];

const skills = [
    { name: "Next.js", logo: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Django", logo: "https://cdn.brandfetch.io/idnYlnDpTD/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Docker", logo: "https://cdn.brandfetch.io/id5_eOiB6T/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Python", logo: "https://cdn.brandfetch.io/idbpOFBgcc/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Solana", logo: "https://cdn.brandfetch.io/ide0NUuTHO/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Internet Computer", logo: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiZGZpbml0eVwvZmlsZVwvQ3ZFa3Y5eFhQOGQ3dW83ZkxFMmkucG5nIn0:dfinity:WGPFvOEBt8LexZ0568duC01k5g99_6IN-Ju8n3WvJhE?width=800&format=webp&quality=100" },
    { name: "React Native", logo: "https://cdn.brandfetch.io/idTpJSSBPD/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Snyk", logo: "https://cdn.brandfetch.io/id8lDQ6AMj/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "GitHub", logo: "https://cdn.brandfetch.io/idZAyF9rlg/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1719469980826" },
    { name: "n8n", logo: "https://cdn.brandfetch.io/idO6_6uqJ9/w/600/h/600/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Cloudflare", logo: "https://cdn.brandfetch.io/idJ3Cg8ymG/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1668515610854" },
    { name: "AWS", logo: "https://cdn.brandfetch.io/idVoqFQ-78/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1691083841359" },
    { name: "Zabbix", logo: "https://cdn.brandfetch.io/idMqLPAYOn/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1778041092273" },
    { name: "Kubernetes", logo: "https://cdn.brandfetch.io/idJMXjfNh8/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1693285846319" },
    { name: "Phantom", logo: "https://cdn.brandfetch.io/idf5VaJxyT/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1742483111160" },
];

const AboutSection = () => {
    return (
        <section id="about" className="py-24 text-white sm:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">About me</p>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl drop-shadow-[0_0_30px_rgba(0,0,0,.70)]">
                        Building the foundation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-500">confident delivery.</span>
                    </h2>
                    <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg drop-shadow-[0_0_30px_rgba(0,0,0,.70)]">
                        I&apos;m a Platform Engineer focused on secure, scalable cloud systems. I help teams ship faster by making infrastructure reliable, automation deliberate, and security part of the way software is delivered.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <article className="rounded-3xl border border-white/10 bg-slate-950/65 p-7 shadow-2xl shadow-slate-950/20 backdrop-blur-md lg:col-span-2 sm:p-9">
                        <p className="text-sm font-medium text-cyan-200">How I work</p>
                        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Engineering systems people can depend on.</h3>
                        <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                            My work spans cloud architecture, Linux administration, deployment automation, and production operations. I bring a product-minded approach to platform work: removing friction for developers while protecting the systems and services people rely on.
                        </p>
                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {specialties.map((specialty) => (
                                <div key={specialty} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
                                    <CheckCircle2 className="size-4 shrink-0 text-cyan-300" aria-hidden="true" />
                                    {specialty}
                                </div>
                            ))}
                        </div>
                    </article>

                    <aside className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/15 via-violet-500/15 to-pink-500/15 p-7 shadow-2xl shadow-cyan-950/20 backdrop-blur-md sm:p-9">
                        <p className="text-sm font-medium text-cyan-100">Impact at a glance</p>
                        <div className="mt-8 space-y-7">
                            <div><p className="text-4xl font-bold tracking-tight"><CountUp to={22} duration={1.4} />M<span className="text-cyan-300">+</span></p><p className="mt-1 text-sm text-slate-300">public requests served</p></div>
                            <div className="h-px bg-white/15" />
                            <div><p className="text-4xl font-bold tracking-tight"><CountUp to={30} duration={1.4} />+</p><p className="mt-1 text-sm text-slate-300">containerized deployments</p></div>
                            <div className="h-px bg-white/15" />
                            <div><p className="text-4xl font-bold tracking-tight"><CountUp to={6} duration={1.4} />+</p><p className="mt-1 text-sm text-slate-300">production environments supported</p></div>
                        </div>
                    </aside>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {capabilities.map(({ icon: Icon, title, description }) => (
                        <article key={title} className="group rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-slate-950/80">
                            <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200 group-hover:bg-cyan-300/20"><Icon className="size-5" aria-hidden="true" /></div>
                            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 py-4 backdrop-blur-md">
                    <p className="px-6 pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Tools I work with</p>
                    <div className="skills-marquee" aria-label="Technical skills">
                        <div className="skills-marquee__track">
                            {[...skills, ...skills].map((skill, index) => (
                                <span key={`${skill.name}-${index}`} className="skills-marquee__item">
                                    <Image alt="" aria-hidden="true" className="skills-marquee__logo" src={skill.logo} />
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <a href="#projects" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
                    Explore selected work <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
};

export default AboutSection;
