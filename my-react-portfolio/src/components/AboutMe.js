import pc from '../img/pcbuild.jpg';



const AboutMe = () => {

    return (
      <div className="about-me">
        <div className="flex flex-col md:flex-row relative">
          <section className="p-4 flex flex-col justify-center items-center md:w-1/2 md:mb-14">
            <h1 className="text-orange-800 text-4xl md:mb-10 sm:mb-10">About Me</h1>
            <div className="border border-orange-800 bg-white text-black p-4">
              <p>
              I recently graduated from the University of Wisconsin Parkside with a Bachelor's of Science in Computer Science. Throughout my studies, I developed a deep interest in the process of turning ideas into real applications. This specifically interested me because of my passion for video games that started at a young age. I wanted to know how these games came to life, which ultimately made me decide to get my degree in Computer Science. 
              </p>
            </div>
          </section>
          <section className="flex-grow flex justify-end mt-16 mb-16 mr-5 xl:mt-22">
            <div className="w-full flex justify-center">
              <img
                src={pc}
                alt="pc build"
                className="object-contain h-72"
              />
            </div>
          </section>
        </div>
        <div className="horizontal-line bg-orange-500 h-1 md:h-2 lg:h-3 mt-10"></div>
      </div>
    );
  };
export default AboutMe;