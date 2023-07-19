import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduction from './components/Introduction';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import ContactMe from './components/Footer';
import './App.css';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import Popup from './components/Popup';


function Home() {
  return (
    <div>
      <Popup />
      <Introduction />
      <AboutMe />
      <Skills />
      <Hobbies />
      <ContactMe />
    </div>
  );
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function App() {
  return (
    <Router>
        <div className="App bg-orange-100 smooth xs:bg-orange-100">
          <div className="content">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" component={Skills} />
            </Routes>
            <div className="scrollToTopContainer">
              <BsFillArrowUpCircleFill
                className="scrollToTop text-orange-700"
                onClick={scrollToTop}
              />
            </div>
          </div>
        </div>
    </Router>
  );
}

export default App;