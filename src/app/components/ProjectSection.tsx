"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const ProjectsData = [
    {
        id: 11,
        title: "SISARE",
        description: "Sistema de Sanciones y Remanentes",
        image: "/images/projects/11-sisare.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
        site: "https://sisare.ieeags,mx/",
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
        description: "A landing page for a science and technology foundation that benefits educational institutions.",
        image: "/images/projects/infoundation.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
        site: "/",
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
        id: 9,
        title: "Infinity Network",
        description: "In progress...",
        image: "/images/projects/1-in-min.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
        site: "/",
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
        id: 8,
        title: "Institutional website: IEE",
        description: "The site allows citizens to access electoral information relevant to the state of Aguascalientes.",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
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
        id: 7,
        title: "Preliminary Election Results Program (PREP)",
        description: "The system for capturing and aggregating votes for the Aguascalientes elections",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
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
        title: "Website: Piixan",
        description: "A GRP-ERP to company Piixan SA de CV based in Odoo",
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
        title: "Website: spina jawelry",
        description: "An ecommerce based in Odoo",
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
        title: "Website: Dr. To Dr. Academy",
        description: "An e-learn plataform based in Odoo",
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
        title: "App: PREP Casilla",
        description: "An app to digitise voting records from polling station locations",
        image: "/images/projects/6-prepcasilla-min.png",
        tag: ["All", "App"],
        git: "https://github.com/byNestorCode",
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
        title: "Repo: Solana Docker Dev",
        description: "This 🐙 repo is to help devs in their 🪟 windows 💻 development environment.",
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
        title: "Repo: DB Containers",
        description: "A repository to help you in the creation of a database server with an administrator through phpmyadmin. In the future this repo will manage some types of db.",
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
        <>
            <section className='mt-18 mb-12 min-h-screen' id='projects'>
                <h2 className='mx-auto text-4xl md:text-5xl font-extrabold w-full max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl bg-slate-950 bg-opacity-65 backdrop-blur-md border border-white/10 shadow-lg px-6 py-6 text-center' id='projects'>
                    Check Out My Projects
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
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.git}
                            previewUrl={project.site}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProjectSection;