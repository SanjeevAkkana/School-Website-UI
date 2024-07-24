import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen text-gray-800 container">
      {/* Introduction Section */}
      <section className="py-28 px-8 flex flex-col md:flex-row items-center justify-around  relative">
         <div className="w-full md:w-1/2 flex justify-center mb-2 md:mb-0">
          <img
            src="https://img.freepik.com/free-vector/school-building-isolated-illustration-vector_24911-114862.jpg"
            alt="School Logo"
            className="w-96 h-96 rounded-full"
          />
        </div>
        <div className="w-full md:w-2/3 text-left relative z-10">
          <h2 className="text-4xl font-bold mb-4">Welcome to Springdale Public School</h2>
          <p className="text-sm text-gray-500 mb-4">
            "Where we nurture young minds for a brighter future."
          </p>
          <p className="text-md leading-relaxed mb-4">
            At Springdale Public School, we provide a holistic education that encourages academic excellence, fosters creativity, and promotes physical and mental well-being. Join us in our journey to create leaders of tomorrow.
          </p>
          <p className="text-md leading-relaxed">
            Our state-of-the-art facilities, experienced faculty, and vibrant community create an environment where students can thrive. We offer a range of extracurricular activities, from sports and arts to science and technology, ensuring a well-rounded development for each child.
          </p>
        </div>
        <div className="absolute inset-0  opacity-50 z-0"></div>
      </section>

      {/* Carousel/Banner Highlights */}
      <section className="relative mt-8 px-8 ">
        <Slider {...settings}>
          <div className="w-full h-64 bg-white flex flex-col items-center justify-center   border border-gray-300 relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThz7nmNbyl-KOymkcXUf51iSYMy8aGVXjhWQ&s"
              alt="Sports Day"
              className="w-24 h-24 mb-4 rounded-full border-4 border-black m-2 bg-white p-2"
            />
            <h2 className="text-2xl font-bold text-center text-black">Annual Sports Day</h2>
            <p className="text-center text-gray-500">Celebrating Excellence in Sports</p>
            <div className="absolute inset-0  opacity-50 z-0 "></div>
          </div>
          <div className="w-full h-64 bg-white flex flex-col items-center justify-center   border border-gray-300 relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdInP51bhKHKrNwVuKxwdeuqhXXykZ9sIcg&s"
              alt="Science Exhibition"
              className="w-24 h-24 mb-4 rounded-full border-4 border-black m-2 bg-white p-2"
            />
            <h2 className="text-2xl font-bold text-center text-black">Science Exhibition</h2>
            <p className="text-center text-gray-500">Showcasing Student Innovations</p>
            <div className="absolute inset-0  opacity-50 z-0 "></div>
          </div>
          <div className="w-full h-64 bg-white flex flex-col items-center justify-center   border border-gray-300 relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnc30iOrICR0xQNgKcgZNWFgOPWHap_ZYv-g&s"
              alt="Cultural Fest"
              className="w-24 h-24 mb-4 rounded-full border-4 border-black m-2 bg-white p-2"
            />
            <h2 className="text-2xl font-bold text-center text-black">Cultural Fest</h2>
            <p className="text-center text-gray-500">Embracing Diversity and Creativity</p>
            <div className="absolute inset-0  opacity-50 z-0 "></div>
          </div>
        </Slider>
      </section>

      {/* Additional Content Section */}
      <section className="p-8 mt-8 relative ">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4  bg-white  border border-gray-300 relative">
            <h3 className="text-2xl font-bold mb-2">Experienced Faculty</h3>
            <p className="text-md leading-relaxed">Our teachers are highly qualified and dedicated to providing the best education to our students.</p>
            <div className="absolute inset-0  opacity-50 z-0 "></div>
          </div>
          <div className="p-4  bg-white  border border-gray-300 relative">
            <h3 className="text-2xl font-bold mb-2">State-of-the-Art Facilities</h3>
            <p className="text-md leading-relaxed">We offer modern classrooms, labs, and sports facilities to enhance the learning experience.</p>
            <div className="absolute inset-0  opacity-50 z-0 "></div>
          </div>
          <div className="p-4  bg-white  border border-gray-300 relative">
            <h3 className="text-2xl font-bold mb-2">Holistic Development</h3>
            <p className="text-md leading-relaxed">We focus on the overall development of our students through various extracurricular activities.</p>
            <div className="absolute inset-0  opacity-50 z-0 "></div>
          </div>
          <div className="p-4  bg-white  border border-gray-300 relative">
            <h3 className="text-2xl font-bold mb-2">Community Engagement</h3>
            <p className="text-md leading-relaxed">Our school actively engages with the community to foster a sense of social responsibility among students.</p>
            <div className="absolute inset-0  opacity-50 z-0 "></div>
          </div>
        </div>
        <div className="absolute inset-0  opacity-50 z-0 "></div>
      </section>
    </div>
  );
};

export default Home;
