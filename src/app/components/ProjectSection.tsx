"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

export const ProjectsData = [
    {
        id: 15,
        title: "Honey Velvet",
        subtitle: "Creative Bakery & Specialty Coffee",
        description: "A warm and inviting digital experience designed to showcase Honey Velvet's creative pastries, specialty coffee, New York-style cookies, and custom cakes while bringing its unique personality closer to customers.",
        image: "/images/projects/honey-velvet.png",
        tag: ["All", "Web"],
        git: "https://github.com/bynestorcode",
        site: "https://honey-velvet-dreams.lovable.app",
        technologies: [
            {
                name: "Next.js",
                color: "default",
                logo: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            },
            {
                name: "TypeScript",
                color: "primary",
                logo: "https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772354699784"
            },
            {
                name: "Tailwind",
                color: "primary",
                logo: "https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1687779047045"
            },
            {
                name: "Docker",
                color: "default",
                logo: "https://cdn.brandfetch.io/id5_eOiB6T/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1707508247180"
            },
        ]
    },
    {
        id: 14,
        title: "Sonora Fresnillo",
        subtitle: "Official Music & Entertainment Platform",
        description: "Modern digital platform designed to showcase the band's identity, music, upcoming events, and legacy while creating a direct connection between La Internacional Sonora Fresnillo and its audience.",
        image: "/images/projects/sonora-fresnillo.png",
        tag: ["All", "Web"],
        git: "https://github.com/bynestorcode",
        site: "https://sonorafresnillo.infinitynetwork.mx/",
        technologies: [
            {
                name: "Next.js",
                color: "default",
                logo: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            },
            {
                name: "TypeScript",
                color: "primary",
                logo: "https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772354699784"
            },
            {
                name: "Tailwind",
                color: "primary",
                logo: "https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1687779047045"
            },
            {
                name: "Docker",
                color: "default",
                logo: "https://cdn.brandfetch.io/id5_eOiB6T/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1707508247180"
            },
        ]
    },
    {
        id: 13,
        title: "Voto en el Extranjero",
        subtitle: "Overseas Voting Platform",
        description: "Digital electoral platform designed to provide citizens living abroad with accessible information and services related to overseas voting, supporting transparency and informed participation throughout the electoral process.",
        image: "/images/projects/10-votoextranjero.png",
        tag: ["All", "Web"],
        git: "https://github.com/ieeags",
        site: "https://votoextranjero.ieeags.mx/",
        technologies: [
            {
                name: "Next.js",
                color: "default",
                logo: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            },
            {
                name: "TypeScript",
                color: "primary",
                logo: "https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772354699784"
            },
            {
                name: "Tailwind",
                color: "primary",
                logo: "https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1687779047045"
            },
            {
                name: "Docker",
                color: "default",
                logo: "https://cdn.brandfetch.io/id5_eOiB6T/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1707508247180"
            },
        ]
    },
    {
        id: 9,
        title: "Micrositio informativo PREP",
        subtitle: "Electoral Information Platform",
        description: "Public-facing platform providing citizens with accessible information about the Preliminary Election Results Program, including electoral results, documentation, and key information about the process.",
        image: "/images/projects/micrositioprep.png",
        tag: ["All", "Web"],
        git: "https://github.com/ieeags",
        site: "https://prep.ieeags.mx/",
        technologies: [
            {
                name: "Django",
                color: "success",
                logo: "https://cdn.brandfetch.io/idnYlnDpTD/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1772748727084"
            },
            {
                name: "Next.js",
                color: "default",
                logo: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            },
            {
                name: "Python",
                color: "warning",
                logo: "https://cdn.brandfetch.io/idbpOFBgcc/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772193840871"
            },
            {
                name: "Docker",
                color: "default",
                logo: "https://cdn.brandfetch.io/id5_eOiB6T/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1707508247180"
            },
        ]
    },
    {
        id: 7,
        title: "SISARE",
        subtitle: "Electoral Compliance Management System",
        description: "Internal management platform for administering electoral sanctions, financial obligations, regulatory processes, and compliance workflows.",
        image: "/images/projects/sisare.png",
        tag: ["All", "Web"],
        git: "https://github.com/ieeags",
        site: "https://sisare.ieeags.mx/",
        technologies: [
            {
                name: "Django",
                color: "success",
                logo: "https://cdn.brandfetch.io/idnYlnDpTD/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1772748727084"
            },
            {
                name: "Python",
                color: "warning",
                logo: "https://cdn.brandfetch.io/idbpOFBgcc/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772193840871"
            },
            {
                name: "Tailwind",
                color: "primary",
                logo: "https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1687779047045"
            },
            {
                name: "Docker",
                color: "default",
                logo: "https://cdn.brandfetch.io/id5_eOiB6T/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1707508247180"
            },
        ]
    },
    {
        id: 10,
        title: "Infinity Foundation",
        subtitle: "Digital Platform for Social Impact",
        description: "Digital platform for a nonprofit initiative focused on expanding access to technology, education, and digital opportunities for students and communities.",
        image: "/images/projects/infoundation_.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
        site: "https://foundation.infinitynetwork.mx/",
        technologies: [
            {
                name: "Next.js",
                color: "default",
                logo: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            },
            {
                name: "TypeScript",
                color: "primary",
                logo: "https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772354699784"
            },
            {
                name: "Tailwind",
                color: "primary",
                logo: "https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1687779047045"
            },
        ]
    },
    {
        id: 12,
        title: "Infinity Network",
        subtitle: "Technology & Innovation Platform",
        description: "Technology and innovation platform focused on developing digital solutions, fostering technical communities, and creating opportunities for learning, collaboration, and digital transformation.",
        image: "/images/projects/1-in-min.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
        site: "https://infinitynetwork.mx/",
        technologies: [
            {
                name: "Next.js",
                color: "default",
                logo: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            },
            {
                name: "TypeScript",
                color: "primary",
                logo: "https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772354699784"
            },
            {
                name: "Tailwind",
                color: "primary",
                logo: "https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1687779047045"
            },
            {
                name: "Docker",
                color: "default",
                logo: "https://cdn.brandfetch.io/id5_eOiB6T/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1707508247180"
            },
        ]
    },
    {
        id: 8,
        title: "IEE Institutional Website",
        subtitle: "Electoral Authority Digital Platform",
        description: "Official digital platform for the Instituto Estatal Electoral, providing citizens with electoral information, institutional resources, transparency content, and access to public services.",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        git: "https://github.com/ieeags",
        site: "https://ieeags.mx/",
        technologies: [
            {
                name: "Django",
                color: "success",
                logo: "https://cdn.brandfetch.io/idnYlnDpTD/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1772748727084"
            },
            {
                name: "Python",
                color: "warning",
                logo: "https://cdn.brandfetch.io/idbpOFBgcc/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772193840871"
            },
            {
                name: "Docker",
                color: "default",
                logo: "https://cdn.brandfetch.io/id5_eOiB6T/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1707508247180"
            },
        ]
    },
    {
        id: 11,
        title: "Preliminary Election Results Program",
        subtitle: "Mission-Critical Electoral System",
        description: "High-availability electoral results platform that processed more than 22 million public requests during election day, providing citizens with timely and reliable access to preliminary election results.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        git: "https://github.com/ieeags",
        site: "https://prep2024.ieeags.mx/",
        technologies: [
            {
                name: "Django",
                color: "success",
                logo: "https://cdn.brandfetch.io/idnYlnDpTD/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1772748727084"
            },
            {
                name: "Python",
                color: "warning",
                logo: "https://cdn.brandfetch.io/idbpOFBgcc/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772193840871"
            },
            {
                name: "Docker",
                color: "default",
                logo: "https://cdn.brandfetch.io/id5_eOiB6T/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1707508247180"
            },
        ]
    },
    {
        id: 6,
        title: "Piixan",
        subtitle: "Enterprise ERP Platform",
        description: "Custom Odoo-based ERP solution streamlining business operations, inventory management, and enterprise workflows.",
        image: "/images/projects/4-piixan-min.png",
        tag: ["All", "Web", "Odoo"],
        git: "https://github.com/byNestorCode",
        site: "/",
        technologies: [
            {
                name: "odoo",
                color: "secondary",
                logo: "https://cdn.brandfetch.io/idWjsO6xZS/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1771294760411"
            },
            {
                name: "PostgreSQL",
                color: "default",
                logo: "https://cdn.brandfetch.io/idjSeCeMle/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772301524158"
            }
        ]
    },
    {
        id: 5,
        title: "Spina Jawelry",
        subtitle: "E-Commerce Platform",
        description: "Custom Odoo e-commerce solution focused on online sales, inventory synchronization, and customer experience.",
        image: "/images/projects/5-spina-min.png",
        tag: ["All", "Web", "Odoo"],
        git: "https://github.com/byNestorCode",
        site: "/",
        technologies: [
            {
                name: "odoo",
                color: "secondary",
                logo: "https://cdn.brandfetch.io/idWjsO6xZS/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1771294760411"
            },
            {
                name: "PostgreSQL",
                color: "default",
                logo: "https://cdn.brandfetch.io/idjSeCeMle/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772301524158"
            }
        ]
    },
    {
        id: 4,
        title: "Dr. To Dr. Academy",
        subtitle: "Learning Management Platform",
        description: "Odoo-based e-learning platform providing online education, course management, and student engagement tools.",
        image: "/images/projects/9-drtodracademy.png",
        tag: ["All", "Web", "Odoo"],
        git: "https://github.com/byNestorCode",
        site: "/",
        technologies: [
            {
                name: "odoo",
                color: "secondary",
                logo: "https://cdn.brandfetch.io/idWjsO6xZS/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1771294760411"
            },
            {
                name: "PostgreSQL",
                color: "default",
                logo: "https://cdn.brandfetch.io/idjSeCeMle/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772301524158"
            }
        ]
    },
    {
        id: 3,
        title: "PREP Casilla",
        subtitle: "Election Operations Mobile App",
        description: "Mobile application designed to digitize polling station records and streamline the collection and transmission of electoral information during statewide elections.",
        image: "/images/projects/6-prepcasilla-min.png",
        tag: ["All", "App"],
        git: "https://github.com/ieeags",
        site: "/",
        technologies: [
            {
                name: "React Native",
                color: "default",
                logo: "https://cdn.brandfetch.io/idTpJSSBPD/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1772359364711"
            },
            {
                name: "Expo",
                color: "default",
                logo: "https://cdn.brandfetch.io/idzGRYC3u5/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1667740799142"
            }
        ]
    },
    {
        id: 2,
        title: "Solana Docker Dev",
        subtitle: "Developer Experience",
        description: "Containerized Solana development environment simplifying blockchain onboarding.",
        image: "/images/projects/7-reposolana-min.png",
        tag: ["All", "Repo"],
        git: "https://github.com/byNestorCode/solana-docker-dev",
        site: "/",
        technologies: [
            {
                name: "GitHub",
                color: "default",
                logo: "https://cdn.brandfetch.io/idZAyF9rlg/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1719469980739"
            },
            {
                name: "YAML",
                color: "default",
                logo: "https://cdn.brandfetch.io/idC_cuox92/w/250/h/230/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1768410768861"
            },
            {
                name: "Solana",
                color: "secondary",
                logo: "https://cdn.brandfetch.io/ide0NUuTHO/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668516395705"
            },
        ]
    },
    {
        id: 1,
        title: "DB Containers",
        subtitle: "Infrastructure Automation",
        description: "Reusable Docker database environments for standardized development workflows.",
        image: "/images/projects/8-repodb-min.png",
        tag: ["All", "Repo"],
        git: "https://github.com/byNestorCode/db-containers",
        site: "/",
        technologies: [
            {
                name: "GitHub",
                color: "default",
                logo: "https://cdn.brandfetch.io/idZAyF9rlg/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1719469980739"
            },
            {
                name: "YAML",
                color: "default",
                logo: "https://cdn.brandfetch.io/idC_cuox92/w/250/h/230/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1768410768861"
            },
        ]
    },
]

const ProjectSection: React.FC = () => {

    const [tag, setTag] = useState<string>('All');
    const handleTagChange = (newTag?: string) => {
        if (newTag) {
            setTag(newTag);
        }
    };

    const filteredProjects = ProjectsData.filter((project) =>
        project.tag.includes(tag)
    ).sort((a, b) => b.id - a.id);

    return (
        <section className='mt-18 mb-12 min-h-screen' id='projects'>
            <h2 className='mx-auto text-4xl md:text-5xl font-extrabold w-full max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl bg-slate-950 bg-opacity-65 backdrop-blur-md border border-white/10 shadow-lg px-6 py-6 text-center'>
                Featured Engineering Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                {/* <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>
                    All
                </button>
                <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer'>
                    Web
                </button> */}
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === 'All'}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === 'Web'}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="App"
                    isSelected={tag === 'App'}
                />
                {/* <ProjectTag
                    onClick={handleTagChange}
                    name="Odoo"
                    isSelected={tag === 'Odoo'}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Repo"
                    isSelected={tag === 'Repo'}
                /> */}
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.git}
                        previewUrl={project.site}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
