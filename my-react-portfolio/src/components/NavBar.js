import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="bg-orange-400 py-3 flex flex-wrap justify-between px-3">
      <div>
        <h1 className="Menlo text-white text-lg lg:text-2xl md:text-xl xs:text-base">
          Sarena Darbutas
        </h1>
      </div>
      <nav className="navbar Menlo text-white text-lg flex justify-end lg:text-2xl md:text-xl xs:text-base xs:px-1">
        <header className="flex flex-wrap gap-8">
          <Link
            to="about-me"
            smooth={true}
            duration={500}
            offset={-100}
            className="hover:text-gray-400 hover:underline"
          >
            About Me
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-100}
            className="hover:text-gray-400 hover:underline"
          >
            Resume
          </Link>
          <Link
            to="hobbies"
            smooth={true}
            duration={500}
            offset={-100}
            className="hover:text-gray-400 hover:underline"
          >
            Hobbies
          </Link>
          <Link
            to="contact-me"
            smooth={true}
            duration={500}
            offset={-100}
            className="hover:text-gray-400 hover:underline"
          >
            Contact
          </Link>
        </header>
      </nav>
    </div>
  );
}

export default NavBar;