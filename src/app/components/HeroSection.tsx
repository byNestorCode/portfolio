"use client"
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Orb from "./Orb";

const HeroSection = () => {
    return (
        <section id="welcome" className="h-screen place-self-center flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left order-2 xl:order-none drop-shadow-[0_0_30px_rgba(0,0,0,.70)]">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Building secure, scalable cloud platforms.
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                '👋🏼 Hi there!',
                                1000,
                                `I'm Néstor 🚀`,
                                1000,
                                'Robotics 🤖 God',
                                1000,
                                'An 🧠 AI?',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{
                                fontSize: "1em",
                                display: "inline-block"
                            }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-center max-w-[80%] mx-auto">
                        Platform Engineer specializing in DevSecOps, Site Reliability, Cloud Infrastructure, and mission-critical systems.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="mailto:hola@nestorvazquez.mx?subject=✅🚀%20We%20want%20you!" target="_blank" rel="noopener noreferrer" className="
                                px-6 py-3
                                w-full sm:w-fit
                                rounded-full
                                bg-gradient-to-br
                                from-blue-500 via-purple-500 to-pink-500
                                hover:from-blue-600 hover:via-purple-600 hover:to-pink-600
                                transition-all duration-300
                                text-white text-center"
                        >
                            Contact Me
                        </a>

                        <a
                            href="https://rxresu.me/rocketmx_/cv-nestor-devsecops"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white text-center">
                                Download CV
                            </span>
                        </a>
                        <a
                            href="https://github.com/bynestorcode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-slate-500 via-purple-500 to-green-500"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white text-center">
                                View GitHub
                            </span>
                        </a>
                        {/* <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                <a
                                    href="https://drive.google.com/file/d/1-68hqKVNMSmqC-co5xRQWE7qPdxzBgQQ/view?usp=sharing"
                                    target="_blank"
                                >
                                    Download CV
                                </a>
                            </span>
                        </button> */}
                    </div>
                    <a href="#about" className="mt-10 flex flex-col items-center text-gray-400 hover:text-white transition animate-bounce">
                        <span className="text-xs uppercase tracking-widest mb-1">
                            Scroll Down
                        </span>
                        <span className="text-xl">↓</span>
                    </a>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-gradient-to-tl from-sky-900 to-slate-600 w-[250px] h-[250px] lg:w-[375px] lg:h-[375px] relative mb-10">
                        <Image
                            src="/images/nestor.png"
                            alt="hero image"
                            width={300}
                            height={300}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            loading="eager"
                        />
                        <div className="" style={{ width: '130%', height: '130%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', overflow: 'hidden' }}>
                            <Orb
                                hoverIntensity={0.5}
                                rotateOnHover={true}
                                hue={0}
                                forceHoverState={false}
                            />
                        </div>
                        {/* <motion.svg className="absolute top-0 left-0 w-full h-full" 
                            fill="transparent" 
                            viewBox="0 0 506 506"
                            xmlns="http://www.w3.org/2000/svg">
                                <motion.circle 
                                cx="253"
                                cy="253"
                                r="248"
                                stroke="#4dfdaf"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{strokeDasharray: "24 10 0 0"}}
                                animate={{
                                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                    rotate: [120, 360],

                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                />
                            </motion.svg> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;