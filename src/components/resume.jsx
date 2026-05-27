import resume from '../assets/resume.jpg'

export default function Resume() {

    const config = {

        link:
            'https://drive.google.com/file/d/1dYfKSgLEhsmD3is4a8Sc1fdFIOBAiw_w/view?usp=drive_link'
    }

    return (

        <section
            id='resume'
            className='bg-gray-800 text-white py-20 px-6 md:px-20'
        >

            <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16'>

                {/* Left Side Image */}
                <div className='md:w-1/2 flex justify-center'>

                    <img
                        src={resume}
                        alt="Resume"
                        className='w-[280px] md:w-[350px] rounded-2xl shadow-2xl'
                    />

                </div>

                {/* Right Side Content */}
                <div className='md:w-1/2'>

                    <h1 className='text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2 mb-8'>
                        Resume
                    </h1>

                    <p className='text-gray-300 text-lg leading-8 mb-8'>
                        You can view and download my professional resume which
                        includes my experience, technical skills, ERP development
                        projects, and full stack development expertise.
                    </p>

                    {/* Skills */}
                    <div className='flex flex-wrap gap-4 mb-10'>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            Python Flask
                        </span>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            React.js
                        </span>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            MongoDB
                        </span>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            Tailwind CSS
                        </span>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            REST API
                        </span>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            ERP Development
                        </span>

                    </div>

                    {/* Buttons */}
                    <div className='flex gap-5 flex-wrap'>

                        <a
                            href={config.link}
                            target='_blank'
                            rel='noreferrer'
                            className='bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition'
                        >
                            View Resume
                        </a>

                        <a
                            href={config.link}
                            target='_blank'
                            rel='noreferrer'
                            className='border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-lg font-semibold transition'
                        >
                            Download Resume
                        </a>

                    </div>

                </div>

            </div>

        </section>
    )
}