import React from 'react';

const Students = () => {
  return (
    <div className="text-black pt-28 pb-12 container">
      <div className="container mx-auto px-8 relative">
        <div className='absolute w-96 h-96 bg-blue-100 z-[-10] rounded-full right-0 top-96 blur-3xl'></div>
        <div className='absolute w-96 h-96 bg-blue-200 z-[-10] rounded-full left-0 top-1/4 blur-3xl'></div>

        <h1 className="text-4xl font-bold mb-12 text-center pb-6 border-b-4">Student Life at Springdale</h1>

        {/* Extracurricular Activities and Clubs and Societies */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 md:gap-8 gap-y-8">
            {/* Extracurricular Activities */}
            <div className="p-6 bg-white  border border-gray-200  relative">
              <h2 className="text-2xl font-semibold mb-4">Extracurricular Activities</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Music</li>
                <li>Dance</li>
                <li>Drama</li>
                <li>Art</li>
                <li>Sports</li>
                <li>Robotics</li>
                <li>Debate Club</li>
                <li>Science Club</li>
              </ul>
            </div>

            {/* Clubs and Societies */}
            <div className="p-6 bg-white  border border-gray-200  relative">
              <h2 className="text-2xl font-semibold mb-4">Clubs and Societies</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Literary Society</li>
                <li>Environmental Club</li>
                <li>Astronomy Club</li>
                <li>Coding Club</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-y-8">
            <div className="p-6 bg-white  border border-gray-200  relative">
              <h3 className="text-xl font-semibold mb-4">John Smith</h3>
              <p className="text-gray-700">National Level Math Olympiad Winner</p>
            </div>
            <div className="p-6 bg-white  border border-gray-200  relative">
              <h3 className="text-xl font-semibold mb-4">Sarah Lee</h3>
              <p className="text-gray-700">Gold Medalist in State Swimming Championship</p>
            </div>
            <div className="p-6 bg-white  border border-gray-200  relative">
              <h3 className="text-xl font-semibold mb-4">Tech Innovators Club</h3>
              <p className="text-gray-700">Winners of Inter-School Robotics Competition</p>
            </div>
          </div>
        </section>

        {/* Student Council */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Student Council</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-y-8">
            <div className="p-6 bg-white  border border-gray-200  relative">
              <h3 className="text-xl font-semibold mb-4">President: Amy Parker</h3>
              <p className="text-gray-700">Grade 12</p>
            </div>
            <div className="p-6 bg-white  border border-gray-200  relative">
              <h3 className="text-xl font-semibold mb-4">Vice President: Rajiv Mehta</h3>
              <p className="text-gray-700">Grade 11</p>
            </div>
            <div className="p-6 bg-white  border border-gray-200  relative">
              <h3 className="text-xl font-semibold mb-4">Secretary: Lisa Wong</h3>
              <p className="text-gray-700">Grade 10</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Students;