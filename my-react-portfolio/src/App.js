import './styles.css';
import WorkExperience from './components/WorkExperience';
import EducationalExperiences from './components/EducationalExperiences';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className=' App bg-orange-100 scroll smooth'>
      <div className='content'>
        <AboutMe />
        <WorkExperience />
        <EducationalExperiences />
      </div>
    </div>
  );
}

export default App;