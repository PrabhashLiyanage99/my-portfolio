import React  from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';


const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg">Prabhash Pramodha</Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link>
          <Link to="/skills" className="text-gray-300 hover:text-white">Skills</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
