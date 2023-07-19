import css from "../img/css.png";
import html5 from "../img/html5.png"
import react from "../img/react.png"
import vue from "../img/vue.png"
import javascript from "../img/javascript.png"
import tailwind from "../img/tailwind.png"
import python from "../img/python.png"
import firebase from "../img/firebase.png"
import MySQL from "../img/MySQL.png"
import nosql from "../img/nosql.png"
import ResumePDF from "../img/ResumePDF.pdf"

const Skills = () => {

    function handleViewResume(){
        window.open(ResumePDF, "Blank")
    }

    function handleDownloadResume(){
        const downloadLink = document.createElement("a");
        downloadLink.href = ResumePDF;
        downloadLink.download = "ResumePDF.pdf";
        downloadLink.click();
    }

    return (
      <div className="skills">
        <div className="flex flex-col md:flex-row relative">
          <section className="p-4 flex flex-col justify-center items-center md:w-1/2">
            <h1 className="text-orange-800 text-4xl mb-28 md:mb-8 sm:mb-7 xs:mb-5">Skills</h1>
            <div className="border border-orange-800 bg-white text-black p-4">
              <p>
                During my time in college, I stumbled upon web development, I instantly fell head over heels for it. It was during my internship that things really took off and I got to level up my skills with Vue and React. When it comes to the techie stuff, I'm comfortable with JavaScript, HTML, CSS, and Python. They're like my trusty pals that always have my back when it comes to bringing my ideas to life. I also have experience with the Databases of MYSQL, NOSQL, and Firebase.
              </p>
            </div>
          </section>
          <section className="p-4 flex flex-col justify-center items-center md:w-1/2 xs:p-1">
  <h1 className="text-orange-800 text-4xl mb-14 lg:mt-3">My Stack</h1>
  <div className="flex justify-center items-center mt-2">
    <img src={react} alt="react" className="rounded-full md:w-20 md:h-20 lg:w-30 lg:h-30 mx-2 xs:w-14 xs:h-14" style={{ backgroundColor: "white" }} />
    <img src={vue} alt="vue" className="rounded-full md:w-20 md:h-20 lg:w-30 lg:h-30 mx-2 xs:w-14 xs:h-14" style={{ backgroundColor: "white" }} />
  </div>
  <div className="flex justify-center items-center mt-2">
    <img src={firebase} alt="firebase" className="rounded-full md:w-20 md:h-20 lg:w-30 lg:h-30 mx-2 xs:w-14 xs:h-14" style={{ backgroundColor: "white" }} />
    <img src={MySQL} alt="mysql" className="rounded-full md:w-20 md:h-20 lg:w-30 lg:h-30 mx-2 xs:w-14 xs:h-14" style={{ backgroundColor: "white" }} />
    <img src={nosql} alt="nosql" className="rounded-full md:w-20 md:h-20 lg:w-30 lg:h-30 mx-2 xs:w-14 xs:h-14" style={{ backgroundColor: "white" }} />
  </div>
  <div className="flex justify-center items-center mt-2">
    <img src={html5} alt="html" className="rounded-full md:w-20 md:h-20 lg:w-30 lg:h-30 mx-2 xs:w-14 xs:h-14" style={{ backgroundColor: "white" }} />
    <img src={css} alt="css" className="rounded-full md:w-20 md:h-20 lg:w-30 lg:h-30 mx-2 xs:w-14 xs:h-14" style={{ backgroundColor: "white" }} />
    <img src={tailwind} alt="tailwind" className="rounded-full md:w-20 md:h-20 lg:w-30 lg:h-30 mx-2 xs:w-14 xs:h-14" style={{ backgroundColor: "white" }} />
    <img src={javascript} alt="javascript" className="rounded-full md:w-20 md:h-20 lg:w-30 lg:h-30 mx-2 xs:w-14 xs:h-14" style={{ backgroundColor: "white" }} />
    <img src={python} alt="python" className="rounded-full md:w-20 md:h-20 lg:w-30 lg:h-30 mx-2 xs:w-14 xs:h-14" style={{ backgroundColor: "white" }} />
  </div>
</section>
        </div>
        <section className="p-4 flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mt-4 space-x-4">
                <button className="mr-2 bg-orange-500 text-white px-4 py-2 rounded"
                onClick={handleViewResume}
                >View my Resume</button>
                <button className="ml-2 bg-orange-500 text-white px-4 py-2 rounded"
                onClick={handleDownloadResume}
                >Download my Resume</button>
            </div>
        </section>
        <div className="horizontal-line bg-orange-500 h-1 md:h-2 lg:h-3 mt-10">
        </div>
      </div>
    );
  };

export default Skills;