import { FaEnvelope, FaMapMarker } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="contact-me">
      <div className="flex flex-col bg-orange-400">
        <footer className="p-1 flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-orange-800 text-2xl mb-2">Contact me</h1>
              <div className="flex items-center mb-2">
                <FaEnvelope className="mr-2 text-orange-800" />
                <span className="text-white">sarenadarbutas@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarker className="mr-2 text-orange-800" />
                <span className="text-white">Kenosha, Wisconsin</span>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-4 sm:mt-0">
            <div className="flex flex-col items-center">
              <h1 className="text-orange-800 text-2xl mb-2">Socials</h1>
              <div className="flex items-center mb-2">
                <AiFillGithub className="mr-2 text-orange-800" />
                <a
                  href="https://github.com/sarenadarbutas"
                  className="text-white"
                >
                  Github
                </a>
              </div>
              <div className="flex items-center">
                <AiFillLinkedin className="mr-2 text-orange-800" />
                <a
                  href="https://www.linkedin.com/in/sarena-darbutas/"
                  className="text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;