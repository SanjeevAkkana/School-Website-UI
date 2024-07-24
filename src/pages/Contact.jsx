import React from 'react';

const Contact = () => {
  return (
    <div className=" text-black pt-24 md:pt-28 pb-12 container">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold mb-12 text-center border-b-4 pb-6">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="mb-4">
              <strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="mb-4">
              <strong>Email:</strong> <a href="mailto:info@springdale.edu" className="text-blue-500 hover:underline">info@springdale.edu</a>
            </p>

            {/* Contact Form */}
            <h2 className="text-3xl font-semibold mb-6">Contact Form</h2>
            <form
              action="#"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 "
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 "
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full p-3 border border-gray-300 "
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3  hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Maps Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Find Us</h2>
            <div className="relative w-full pb-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5422915286816!2d-122.39816868468147!3d37.79101567975963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d6a6a6d87%3A0x6d9454e3d6a63c7d!2s123%20Education%20Lane%2C%20Cityville%2C%20CA%2094307!5e0!3m2!1sen!2sus!4v1631615682647!5m2!1sen!2sus"
                title="Springdale Public School Location"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
