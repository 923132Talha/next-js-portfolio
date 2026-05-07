"use client"
import { slideInFromLeft} from '@/utils/motion'
import { motion } from "framer-motion"
import React from 'react'

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='cursive text-6xl text-gray-200 font-bold mb-10  text-center'>
                Skills
            </motion.div>
        </div>
    )
}

export default SkillText