const WorkExperiences = ({ company, position, date, responsibilities }) => {
  return (
    <div className="work-experiences">
      <div className="space-y-4 mb-3 mt-7">
        <h2 className="text-center text-2xl text-orange-600">{company}</h2>
        <h3 className="text-center text-xl text-orange-700">{position}</h3>
        <h3 className="text-center text-lg text-orange-800">{date}</h3>
      </div>
      <ul className="list-disc list-inside mx-auto w-max">
        {responsibilities.map((responsibility) => (
          <li
            key={responsibility}
            className="text-lg mb-3 ml-4 text-orange-900"
          >
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};
const WorkExperience = () => {
  const jobExperiencesData = [
    {
      id: 1,
      company: 'Foxconn Mount Pleasant, WI',
      position: 'Industrial Artificial Intelligence Software Engineer Intern',
      date: 'June 2022 - August 2022',
      responsibilities: [
        'Created, wrote, and executed comprehensive tests for the company\'s web application using Jest.',
        'Achieved a code coverage of over 50% by diligently testing various components and functionalities.',
        'Ensured the reliability and stability of the web application through rigorous testing methodologies.',
        'Collaborated with the development team to identify and address software bugs and issues.'
      ]
    },
    {
      id: 2,
      company: 'Foxconn Mount Pleasant, WI',
      position: 'Industrial Artificial Intelligence Frontend Software Engineer',
      date: 'December 2021 - January 2022',
      responsibilities: [
        'Developed a user-friendly side menu for a web application using VueJS, JavaScript, HTML, and CSS.',
        'Deepened understanding of software lifecycles and DOM manipulation for efficient development.',
        'Demonstrated proficiency in software lifecycle management and DOM manipulation.',
        'Applied industry best practices to optimize performance and adhere to coding standards.'
      ]
    },
    {
      id: 3,
      company: 'Foxconn Mount Pleasant, WI',
      position: 'Industrial Artificial Intelligence Software Engineer Intern',
      date: 'June 2021 - September 2021',
      responsibilities: [
        'Collaborated as a valuable team member in a six-person team to develop a web application using VueJS, Python, JavaScript, and MySQL, following Agile Scrum practices.',
        'Participated in daily Scrum meetings, providing updates on progress, discussing challenges, and aligning team goals for efficient project management.',
        'Provided API feature development and support, ensuring seamless integration and functionality within the application.',
        'Played a pivotal role in improving code readability by enhancing documentation, resulting in better understanding and maintainability.',
        'Actively participated in code reviews, offering valuable insights and feedback to enhance code quality and ensure adherence to best practices.',
        'Demonstrated effective teamwork, communication, and collaboration skills throughout the development process.'
      ]
    }
  ];

  return (
    <div className="uork">
      <div className='content-work'>
        <h1 className='font-serif text-orange-500 text-4xl mb-2 ml-6 text-center underline decoration-solid'>Work Experiences</h1>
        {jobExperiencesData.map((jobExperience) => (
        <WorkExperiences key={jobExperience.id} {...jobExperience} />
        ))}
        </div>
    </div>
  );
};

export default WorkExperience;
