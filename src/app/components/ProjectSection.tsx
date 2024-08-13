"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const ProjectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project ONE description",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        git: "https://github.com/byNestorCode",
        site: "/",
    },
    {
        id: 2,
        title: "React Portfolio Website",
        description: "Project TWO description",
        image: "/images/projects/2.png",
        tag: ["All", "Desktop"],
        git: "https://github.com/byNestorCode",
        site: "/",
    },
    {
        id: 2,
        title: "React Portfolio Website",
        description: "Project Tree description",
        image: "/images/projects/3.png",
        tag: ["All", "Desktop"],
        git: "https://github.com/byNestorCode",
        site: "/",
    }
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
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
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