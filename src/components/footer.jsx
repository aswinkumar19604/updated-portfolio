import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineTwitter
} from "react-icons/ai";

export default function Footer() {

    const config = {

        github: 'https://github.com/aswinkumar19604',

        linkedin: 'https://www.linkedin.com/in/aswin-ak-ak5678',

        twitter: 'https://twitter.com/AswinAk55057505'
    }

    return (

        <footer className="bg-gray-950 text-white py-8 px-6">

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left Side */}
                <div className="text-center md:text-left">

                    <h1 className="text-2xl font-bold">
                        Aswin
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Full Stack Developer | Python Flask Developer
                    </p>

                </div>

                {/* Social Icons */}
                <div className="flex gap-6">

                    <a
                        href={config.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        <AiOutlineGithub size={30} />
                    </a>

                    <a
                        href={config.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        <AiOutlineLinkedin size={30} />
                    </a>

                    <a
                        href={config.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        <AiOutlineTwitter size={30} />
                    </a>

                </div>

            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500">

                © 2026 Aswin. All Rights Reserved.

            </div>

        </footer>
    )
}