import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {

    const [toggle, setToggle] = useState(false);

    return (
        <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-lg">

            {/* Logo */}
            <a
                className="text-2xl font-bold tracking-wide"
                href="#"
            >
                Aswin <span className="text-cyan-400">| Software Developer</span>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:block">
                <ul className="flex gap-8 text-lg">
                    <li><a href="/" className="hover:text-cyan-400">Home</a></li>
                    <li><a href="#about" className="hover:text-cyan-400">About</a></li>
                    <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
                    <li><a href="#resume" className="hover:text-cyan-400">Resume</a></li>
                    <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Menu */}
            {
                toggle && (
                    <nav className="absolute top-16 left-0 w-full bg-gray-800 md:hidden">
                        <ul
                            onClick={() => setToggle(false)}
                            className="flex flex-col text-center py-5 gap-5 text-lg"
                        >
                            <li><a href="/">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                )
            }

            {/* Mobile Button */}
            <button
                onClick={() => setToggle(!toggle)}
                className='block md:hidden'
            >
                {
                    toggle
                        ? <XMarkIcon className='h-6 w-6' />
                        : <Bars3Icon className='h-6 w-6' />
                }
            </button>

        </header>
    )
}