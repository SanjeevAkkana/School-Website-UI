import React from 'react';

const Academics = () => {
  return (
    <div className="text-black pt-16 container">
      <div className="absolute w-96 h-96 bg-blue-100 z-[-10] rounded-full right-0 top-96 blur-3xl"></div>
      <div className="container mx-auto py-12 px-8 relative">
        <div className="absolute w-96 h-96 bg-blue-50 z-[-10] rounded-full left-0 blur-3xl"></div>

        {/* Curriculum Sections */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:md:gap-8 gap-y-8 gap-y-8">
            {/* Primary Curriculum */}
            <div className="p-6 bg-white  border border-gray-200 ">
              <h3 className="text-2xl font-bold mb-4">Primary (Grades 1-5)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>
            {/* Secondary Curriculum */}
            <div className="p-6 bg-white  border border-gray-200 ">
              <h3 className="text-2xl font-bold mb-4">Secondary (Grades 6-10)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </div>
            {/* Senior Secondary Curriculum */}
            <div className="p-6 bg-white  border border-gray-200 ">
              <h3 className="text-2xl font-bold mb-4">Senior Secondary (Grades 11-12)</h3>
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2">Science Stream</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                  <li>Mathematics</li>
                  <li>Computer Science</li>
                  <li>English</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Commerce Stream</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Accountancy</li>
                  <li>Business Studies</li>
                  <li>Economics</li>
                  <li>Mathematics</li>
                  <li>English</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Methodologies Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:md:gap-8 gap-y-8 gap-y-8">
            <div className="p-6 bg-white  border border-gray-200  flex-1 relative">
              <h2 className="text-3xl font-semibold mb-4">Teaching Methodologies</h2>
              <p className="text-gray-700">
                We use a blend of traditional and modern teaching techniques to cater to different learning styles. Our approach ensures that each student receives personalized attention and support.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Resources Section */}
        <section>
          <div className="flex flex-col md:flex-row md:md:gap-8 gap-y-8 gap-y-8">
            <div className="p-6 bg-white  border border-gray-200  flex-1 relative">
              <h2 className="text-3xl font-semibold mb-4">Educational Resources</h2>
              <p className="text-gray-700">
                Our school is equipped with digital classrooms, interactive learning modules, and access to online educational platforms to enhance the learning experience and keep students engaged.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;
