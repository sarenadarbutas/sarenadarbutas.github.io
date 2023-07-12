import React, { useState, useContext } from 'react';
import brown1 from "../img/brown1.jpg";
import steelhead2 from "../img/steelhead2.jpg";
import brown3 from "../img/brown3.jpg";

const Hobbies = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [brown1, steelhead2, brown3];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className="hobbies">
      <div className="flex flex-col md:flex-row relative">
    <section className="p-4 md:w-1/2 flex flex-col items-center">
      <h1 className="text-orange-800 text-4xl mb-20 mt-5 md:mb-14">Hobbies</h1>
      <div className="border border-orange-800 bg-white text-black p-4">
        <p>
          Apart from my involvement in web development and video games, I have a profound passion for fishing and embracing the great outdoors. There's something truly special about casting a line and immersing myself in nature's beauty. It brings me immense joy and tranquility. It’s even better when you get a bite! When I'm not out on the water, you'll often find me behind a screen, indulging in gaming or working on projects.
        </p>
      </div>
    </section>
      <section className="flex-grow flex justify-end mt-16 mr-5">
        <div className="w-full flex justify-center">
          <div className="carousel" style={{ textAlign: 'right' }}>
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="carousel-image-container">
                    <img
                      src={image}
                      className={`carousel-image ${index !== currentSlide ? 'hidden' : ''}`}
                      alt={`Slide ${index + 1}`}
                      style={{ width: '75', height: 'auto', maxWidth: '300px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-4 space-x-4">
            <button className="carousel-control prev ml-2 bg-orange-500 text-white px-4 py-2 rounded" onClick={prevSlide}>
              Prev
            </button>
            <button className="carousel-control next ml-2 bg-orange-500 text-white px-4 py-2 rounded" onClick={nextSlide}>
              Next
            </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="horizontal-line bg-orange-500 h-1 md:h-2 lg:h-3 mt-10"></div>
    </div>
  );
}

export default Hobbies;