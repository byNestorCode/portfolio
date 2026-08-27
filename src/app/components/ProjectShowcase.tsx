"use client";

import { ArrowUpRight, ExternalLink, FolderGit2, Github, LockKeyhole, Pin } from "lucide-react";
import { useMemo, useState } from "react";
import { Image } from "@heroui/react";
import { ProjectsData } from "./ProjectSection";

type Project = (typeof ProjectsData)[number];
type Filter = "All" | "Web" | "App" | "Odoo" | "Repo";

const filters: Filter[] = ["All", "Web", "App", "Odoo", "Repo"];

const impactByProjectId: Record<number, string> = {
    13: "Civic-tech · Overseas voting",
    9: "Civic-tech · Public election information",
    7: "Compliance · Electoral operations",
    11: "Reliability · Preliminary results",
    3: "Mobile · Polling-station operations",
    2: "Developer experience · Solana tooling",
    1: "Developer experience · Database containers",
};

const technologyStyles: Record<string, string> = {
    primary: "border-blue-300/45 bg-blue-400/10 text-blue-100 shadow-[0_0_18px_rgba(96,165,250,0.16)]",
    success: "border-emerald-300/45 bg-emerald-400/10 text-emerald-100 shadow-[0_0_18px_rgba(52,211,153,0.16)]",
    warning: "border-amber-300/45 bg-amber-400/10 text-amber-100 shadow-[0_0_18px_rgba(251,191,36,0.16)]",
    secondary: "border-violet-300/45 bg-violet-400/10 text-violet-100 shadow-[0_0_18px_rgba(167,139,250,0.16)]",
    default: "border-slate-300/35 bg-slate-300/10 text-slate-100 shadow-[0_0_18px_rgba(203,213,225,0.12)]",
};

function TechnologyPill({ technology }: { technology: Project["technologies"][number] }) {
    const style = technologyStyles[technology.color] ?? technologyStyles.default;

    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs ${style}`}>
            <Image alt="" aria-hidden="true" className="size-4 shrink-0 object-contain" src={technology.logo} />
            {technology.name}
        </span>
    );
}

function ProjectActions({ project }: { project: Project }) {
    const hasPreview = project.site !== "/";
    const isOrganization = project.git.includes("github.com/ieeags");

    return (
        <div className="flex flex-wrap items-center gap-3 pt-5 text-sm font-semibold">
            {hasPreview ? (
                <a href={project.site} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-cyan-200 transition hover:text-white">
                    View project <ExternalLink className="size-4" aria-hidden="true" />
                </a>
            ) : (
                <span className="inline-flex items-center gap-1.5 text-slate-500"><LockKeyhole className="size-4" aria-hidden="true" /> Private project</span>
            )}
            <a href={project.git} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-white">
                <FolderGit2 className="size-4" aria-hidden="true" /> {isOrganization ? "Organization" : "Source"}
            </a>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/65 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-slate-950/80">
            <div className="relative h-52 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${project.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
                    {impactByProjectId[project.id] ?? project.subtitle}
                </span>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <TechnologyPill key={technology.name} technology={technology} />
                    ))}
                </div>
                <ProjectActions project={project} />
            </div>
        </article>
    );
}

export default function ProjectShowcase() {
    const [filter, setFilter] = useState<Filter>("All");
    const featuredProject = ProjectsData.find((project) => project.id === 13)!;
    const projects = useMemo(
        () => ProjectsData.filter((project) => project.id !== featuredProject.id && project.tag.includes(filter)).sort((a, b) => b.id - a.id),
        [filter, featuredProject.id],
    );

    return (
        <section id="projects" className="py-24 text-white sm:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-3xl drop-shadow-[0_0_30px_rgba(0,0,0,.70)]">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Selected engineering work</p>
                        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Systems that serve people, teams, and critical operations.</h2>
                        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">A curated selection of civic-tech platforms, cloud systems, and developer tooling built with reliability and practical impact in mind.</p>
                    </div>
                    <a href="https://github.com/bynestorcode" target="_blank" rel="noreferrer" aria-label="View more projects on Néstor Vázquez's GitHub profile" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-cyan-200/45 bg-cyan-300/15 px-5 py-2.5 text-sm font-semibold text-cyan-50 shadow-[0_0_22px_rgba(103,232,249,0.16)] transition hover:border-cyan-100 hover:bg-cyan-200/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
                        <Github className="size-4" aria-hidden="true" /> More on GitHub <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-2" aria-label="Filter projects">
                    {filters.map((item) => {
                        const count = item === "All" ? ProjectsData.length : ProjectsData.filter((project) => project.tag.includes(item)).length;
                        const selected = filter === item;
                        return <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${selected ? "border-cyan-300/60 bg-cyan-300/15 text-white" : "border-white/10 bg-slate-950/50 text-slate-400 hover:border-white/30 hover:text-white"}`}>{item} <span className="ml-1 text-xs opacity-70">{count}</span></button>;
                    })}
                </div>

                <article className="mt-8 grid overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-950/70 shadow-2xl shadow-cyan-950/20 backdrop-blur-md lg:grid-cols-2">
                    <div className="relative min-h-72 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(90deg, rgba(2, 6, 23, 0.05), rgba(2, 6, 23, 0.55)), url(${featuredProject.image})` }}>
                        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-amber-200/50 bg-slate-950/85 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.25)] backdrop-blur-md">
                            <Pin className="size-3.5 text-amber-300" aria-hidden="true" />
                            Latest project
                        </span>
                    </div>
                    <div className="p-7 sm:p-10">
                        <p className="text-sm font-medium text-cyan-200">Featured case study · {impactByProjectId[featuredProject.id]}</p>
                        <h3 className="mt-3 text-3xl font-bold">{featuredProject.title}</h3>
                        <p className="mt-5 leading-7 text-slate-300">{featuredProject.description}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {featuredProject.technologies.map((technology) => <TechnologyPill key={technology.name} technology={technology} />)}
                        </div>
                        <ProjectActions project={featuredProject} />
                    </div>
                </article>

                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
                </div>
            </div>
        </section>
    );
}
