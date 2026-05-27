import website from '../assets/ecommerce-websites.jpg'
import website1 from '../assets/employee.png'
import website2 from '../assets/website-blog.jpg'

export default function Project() {

    const config = {

        projects: [

            {
                image: website,

                title: 'ERP Ecommerce Platform',

                description:
                    'Built a full-stack ecommerce and inventory management application using React.js, Node.js, MongoDB, and REST APIs.',

                link:
                    'https://github.com/aswinkumar19604/ecommerce-website'
            },

            {
                image: website1,

                title: 'Employee Management System',

                description:
                    'Developed an employee management system with CRUD operations, authentication, dashboard analytics, and role management.',

                link:
                    'https://github.com/aswinkumar19604/Employee-management-system'
            },

            {
                image: website2,

                title: 'Blog Management Website',

                description:
                    'Created a blog application using JavaScript and MongoDB with content management and dynamic post rendering.',

                link:
                    'https://github.com/aswinkumar19604/Blog-Website'
            }
        ]
    }

    return (

        <section
            id='projects'
            className='bg-gray-900 text-white py-20 px-6 md:px-20'
        >

            {/* Heading */}
            <div className='text-center mb-16'>

                <h1 className='text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2'>
                    Projects
                </h1>

                <p className='text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8'>
                    Here are some of the projects I have developed using React.js,
                    Flask, Node.js, MongoDB, Tailwind CSS, and modern web technologies.
                </p>

            </div>

            {/* Project Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                {
                    config.projects.map((project, index) => (

                        <div
                            key={index}
                            className='bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300'
                        >

                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className='w-full h-[220px] object-cover'
                            />

                            {/* Content */}
                            <div className='p-6'>

                                <h2 className='text-2xl font-bold mb-4 text-cyan-400'>
                                    {project.title}
                                </h2>

                                <p className='text-gray-300 leading-7 mb-6'>
                                    {project.description}
                                </p>

                                {/* Button */}
                                <a
                                    href={project.link}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='inline-block bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold transition'
                                >
                                    View Project
                                </a>

                            </div>

                        </div>
                    ))
                }

            </div>

        </section>
    )
}