import pc from '../img/pcbuild.jpg';



const AboutMe = () => {

    return (
      <div className="about-me">
        <div className="flex flex-col md:flex-row relative">
          <section className="p-4 flex flex-col justify-center items-center md:w-1/2">
            <h1 className="text-orange-800 text-4xl mb-20 mt-10 md:mb-14">About Me</h1>
            <div className="border border-orange-800 bg-white text-black p-4">
              <p>
                Recent College Graduate whose love of programming stemmed from my passion for video games at a young age. I was consistently curious about the how, what, where, and why of the beauty when playing games, which led me to pursue a Bachelor's Degree in Computer Science.
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