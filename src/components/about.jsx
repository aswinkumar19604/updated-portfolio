import about from '../assests/about.png'

export default function About() {

    const config = {

        line1:
            'I am a Full Stack Software Developer specializing in Python Flask, React.js, and MongoDB. Currently, I am working on Asset Maintenance application development including warehouse management, BOM modules, inventory systems, and REST API development.',

        line2:
            'I have strong experience in frontend technologies such as React.js, Redux Toolkit, Tailwind CSS, JavaScript, Axios, and responsive UI development.',

        line3:
            'On the backend, I work with Python Flask, Node.js, Express.js, MongoDB, MySQL, JWT authentication, API integration, and scalable backend architecture.'
    }

    return (

        <section
            id='about'
            className='bg-gray-900 text-white px-6 md:px-20 py-20'
        >

            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16'>

                {/* Left Image Section */}
                <div className='md:w-1/2 flex justify-center'>

                    <img
                        src={about}
                        alt="About Aswin"
                        className='w-[280px] md:w-[380px] rounded-2xl shadow-2xl object-cover'
                    />

                </div>

                {/* Right Content Section */}
                <div className='md:w-1/2'>

                    <h1 className='text-4xl md:text-5xl font-bold mb-8 inline-block border-b-4 border-cyan-400 pb-2'>
                        About Me
                    </h1>

                    <p className='text-gray-300 leading-8 mb-6 text-lg'>
                        {config.line1}
                    </p>

                    <p className='text-gray-300 leading-8 mb-6 text-lg'>
                        {config.line2}
                    </p>

                    <p className='text-gray-300 leading-8 text-lg'>
                        {config.line3}
                    </p>

                    {/* Skills Tags */}
                    <div className='flex flex-wrap gap-4 mt-10'>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            React.js
                        </span>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            Flask
                        </span>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            MongoDB
                        </span>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            Tailwind CSS
                        </span>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            Redux Toolkit
                        </span>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            REST API
                        </span>

                        <span className='bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold'>
                            ERP Development
                        </span>

                    </div>

                </div>

            </div>

        </section>
    )
}   