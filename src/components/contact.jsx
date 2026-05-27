import {
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineLinkedin,
    AiOutlineGithub
} from "react-icons/ai";

export default function Contact() {

    const config = {

        email: 'akaswin145@gmail.com',

        phone: '9360998395',

        linkedin: 'https://www.linkedin.com/in/aswin-ak-ak5678',

        github: 'https://github.com/aswinkumar19604'
    }

    return (

        <section
            id="contact"
            className='bg-gray-900 text-white py-20 px-6 md:px-20'
        >

            <div className='max-w-5xl mx-auto text-center'>

                {/* Heading */}
                <h1 className='text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2 mb-8'>
                    Contact
                </h1>

                <p className='text-gray-400 text-lg leading-8 mb-14 max-w-2xl mx-auto'>
                    If you would like to discuss projects, collaborations,
                    ERP development, or full stack opportunities, feel free
                    to contact me anytime.
                </p>

                {/* Contact Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                    {/* Email */}
                    <div className='bg-gray-800 rounded-2xl p-8 shadow-xl hover:scale-105 transition'>

                        <div className='flex justify-center mb-5'>
                            <AiOutlineMail size={50} className='text-cyan-400' />
                        </div>

                        <h2 className='text-2xl font-bold mb-3'>
                            Email
                        </h2>

                        <p className='text-gray-300'>
                            {config.email}
                        </p>

                    </div>

                    {/* Phone */}
                    <div className='bg-gray-800 rounded-2xl p-8 shadow-xl hover:scale-105 transition'>

                        <div className='flex justify-center mb-5'>
                            <AiOutlinePhone size={50} className='text-cyan-400' />
                        </div>

                        <h2 className='text-2xl font-bold mb-3'>
                            Phone
                        </h2>

                        <p className='text-gray-300'>
                            {config.phone}
                        </p>

                    </div>

                </div>

                {/* Social Links */}
                <div className='flex justify-center gap-8 mt-14'>

                    <a
                        href={config.linkedin}
                        target='_blank'
                        rel='noreferrer'
                        className='hover:text-cyan-400 transition'
                    >
                        <AiOutlineLinkedin size={40} />
                    </a>

                    <a
                        href={config.github}
                        target='_blank'
                        rel='noreferrer'
                        className='hover:text-cyan-400 transition'
                    >
                        <AiOutlineGithub size={40} />
                    </a>

                </div>

            </div>

        </section>
    )
}