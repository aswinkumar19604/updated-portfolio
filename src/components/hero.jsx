import hero from '../assets/hero.png'

import {
    AiOutlineTwitter,
    AiOutlineFacebook,
    AiOutlineLinkedin,
    AiOutlineGithub
} from "react-icons/ai";

export default function Hero() {

    const config = {

        subtitle: 'Python Flask & Full Stack Developer',

        description:
            'I build scalable Asset Maintenance And ERP applications, REST APIs, and modern web applications using React, Flask, MongoDB, and  CSS.',

        social: {

            twitter: 'https://twitter.com/AswinAk55057505',

            facebook: 'https://facebook.com/',

            linkedin: 'https://www.linkedin.com/in/aswin-ak-ak5678',

            github: 'https://github.com/'
        }
    }

    return (

        <section className='flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-gray-900 text-white'>

            {/* Left Side */}
            <div className='md:w-1/2 flex flex-col'>

                <h1 className='text-5xl md:text-6xl font-bold leading-tight'>

                    Hi, <br />

                    I'm <span className='text-cyan-400'>Aswin</span>

                </h1>

                <p className='text-2xl mt-5 text-gray-300'>
                    {config.subtitle}
                </p>

                <p className='text-gray-400 mt-6 leading-7 max-w-lg'>
                    {config.description}
                </p>

                {/* Buttons */}
                <div className='flex gap-5 mt-8'>

                    <a
                        href="#projects"
                        className='bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition'
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className='border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 transition'
                    >
                        Contact Me
                    </a>

                </div>

                {/* Social Icons */}
                <div className='flex gap-5 mt-10'>

                    <a
                        href={config.social.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className='hover:text-cyan-400 transition'
                    >
                        <AiOutlineTwitter size={35} />
                    </a>

                    <a
                        href={config.social.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className='hover:text-cyan-400 transition'
                    >
                        <AiOutlineFacebook size={35} />
                    </a>

                    <a
                        href={config.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className='hover:text-cyan-400 transition'
                    >
                        <AiOutlineLinkedin size={35} />
                    </a>

                    <a
                        href={config.social.github}
                        target="_blank"
                        rel="noreferrer"
                        className='hover:text-cyan-400 transition'
                    >
                        <AiOutlineGithub size={35} />
                    </a>

                </div>

            </div>

            {/* Right Side Image */}
            <div className='md:w-1/3 mt-10 md:mt-0'>

                <img
                    src={hero}
                    alt="Aswin Developer"
                    className='rounded-2xl shadow-2xl'
                />

            </div>

        </section>
    )
}