import React from 'react';

const About = () => {
    return (
        <div className="text-black pt-28 container mx-auto px-4 sm:px-8">
            <div className='relative'>
                {/* Background Circles */}
                <div className='absolute w-64 h-64 bg-blue-100 z-[-10] rounded-full right-0 top-1/2 transform -translate-y-1/2 blur-3xl sm:w-96 sm:h-96'></div>
                <div className='absolute w-64 h-64 bg-blue-50 z-[-10] rounded-full left-0 top-1/2 transform -translate-y-1/2 blur-3xl sm:w-96 sm:h-96'></div>

                {/* History Section */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col justify-center p-4">
                            <h2 className="text-3xl font-semibold mb-4">History</h2>
                            <p className="text-gray-700">
                                Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
                            </p>
                        </div>
                        <div className="flex justify-center p-4">
                            <img
                                src="https://img.freepik.com/free-vector/school-building-isolated-illustration-vector_24911-114862.jpg"
                                alt="School Building"
                                className="w-full max-w-xs h-auto rounded-full"
                            />
                        </div>
                    </div>
                </section>

                {/* Vision and Mission Section */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="px-4 py-6 flex flex-col justify-center bg-white border border-gray-300 relative">
                            <h2 className="text-3xl font-semibold mb-4">Vision</h2>
                            <p className="text-gray-700">
                                To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
                            </p>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-50"></div>
                        </div>
                        <div className="px-4 py-6 flex flex-col justify-center bg-white border border-gray-300 relative">
                            <h2 className="text-3xl font-semibold mb-4">Mission</h2>
                            <p className="text-gray-700">
                                To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
                            </p>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-50"></div>
                        </div>
                    </div>
                </section>

                {/* Principal's Message Section */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="px-4 py-6 flex flex-col justify-center bg-white border border-gray-300 relative">
                            <h2 className="text-3xl font-semibold mb-4">Principal's Message</h2>
                            <p className="text-gray-700">
                                At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
                            </p>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-50"></div>
                        </div>
                        <div className="px-4 py-6 flex flex-col justify-center bg-white border border-gray-300 relative">
                            <h2 className="text-3xl font-semibold mb-4">Infrastructure and Facilities</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>State-of-the-art science and computer labs</li>
                                <li>Spacious and well-equipped classrooms</li>
                                <li>Library with a vast collection of books and digital resources</li>
                                <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
                            </ul>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-50"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
