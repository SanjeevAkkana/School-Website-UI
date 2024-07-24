import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white p-4 shadow-md z-50 border-b border-black w-full fixed">
      <div className="mx-auto flex justify-between items-center">
        <div>
            <a href='/' className="flex items-center">
          <img
            src="https://img.freepik.com/free-vector/school-building-isolated-illustration-vector_24911-114862.jpg"
            alt="School Logo"
            className="w-10 h-10 rounded-full mr-3"
          />
          <h1 className="text-black text-2xl font-bold">Springdale Public School</h1>
          </a>
        </div>
        <nav>
          <ul className="hidden lg:flex space-x-6  text-lg">
            <li><Link to="/" className="text-black hover:text-blue-600 transition duration-300">Home</Link></li>
            <li><Link to="/about" className="text-black hover:text-blue-600 transition duration-300">About Us</Link></li>
            <li><Link to="/academics" className="text-black hover:text-blue-600 transition duration-300">Academics</Link></li>
            <li><Link to="/admissions" className="text-black hover:text-blue-600 transition duration-300">Admissions</Link></li>
            <li><Link to="/faculty" className="text-black hover:text-blue-600 transition duration-300">Faculty</Link></li>
            <li><Link to="/students" className="text-black hover:text-blue-600 transition duration-300">Students</Link></li>
            <li><Link to="/gallery" className="text-black hover:text-blue-600 transition duration-300">Gallery</Link></li>
            <li><Link to="/contact" className="text-black hover:text-blue-600 transition duration-300">Contact Us</Link></li>
          </ul>
          <ul className={`absolute right-2 top-16 w-48 bg-white border border-black  shadow-lg lg:hidden flex flex-col space-y-4 py-4 ${menuOpen ? 'block' : 'hidden'}`}>
            <li><Link to="/" className="text-black px-4 py-2 hover:text-blue-600 transition duration-300">Home</Link></li>
            <li><Link to="/about" className="text-black px-4 py-2 hover:text-blue-600 transition duration-300">About Us</Link></li>
            <li><Link to="/academics" className="text-black px-4 py-2 hover:text-blue-600 transition duration-300">Academics</Link></li>
            <li><Link to="/admissions" className="text-black px-4 py-2 hover:text-blue-600 transition duration-300">Admissions</Link></li>
            <li><Link to="/faculty" className="text-black px-4 py-2 hover:text-blue-600 transition duration-300">Faculty</Link></li>
            <li><Link to="/students" className="text-black px-4 py-2 hover:text-blue-600 transition duration-300">Students</Link></li>
            <li><Link to="/gallery" className="text-black px-4 py-2 hover:text-blue-600 transition duration-300">Gallery</Link></li>
            <li><Link to="/contact" className="text-black px-4 py-2 hover:text-blue-600 transition duration-300">Contact Us</Link></li>
          </ul>
          <button onClick={toggleMenu} className="lg:hidden text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
