"use client"
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                    <div className="col-span-7 place-self-center text-center sm:text-left order-2 xl:order-none">
                        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                Hi there! I&apos;m{""}
                            </span>
                            <br />
                            <TypeAnimation 
                                sequence={[
                                    'Néstor',
                                    1000,
                                    'Fullstack Developer 🔃',
                                    1000,
                                    '⚙️ DevSecOps',
                                    1000,
                                    'Robotics 🤖 God',
                                    1000,
                                    'An 🧠 AI?',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{
                                    fontSize:"1em",
                                    display:"inline-block"
                                }}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                            Lorem  ipsum dolor sit amet consectetur, adipisicing elit. Minus earum ipsa magnam itaque ex amet vitae, aliquid sapiente repudiandae esse.
                        </p>
                        <div>
                            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire Me</button>
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"><span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span></button>
                        </div>
                    </div>
                    <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                            <Image
                                src="/images/nestor.png"
                                alt="hero image"
                                width={300}
                                height={300}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            />
                            <motion.svg className="absolute top-0 left-0 w-full h-full" 
                            fill="transparent" 
                            viewBox="0 0 506 506"
                            xmlns="http://www.w3.org/2000/svg">
                                <motion.circle 
                                cx="253"
                                cy="253"
                                r="250"
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
                            </motion.svg>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default HeroSection;