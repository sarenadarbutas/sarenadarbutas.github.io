import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="contact-me">
      <div className="flex flex-col md:flex-row relative">
        <section className="p-4 md:w-1/2 flex flex-col items-center">
          <h1 className="text-orange-800 text-4xl mb-20 mt-5 md:mb-14">Contact me</h1>
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2 text-orange-800" />
            <span>Email: sarenadarbutas@gmail.com</span>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="mr-2 text-orange-800" />
            <span>Phone: +1 262 577 1118</span>
          </div>
          <div className="flex items-center">
            <FaMapMarker className="mr-2 text-orange-800" />
            <span>Location: Kenosha, Wisconsin</span>
          </div>
        </section>
      </div>
      
      <div className="horizontal-line bg-orange-500 h-1 md:h-2 lg:h-3 mt-10"></div>
    </div>
  );
};

export default Footer;