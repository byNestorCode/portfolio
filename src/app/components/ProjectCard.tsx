import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import SpotlightCard from './SpotlightCard';
import { Card, CardHeader, CardFooter, CardBody } from '@nextui-org/react';
import { Chip } from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';

interface Technologies {
        name: string,
        color: string,
        logo: string,
}

interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string,
    previewUrl: string,
    technologies: Technologies[],
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl, technologies }) => {
    return (
        <div>
            <div className="h-64 md:h-64 rounded-t-xl relative group" style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link href={`${gitUrl}`} className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                        <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                    </Link>
                    <Link href={`${previewUrl}`} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                        <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                    </Link>
                </div>
            </div>
            {/* <SpotlightCard className="custom-spotlight-card mt-3 rounded-b-xl rounded-t-none h-52 flex flex-col" spotlightColor="rgba(0, 229, 255, 0.5)">
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#ADB7BE]'>{description}</p>
                <Chip
                    avatar={<Avatar name="JW" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />}
                    variant="flat"
                    className='float-end'
                >
                    {technologies}
                </Chip>
            </SpotlightCard> */}
            <SpotlightCard
                className="custom-spotlight-card mt-3 h-64 flex flex-col justify-between rounded-b-xl rounded-t-none p-4"
                spotlightColor="rgba(0, 229, 255, 0.5)"
            >
                {/* Content */}
                <div>
                    <h5 className="text-xl font-semibold mb-2">
                        {title}
                    </h5>
                    <p className="text-[#ADB7BE] text-sm leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 justify-end mt-4">
                    {technologies.map((tech) => (
                        <Chip
                            avatar={<Avatar name={tech.name} src={tech.logo}/>}
                            key={tech.name}
                            variant="shadow"
                            size="sm"
                            color={tech.color as "default"}
                        >
                            {tech.name}
                        </Chip>
                    ))}
                </div>

            </SpotlightCard>
        </div>
    );
};

export default ProjectCard;