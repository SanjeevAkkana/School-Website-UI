import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-black pb-4 pt-12 border-t border-black ">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <img
            src="https://img.freepik.com/free-vector/school-building-isolated-illustration-vector_24911-114862.jpg"
            alt="School Logo"
            className="w-24 h-24 mb-4 rounded-full border-4 border-blue-300 p-2"
          />
          <h2 className="text-2xl font-bold mb-2">Springdale Public School</h2>
          <p className="text-black">
            Providing a holistic education that encourages academic excellence, fosters creativity, and promotes physical and mental well-being.
          </p>
          <p className="text-black mt-2 text-balance ">&copy; 2024 Springdale Public School. All rights reserved.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Pages</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="text-black transition duration-300">Home</Link></li>
            <li><Link to="/about" className="text-black transition duration-300">About Us</Link></li>
            <li><Link to="/academics" className="text-black transition duration-300">Academics</Link></li>
            <li><Link to="/admissions" className="text-black transition duration-300">Admissions</Link></li>
            <li><Link to="/faculty" className="text-black transition duration-300">Faculty</Link></li>
            <li><Link to="/students" className="text-black transition duration-300">Students</Link></li>
            <li><Link to="/gallery" className="text-black transition duration-300">Gallery</Link></li>
            <li><Link to="/contact" className="text-black transition duration-300">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-black mb-2">
            Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
          </p>
          <p className="text-black mb-2">
            Phone: +1 (123) 456-7890
          </p>
          <p className="text-black mb-2">
            Email: info@springdale.edu
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.715207489055!2d-122.08424968469083!3d37.422065979825744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c6b9175575%3A0x1a1d6eb2a14f0e1!2sGoogleplex!5e0!3m2!1sen!2sus!4v1623601186030!5m2!1sen!2sus"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="School Location"
            className="mb-4"
          ></iframe>
        </div>
        <div>
        <h3 className="text-lg font-semibold mb-2">Contact Form</h3>
          <form className="space-y-2">
            <input type="text" placeholder="Name" className="w-full p-2 text-black border" />
            <input type="email" placeholder="Email" className="w-full p-2 text-black border" />
            <textarea placeholder="Message" className="w-full p-2 text-black border"></textarea>
            <button type="submit" className="border border-black text-black py-2 px-4">Submit</button>
          </form>
        </div>
        </div>
    </footer>
  );
};

export default Footer;