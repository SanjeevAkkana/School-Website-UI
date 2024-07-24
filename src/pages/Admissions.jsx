import React from 'react';

const Admissions = () => {
  return (
    <div className="text-black pt-16 container">
      <div className="absolute w-96 h-96 bg-blue-100 z-[-10] rounded-full right-0 top-96 blur-3xl"></div>
      <div className="container mx-auto py-12 px-8 relative">
        <div className="absolute w-96 h-96 bg-blue-50 z-[-10] rounded-full left-0 blur-3xl"></div>

        {/* Admissions Process Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white  border border-gray-200  flex flex-col justify-center relative">
              <h2 className="text-3xl font-semibold mb-4">Process</h2>
              <p className="text-gray-700">
                Admission forms are available for download. Submit the completed form along with required documents at the school office.
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-50 "></div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/admission-form-concept-illustration_114360-318.jpg"
                alt="Admission Process"
                className="w-64 h-64  "
              />
            </div>
          </div>
        </section>

        {/* Admission Criteria Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="p-6 bg-white  border border-gray-200  flex-1 relative">
              <h2 className="text-3xl font-semibold mb-4">Criteria</h2>
              <p className="text-gray-700">
                Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-lue-100 to-transparent opacity-50 "></div>
            </div>
          </div>
        </section>

        {/* Important Dates Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Important Dates</h2>
          <div className="p-6 bg-white  border border-gray-200 ">
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Admission Form Availability:</strong> March 1st</li>
              <li><strong>Last Date for Submission:</strong> March 31st</li>
              <li><strong>Entrance Test:</strong> April 15th</li>
              <li><strong>Announcement of Results:</strong> April 30th</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admissions;
