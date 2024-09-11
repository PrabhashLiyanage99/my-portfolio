import { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import Button from '../components/Button';
import ProfileImage from '../assets/images/profileImage.jpg';
import { Link } from 'react-router-dom';


export default function HeroSection() {
  const imageControls = useAnimation();
  const [text, setText] = useState('');
  const fullText = "Third-year undergraduate in the Faculty of Information Technology at the University of Moratuwa, very enthusiastic about full-stack web development and mobile app development.";

  useEffect(() => {
    imageControls.start({
      x: '-50%',  // Adjust this value to move the image closer to the text
      transition: { duration: 1, ease: 'easeInOut' },
    });
  }, [imageControls]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 flex items-center justify-center">
      {/* Center the text content statically, shifted to the left */}
      <div className="flex flex-col items-center justify-center text-center relative" style={{ left: '-250px' }}>
        <motion.h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Hi, I'm Prabhash <span className="text-blue-400">Pramodha</span>
        </motion.h1>
        <motion.p className="text-2xl mb-8 text-gray-700 dark:text-gray-300">
          A Full-Stack Web Developer
        </motion.p>
        <Link to="/projects">
        <Button text="View Projects"  className="bg-blue-300 hover:bg-blue-400 text-white" />
        </Link>
        <Link to ="/contact">
        <Button text="Contact Me"  className="bg-blue-300 hover:bg-blue-400 text-white mt-4" />
        </Link>
      </div>

      {/* Animate the profile image from outside of the screen */}
      <motion.div
        className="absolute right-0"
        initial={{ x: '100%' }} // Start from outside of the screen
        animate={imageControls}
        style={{ marginLeft: '-50px' }}  // Moves the image closer to the text
      >
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-80 h-120 rounded-lg border-4 border-blue-500"
        />
      </motion.div>
    </div>
  );
}
