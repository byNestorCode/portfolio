'use client'
import React, { useTransition, useState } from 'react';
// import Image from 'next/image';
import TabButton from './TabButton';
import DecryptedText from './Code';
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { Tooltip } from '@nextui-org/react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/table";
import CountUp from './CountUp';

// Define los tipos para los datos de las pestañas
interface TabData {
    title: string;
    id: string;
    content: React.ReactNode;
}

const TAB_DATA = [
    {
        tite: 'Skills',
        id: 'skills',
        content: (
            <ul>
                <li>Next JS</li>
                <li>Django</li>
                <li>React + Native</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Fullstack Academy of Code</li>
                <li>University of California, Santa Cruz</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul>
                <li>3+ years as DevSecOps</li>
                <li>1 year as Coordinator in PREP Project </li>
                <li>1 year as Proyect Manager in LABSOL</li>
            </ul>
        ),
    }
]

const AboutSection: React.FC = () => {
    const [tab, setTab] = useState<string>('experience');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white min-h-screen" id="about">
            <div className="mx-auto mb-12 w-full max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl bg-slate-950 bg-opacity-65 backdrop-blur-md border border-white/10 shadow-lg px-6 py-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                    About Me
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Building scalable systems, leading technical projects,
                    and delivering high-quality digital solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="w-full flex flex-col gap-2 justify-center items-center">
                    <Card className="w-full md:max-w-[100%] lg:min-w-[100%] col-span-12 md:col-span-12 rounded-2xl bg-slate-950 bg-opacity-65  backdrop-blur-md border border-white/10 shadow-lg text-white">
                        <CardHeader className="mt-2 pb-0 pt-2 px-4 flex-col items-center">
                            <p className="text-2xl text-bold uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Experience</p>
                            <small className="text-default-500">a brief summary of my career</small>
                            {/* <h4 className="font-tiny text-large">Jobs</h4> */}
                        </CardHeader>
                        <CardBody className="mx-auto lg:max-w-[60%] overflow-visible py-2 px-6 justify-center">
                            <Table aria-label="table" selectionMode="single" hideHeader removeWrapper>
                                <TableHeader>
                                    <TableColumn>Jobs</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>4+ years as DevSecOps</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>2 years as Project Manager in LABSOL and DEDICA Fundation</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>1 year as coordinator at a government institute</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardBody>
                    </Card>
                    <Card className="w-full md:max-w-[100%] lg:min-w-[100%] col-span-12 md:col-span-12 rounded-2xl bg-slate-950 bg-opacity-65  backdrop-blur-md border border-white/10 shadow-lg text-white">
                        <CardHeader className="mt-2 pb-0 pt-2 px-4 flex-col items-center">
                            <p className="text-2xl text-bold uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</p>
                            <small className="text-default-500">Technical</small>
                            {/* <h4 className="font-tiny text-large">Fullstack and DevSecOps</h4> */}
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 px-6 justify-center">
                            <div className="mx-auto grid w-fit grid-cols-4 gap-3 place-items-center rounded-xl p-3">
                                <Tooltip content="Nextjs" showArrow={true} color='foreground'>
                                    <Image
                                        alt="Nextjs logo"
                                        className="object-cover rounded-full"
                                        src="https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                                        width={50}
                                    />
                                </Tooltip>
                                <Tooltip content="django" showArrow={true} color='foreground'>
                                    <Image
                                        alt="Django logo"
                                        className="object-cover rounded-full"
                                        src="https://cdn.brandfetch.io/idnYlnDpTD/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
                                        width={50}
                                    />
                                </Tooltip>
                                <Tooltip content="Docker" showArrow={true} color='foreground'>
                                    <Image
                                        alt="Docker logo"
                                        className="object-cover rounded-full"
                                        src="https://cdn.brandfetch.io/id5_eOiB6T/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
                                        width={50}
                                    />
                                </Tooltip>
                                <Tooltip content="Python" showArrow={true} color='foreground'>
                                    <Image
                                        alt="python"
                                        className="object-cover rounded-xl"
                                        src="https://cdn.brandfetch.io/idbpOFBgcc/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                                        width={50}
                                    />
                                </Tooltip>
                                <Tooltip content="Solana" showArrow={true} color='foreground'>
                                    <Image
                                        alt="Solana logo"
                                        className="rounded-full object-cover"
                                        src="https://cdn.brandfetch.io/ide0NUuTHO/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
                                        width={50}
                                    />
                                </Tooltip>
                                <Tooltip content="Internet Computer Protocol" showArrow={true} color='foreground'>
                                    <Image
                                        alt="ICP logo"
                                        className="rounded-full object-cover"
                                        src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiZGZpbml0eVwvZmlsZVwvQ3ZFa3Y5eFhQOGQ3dW83ZkxFMmkucG5nIn0:dfinity:WGPFvOEBt8LexZ0568duC01k5g99_6IN-Ju8n3WvJhE?width=800&format=webp&quality=100"
                                        width={50}
                                    />
                                </Tooltip>
                                <Tooltip content="React Native" showArrow={true} color='foreground'>
                                    <Image
                                        alt="React logo"
                                        className="rounded-full object-cover"
                                        src="https://cdn.brandfetch.io/idTpJSSBPD/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"
                                        width={50}
                                    />
                                </Tooltip>
                                <Tooltip content="Snyk" showArrow={true} color='foreground'>
                                    <Image
                                        alt="SNYK logo"
                                        className="rounded-full object-cover"
                                        src="https://cdn.brandfetch.io/id8lDQ6AMj/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
                                        width={50}
                                    />
                                </Tooltip>
                                <Tooltip content="GitHub" showArrow={true} color='foreground'>
                                    <Image
                                        alt="GitHub logo"
                                        className="rounded-full object-cover"
                                        src="https://cdn.brandfetch.io/idZAyF9rlg/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1719469980826"
                                        width={50}
                                    />
                                </Tooltip>
                                <Tooltip content="n8n" showArrow={true} color='foreground'>
                                    <Image
                                        alt="n8n logo"
                                        className="rounded-full object-cover"
                                        src="https://cdn.brandfetch.io/idO6_6uqJ9/w/600/h/600/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"
                                        width={50}
                                    />
                                </Tooltip>
                                <Tooltip content="Cloudflare" showArrow={true} color='foreground'>
                                    <Image
                                        alt="Cloudflare"
                                        className="rounded-full object-cover"
                                        src="https://cdn.brandfetch.io/idJ3Cg8ymG/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1668515610854"
                                        width={50}
                                    />
                                </Tooltip>
                                <Tooltip content="aws" showArrow={true} color='foreground'>
                                    <Image
                                        alt="aws"
                                        className="rounded-full object-cover"
                                        src="https://cdn.brandfetch.io/idVoqFQ-78/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1691083841359"
                                        width={50}
                                    />
                                </Tooltip>
                                
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <div className="flex flex-col justify-center gap-2 px-4 py-6 lg:px-6 rounded-2xl bg-slate-950 bg-opacity-65 backdrop-blur-md border border-white/10 shadow-lg">
                    <p className="mx-auto text-center text-2xl text-bold uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Profile
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Software Engineer specialized in designing and developing
                        scalable, high-performance web systems.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Strong background in infrastructure, security,
                        and project leadership, focused on delivering
                        reliable, production-ready solutions.
                    </p>
                    {/* <DecryptedText
                            text="I'm a young technology enthusiast, and I'm always asking myself: how does it work? In my mind, I've always taken things apart to figure out how they work. I love a  challenge and I'm constantly looking to learn every day. I work in DevSecOps and I'm a growing data analyst—maybe even I'm an AI?"
                            animateOn="view"
                            revealDirection="start"
                            sequential={true}
                            speed={10}
                        /> */}
                    {/* HIGHLIGHTS */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">
                            Core Strengths
                        </h4>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center gap-2">
                                <span>🚀</span> System Architecture & Scalability
                            </li>
                            <li className="flex items-center gap-2">
                                <span>🔐</span> Security-first Development
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📊</span> Technical Project Leadership
                            </li>
                            <li className="flex items-center gap-2">
                                <span>⚙️</span> Cloud & DevOps Automation
                            </li>
                            <li className="flex items-center gap-2">
                                <span>🧠</span> AI & Workflow Optimization
                            </li>
                        </ul>
                    </div>
                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                        <div>
                            <p className="text-3xl font-bold text-white text-center">
                                <CountUp
                                    from={0}
                                    to={6}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />+
                            </p>
                            <p className="text-sm text-gray-400 text-center">
                                Years Experience
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white text-center">
                                <CountUp
                                    from={0}
                                    to={20}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />+
                            </p>
                            <p className="text-sm text-gray-400 text-center">
                                Projects
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white text-center">
                                <CountUp
                                    from={0}
                                    to={10}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />+
                            </p>
                            <p className="text-sm text-gray-400 text-center">
                                Technologies
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#projects" className="mt-24 flex flex-col items-center text-gray-400 hover:text-white transition animate-bounce">
                <span className="text-xs uppercase tracking-widest mb-1">
                    See my projects
                </span>
                <span className="text-xl">↓</span>
            </a>
        </section>
    );
};

export default AboutSection;