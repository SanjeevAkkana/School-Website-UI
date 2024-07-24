import React from 'react';

const About = () => {
    return (
        <div className="text-black pt-16 container">
            <div className='absolute w-96 h-96 bg-blue-100 z-[-10] rounded-full right-0 top-96 blur-3xl'></div>
            <div className="mx-auto py-12 px-8">
                <div className='absolute w-96 h-96 bg-blue-50 z-[-10] rounded-full left-0 blur-3xl'></div>
                <section className="mb-12">
                    <div className="grid md:grid-cols-2 md:gap-8 gap-y-8">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-semibold mb-4">History</h2>
                            <p className="text-gray-700">
                                Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://img.freepik.com/free-vector/school-building-isolated-illustration-vector_24911-114862.jpg"
                                alt="School Building"
                                className="w-64 h-64 rounded-full"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <div className="grid md:grid-cols-2 md:gap-8 gap-y-8">
                        <div className="px-4 py-6 flex flex-col justify-centerp-4  bg-white  border border-gray-300 relative">
                            <h2 className="text-3xl font-semibold mb-4">Vision</h2>
                            <p className="text-gray-700">
                                To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
                            </p>
                            <div className="absolute inset-0  opacity-50 z-0 "></div>
                        </div>
                        <div className="px-4 py-6 flex flex-col justify-centerp-4  bg-white  border border-gray-300 relative">
                            <h2 className="text-3xl font-semibold mb-4">Mission</h2>
                            <p className="text-gray-700">
                                To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
                            </p>
                            <div className="absolute inset-0  opacity-50 z-0 "></div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <div className="grid md:grid-cols-2 md:gap-8 gap-y-8">
                        <div className="px-4 py-6 flex flex-col justify-centerp-4  bg-white  border border-gray-300 relative">
                            <h2 className="text-3xl font-semibold mb-4">Principal's Message</h2>
                            <p className="text-gray-700">
                                At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
                            </p>
                            <div className="absolute inset-0  opacity-50 z-0 "></div>
                        </div>
                        <div className="px-4 py-6 flex flex-col justify-centerp-4  bg-white  border border-gray-300 relative">
                            <h2 className="text-3xl font-semibold mb-4">Infrastructure and Facilities</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>State-of-the-art science and computer labs</li>
                                <li>Spacious and well-equipped classrooms</li>
                                <li>Library with a vast collection of books and digital resources</li>
                                <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
                            </ul>
                            <div className="absolute inset-0  opacity-50 z-0 "></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;