import React from 'react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'John Doe',
      position: 'Principal',
      qualifications: 'M.Ed',
      experience: '20 years of experience in educational administration',
    },
    {
      name: 'Jane Smith',
      position: 'Vice Principal',
      qualifications: 'M.Sc. in Physics',
      experience: '15 years of teaching experience',
    },
    {
      name: 'Emily Johnson',
      position: 'English Teacher',
      qualifications: 'M.A. in English',
      experience: '10 years of teaching experience',
    },
    {
      name: 'Michael Brown',
      position: 'Mathematics Teacher',
      qualifications: 'M.Sc. in Mathematics',
      experience: '8 years of teaching experience',
    },
    {
      name: 'Sophia Davis',
      position: 'Science Teacher',
      qualifications: 'M.Sc. in Chemistry',
      experience: '12 years of teaching experience',
    },
    {
      name: 'David Wilson',
      position: 'Computer Science Teacher',
      qualifications: 'B.Tech in Computer Science',
      experience: '5 years of teaching experience',
    },
  ];

  return (
    <div className="text-black  pt-28 pb-12 container">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold mb-12 text-center pb-6 border-b-4">Our Faculty</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="p-6 bg-white   border border-gray-200 flex flex-col justify-between">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                <h3 className="text-xl font-medium mb-2">{member.position}</h3>
              </div>
              <div className="bg-blue-50 p-4 ">
                <p className="text-gray-700 mb-2"><strong>Qualifications:</strong> {member.qualifications}</p>
                <p className="text-gray-700"><strong>Experience:</strong> {member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;