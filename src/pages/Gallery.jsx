import React from 'react';

const Gallery = () => {
  return (
    <div className="text-black pt-24 md:pt-28 pb-12 container">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold mb-12 text-center border-b-4 pb-6">Gallery</h1>

        {/* Photos Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">Photos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative  overflow-hidden ">
              <img
                src="https://images.pexels.com/photos/3779475/pexels-photo-3779475.jpeg"
                alt="Students participating in various sports events"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">Sports Day</div>
            </div>
            <div className="relative  overflow-hidden ">
              <img
                src="https://images.pexels.com/photos/3715584/pexels-photo-3715584.jpeg"
                alt="Students presenting their science projects"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">Science Exhibition</div>
            </div>
            <div className="relative  overflow-hidden ">
              <img
                src="https://images.pexels.com/photos/2526768/pexels-photo-2526768.jpeg"
                alt="Students performing in the cultural fest"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">Cultural Fest</div>
            </div>
            <div className="relative  overflow-hidden ">
              <img
                src="https://images.pexels.com/photos/4108775/pexels-photo-4108775.jpeg"
                alt="A glimpse of our interactive classrooms"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">Classroom</div>
            </div>
            <div className="relative  overflow-hidden ">
              <img
                src="https://images.pexels.com/photos/1181356/pexels-photo-1181356.jpeg"
                alt="Students reading and studying in the school library"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">Library</div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="relative  overflow-hidden ">
              <div className="relative w-full h-64 pb-9/16">
                <iframe
                  src="https://www.youtube.com/embed/nHbZsonAhNE" // Virtual Tour
                  title="Virtual Tour of Springdale Public School"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="inset-0 w-full h-full"
                ></iframe>
              </div>
             </div>
            <div className="relative  overflow-hidden ">
              <div className="relative w-full h-64 pb-9/16">
                <iframe
                  src="https://www.youtube.com/embed/1xHGjN7M0Hc" // Annual Function Highlights
                  title="Annual Function Highlights"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="inset-0 w-full h-full"
                ></iframe>
              </div>
               </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
