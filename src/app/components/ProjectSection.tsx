"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const ProjectsData = [
    {
        id: 1,
        title: "Infinity Network",
        description: "In progress...",
        image: "/images/projects/1-in-min.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
        site: "/",
    },
    {
        id: 2,
        title: "Institutional website: IEE",
        description: "The site allows citizens to access electoral information relevant to the state of Aguascalientes.",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
        site: "https://ieeags.mx/",
    },
    {
        id: 3,
        title: "Preliminary Election Results Program (PREP)",
        description: "The system for capturing and aggregating votes for the Aguascalientes elections",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
        site: "https://prep2024.ieeags.mx/",
    },
    {
        id: 4,
        title: "Website: Piixan",
        description: "A GRP-ERP to company Piixan SA de CV based in Odoo",
        image: "/images/projects/4-piixan-min.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
        site: "https://prep2024.ieeags.mx/",
    },
    {
        id: 5,
        title: "Website: spina jawelry",
        description: "An ecommerce based in Odoo",
        image: "/images/projects/5-spina-min.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
        site: "https:spinajewelry.mx/",
    },
    {
        id: 6,
        title: "App: PREP Casilla",
        description: "An app to digitise voting records from polling station locations",
        image: "/images/projects/6-prepcasilla-min.png",
        tag: ["All", "App"],
        git: "https://github.com/byNestorCode",
        site: "/",
    },
    {
        id: 7,
        title: "Repo: Solana Docker Dev",
        description: "This 🐙 repo is to help devs in their 🪟 windows 💻 development environment.",
        image: "/images/projects/7-reposolana-min.png",
        tag: ["All", "Repo"],
        git: "https://github.com/byNestorCode/solana-docker-dev",
        site: "/",
    },
    {
        id: 8,
        title: "Repo: DB Containers",
        description: "A repository to help you in the creation of a database server with an administrator through phpmyadmin. In the future this repo will manage some types of db.",
        image: "/images/projects/8-repodb-min.png",
        tag: ["All", "Repo"],
        git: "https://github.com/byNestorCode/db-containers",
        site: "/",
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
    );

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12' id='projects'>
                Check out my projects
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
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        gitUrl={project.git}
                        previewUrl={project.site} />
                ))}
            </div>
        </>
    );
};

export default ProjectSection;