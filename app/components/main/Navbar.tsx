"use client"
import React, { useState } from 'react'
//@ts-expect-error
import { Link } from 'react-scroll'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const closeMenu = () => {
        setOpen(false)
    }

    return (
        <div className="w-full h-[65px] fixed top-0 bg-[#03001417] backdrop-blur-lg z-50 px-0">
            <div className="w-full h-full flex flex-row items-center justify-between px-[10px] relative">
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-60}
                    className='h-auto w-auto flex flex-row items-center cursor-pointer'
                    onClick={closeMenu}
                >
                    <span className='text-2xl text-gray-300 font-bold p-9  md:block'>
                        Talha
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="h-full hidden md:flex items-center justify-between md:mr-20">
                    <div className="flex items-center justify-center gap-9 w-full h-auto rounded-full text-gray-200">
                        <Link to="about" smooth={true} duration={500} offset={-60} className="cursor-pointer" onClick={closeMenu}>About</Link>
                        <Link to="skills" smooth={true} duration={500} offset={-60} className="cursor-pointer" onClick={closeMenu}>Skills</Link>
                        <Link to="projects" smooth={true} duration={500} offset={-60} className="cursor-pointer" onClick={closeMenu}>Portfolio</Link>
                        <Link to="contact" smooth={true} duration={500} offset={-60} className="cursor-pointer" onClick={closeMenu}>Contact</Link>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div className='w-auto flex justify-center align-middle md:hidden absolute right-10 text-4xl text-white cursor-pointer'
                    onClick={() => setOpen(!open)}>
                    {open ? "X" : "≡"}
                </div>

                {/* Mobile Menu Content */}
                <div
                    className={`absolute left-0 right-0 h-screen w-full backdrop-blur-md bg-[#030014]/90 flex flex-col justify-center items-center md:hidden gap-9 text-white text-xl font-bold transition-all duration-500 ease-in-out ${
                        open ? 'top-[65px] block' : 'top-[-100%] hidden'
                    }`}
                >
                    <Link to="about" smooth={true} duration={500} offset={-60} className="cursor-pointer" onClick={closeMenu}>About</Link>
                    <Link to="skills" smooth={true} duration={500} offset={-60} className="cursor-pointer" onClick={closeMenu}>Skills</Link>
                    <Link to="projects" smooth={true} duration={500} offset={-60} className="cursor-pointer" onClick={closeMenu}>Portfolio</Link>
                    <Link to="contact" smooth={true} duration={500} offset={-60} className="cursor-pointer" onClick={closeMenu}>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
