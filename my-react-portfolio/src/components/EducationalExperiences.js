const SchoolExperiences = ({ id, projectName, dateOfClass, projectExperiences }) => {
  return (
    <div className="school-experiences">
      <div className="space-y-4 mb-3 mt-7">
        <h2 className="text-center text-2xl text-orange-700">{projectName}</h2>
        <h3 className="text-center text-xl text-orange-800">{dateOfClass}</h3>
      </div>
      <ul className="list-disc list-outside mx-auto w-max">
        {projectExperiences.map((experience) => (
          <li
            key={experience}
            className="text-lg mb-3 ml-4 text-orange-900"
          >
            {experience}
          </li>
        ))}
      </ul>
    </div>
  );
};

const EducationalExperiences = () => {
  const educationExperienceData = [
    {
      id: 1,
      projectName: 'Graduation Application',
      dateOfClass: 'September 2022 - May 2023',
      projectExperiences: [
        'Facilitated and led a team of two in the development of a web application using JavaScript, HTML, CSS, and Firebase, providing a graduation path tracking solution for UW-Parkside students.',
        'Solely responsible for designing the frontend of the web application, utilizing JavaScript, HTML, CSS, and Firebase, to create an intuitive and user-friendly interface.',
        'Implemented industry best practices and modern web development techniques to deliver a high-quality and responsive user interface.',
        'Demonstrated strong leadership skills by guiding the team throughout the development process, ensuring effective collaboration.',
        'Facilitated daily Scrum meetings, providing a platform for team members to share progress updates, discuss challenges, and align goals for efficient project management.',
        'Implemented Scrum ceremonies, including sprint planning, backlog grooming, and retrospective meetings, to promote transparency, collaboration, and continuous improvement.',
        'Fostered a culture of self-organization and empowered the team to make decisions, resolve conflicts, and deliver high-quality results within the agreed-upon timelines.'
      ]
    },
    {
      id: 2,
      projectName: 'What amenities adds property value',
      dateOfClass: 'September 2022 - December 2022',
      projectExperiences: [
        'Collaborated in a group to develop a data science project using Python, Pandas, NumPy, and SciPy, analyzing the impact of amenities on housing prices.',
        'Played an integral role in the project team, contributing expertise in data science techniques and programming using Python and relevant libraries.',
        'Utilized Pandas, NumPy, and SciPy to process and analyze large datasets, extracting meaningful insights and correlations between amenities and housing prices.',
        'Demonstrated strong teamwork and communication skills, effectively collaborating with team members to share ideas, divide tasks, and meet project milestones.',
        'Our abstract was accepted at NCUR 2023, showcasing the significance and quality of the research conducted.'
      ]
    },
    {
      id: 3,
      projectName: 'Database for Missionary Currie for Women and Children',
      dateOfClass: 'September 2021 - December 2021',
      projectExperiences: [
        "Collaborated in a group to develop and deliver a customized database system for Missionary Currie's donation center, catering to their specific requirements.",
        "Played an active role in gathering client's needs and translating them into a well-designed database structure using MySQL.",
        "Successfully delivered a database system that met the client's requirements, enabling Missionary Currie's donation center to streamline their operations and better serve their mission."    
      ]
    }
  ];

  return (
    <div className='school'>
      <div className='school-content'>
        <h1 className='font-serif text-orange-500 text-4xl mb-2 ml-6 text-center underline decoration-solid mt-10'>Academic Projects</h1>
        {educationExperienceData.map((experienceData) => (
          <SchoolExperiences key={experienceData.id} {...experienceData} />
        ))}
      </div>
    </div>
  );
};

export default EducationalExperiences;
