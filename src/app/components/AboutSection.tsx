'use client'
import React, { useTransition, useState } from 'react';
// import Image from 'next/image';
import TabButton from './TabButton';
import DecryptedText from './Code';
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { Tooltip } from '@nextui-org/react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell} from "@heroui/table";

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
                <li>1 year as Proyect Manajer in LABSOL</li>
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
        <section className='text-white min-h-screen' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                {/* <Image 
                    src={'/images/programmer.png'}
                    width={500}
                    height={500}
                    alt='About me'
                /> */}
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About me
                    </h2>
                    <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
                        <DecryptedText
                            text="I am a young technology enthusiast and I always ask myself: how does it work? In my mind I have always taken it apart to find out how it works. I love a challenge and am constantly looking to learn on a daily basis. DevSecOps by profession and growing data analyst, possibly an IA?."
                            animateOn="view"
                            revealDirection="start"
                            sequential={true}
                            speed={10}
                        />
                    </div>
                    {/* <p className='text-base lg:text-lg'>
                        I am a young technology enthusiast and I always ask myself: how does it work? In my mind I have always taken it apart to find out how it works. I love a challenge and am constantly looking to learn on a daily basis. DevSecOps by profession and growing data analyst, possibly an IA?.
                        </p> */}
                    {/* <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>
                            {" "}
                            Experience{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>
                            {" "}
                            Certs{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div> */}
                </div>
                <div className="max-w-[100%] gap-2 grid grid-cols-12 grid-rows-3">
                    <Card className="col-span-12 md:col-span-6">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Experience</p>
                            <small className="text-default-500">a brief summary of my career</small>
                            <h4 className="font-bold text-large">Jobs</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 px-6 justify-center">
                            <Table aria-label="table" selectionMode="single" hideHeader removeWrapper>
                                <TableHeader>
                                    <TableColumn>Jobs</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>3+ years as DevSecOps</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>2 years as Proyect Manajer in LABSOL and DEDICA Fundation</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>1 year as coordinator at a government institute</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardBody>
                    </Card>
                    <Card className="col-span-12 md:col-span-6">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Skills</p>
                            <small className="text-default-500">Technical</small>
                            <h4 className="font-bold text-large">Fullstack and DevSecOps</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 px-6 justify-center">
                            <div className="gap-2 grid grid-cols-4 grid-rows-2 items-center justify-items-center">
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
                                        src="https://cdn.brandfetch.io/idZAyF9rlg/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
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
                            </div>
                        </CardBody>
                    </Card>
                    {/* <Card className="col-span-12 md:col-span-6">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Education</p>
                            <small className="text-default-500">12 Tracks</small>
                            <h4 className="font-bold text-large">Frontend Radio</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="https://heroui.com/images/hero-card-complete.jpeg"
                                width={270}
                            />
                        </CardBody>
                    </Card>
                    <Card className="col-span-12 md:col-span-6">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Certs</p>
                            <small className="text-default-500">12 Tracks</small>
                            <h4 className="font-bold text-large">Frontend Radio</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="https://heroui.com/images/hero-card-complete.jpeg"
                                width={270}
                            />
                        </CardBody>
                    </Card> */}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;