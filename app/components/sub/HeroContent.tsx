"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]">
            <div className="w-full flex flex-col gap-5 justify-center text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 flex items-center w-fit">
                    <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">Fullstack Developer Portfolio</h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px]">
                    <span>
                        Hi I&apos;m&nbsp;
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            Talha
                        </span>
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.5)}
                    className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px]">
                    I&apos;m a Full Stack Developer with experience in Website and Software development
                </motion.p>
                <div className="flex gap-6 mt-5">
                    <motion.a
                        variants={slideInFromLeft(1)}
                        href="https://github.com/923132Talha"
                        target="_blank"
                        className="text-white hover:text-gray-300">
                        <FaGithub className="h-8 w-8 sm:h-9 sm:w-9" />
                    </motion.a>

                    <motion.a
                        variants={slideInFromLeft(1.2)}
                        href="https://www.linkedin.com/in/talha-malik-a36602351"
                        target="_blank"
                        className="text-white hover:text-gray-300">
                        <FaLinkedin className="h-8 w-8 sm:h-9 sm:w-9" />
                    </motion.a>
                </div>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="flex w-full h-full justify-center items-center mt-10 md:mt-0">
                <div className="w-[390px] h-[390px] rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
                    <Image
                        src="/profile.jpg"
                        alt="profile"
                        height={330}
                        width={330}
                        priority
                        className="object-cover w-full"
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default HeroContent
