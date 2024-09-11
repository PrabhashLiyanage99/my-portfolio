import React from 'react';
import Card from '../components/Card';
import PortfolioImage from "../assets/images/My-Personal-portfolio.jpg";
import ClipessCompanyProjectImage from "../assets/images/Clipess-company-project-management-system.jpg"
import AutomateWashRommManagementSystemImage from "../assets/images/Automated-Washroom-Management-SystemImage.jpeg";

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Leo Book',
      description: 'Project Management system for Leo Clubs.This is first developed for the Leo Club of the University of Moratuwa. Later it is proposed to be introduced in 306 Leo multi-districts in Sri Lanka and Maldives. Leo aims to supervise and facilitate the activities of all officers, members and prospects of the Leo club.',
      imageUrl: '/path/to/movie-mingle-image.jpg',
      link: 'https://github.com/yourusername/movie-mingle',
      technologies: ['ReactJS', 'NodeJS', 'MySQL', 'Tailwind', 'Firebase'],
    },
    {
      title: 'Clipess Company Management System',
      description: `Clipess IT company's Inventory, Leaves, work plan, attendance and administration management were the objectives. Leave module is done by me. This includes real time notification, jwt authentication, e-mail services, pdf generation, etc.`,
      imageUrl: ClipessCompanyProjectImage,
      link: 'https://github.com/yourusername/jupiter-hrm',
      technologies: ['ReactTS', 'ASP.Net', 'MSSQL', 'Pure CSS'],
    },
    {
      title: 'Portfolio',
      description: 'This personal portfolio website showcases my projects, skills, and experience in software development, with a focus on detailed project descriptions and technology tools.',
      imageUrl: PortfolioImage,
      link: 'https://github.com/yourusername/portfolio',
      technologies: ['ReactJS', 'Tailwind'],
    },
    {
      title: 'Postman',
      description: 'A project designed to enhance knowledge. A group project with 4 members. The purposes are to notify the users of the presence of letters, show the postman where the relevant addresses are, keep a database of all addresses.',
      imageUrl: PortfolioImage,
      link: 'https://github.com/yourusername/portfolio',
      technologies: ['ReactTS', 'NodeJS' , 'Express' , 'MongoDB' , 'Material UI'],
    },
    {
      title: 'Wathura',
      description: 'A mobile application for ordering water bottles.The objectives of this are to order water bottles for customers, pay them online, check the date of receipt of water bottles, and conform the order of customers at the same time.',
      imageUrl: PortfolioImage,
      link: 'https://github.com/yourusername/portfolio',
      technologies: ['React-Native','NodeJS','Express',"MongoDB", 'Native-wind'],
    },
    {
      title: 'Automate Washroom Management System',
      description: 'This is a hardware project.Our solution focuses on three main features: odor elimination (including smoke), bathtub temperature regulation, and toilet paper level detection. This project has also been presented for the EXMO exhibition held in 2023.',
      imageUrl: AutomateWashRommManagementSystemImage,
      link: 'https://github.com/yourusername/portfolio',
      technologies: [' Arduino'],
    },
  ];

  return (
    <div className="container mx-auto p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-6 text-center  text-gray-900 dark:text-white">My <span className="text-blue-400">Projects</span></h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button className="bg-gray-300 px-4 py-2 rounded">All</button>
        <button className="bg-gray-200 px-4 py-2 rounded">Web Development</button>
        <button className="bg-gray-200 px-4 py-2 rounded">Others</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-12">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
