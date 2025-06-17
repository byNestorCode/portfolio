"use client"
import React, { useTransition, useState  } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import DecryptedText from './Code';

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
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image 
                    src={'/images/programmer.png'}
                    width={500}
                    height={500}
                    alt='About me'
                />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About me
                    </h2>
                    <div style={{ marginTop: '4rem' }}>
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
                    <div className="flex flex-row justify-start mt-8">
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
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;