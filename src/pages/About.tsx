import { useState, useEffect } from 'react';
import AboutImage from "../assets/images/AboutImage.jpg";
import ExperienceImage from '../assets/images/AboutMeImage.jpeg';
import MAMDCImage from '../assets/images/MAMDC.jpeg';
import DevthonImage from '../assets/images/Devthon.jpg';
import FutureWaveImage from '../assets/images/futureWave.jpg';
import { useAnimation, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function AboutMeSection() {
  type TabType = 'Education' | 'Experience' | 'Certificates' | 'Other Skills' | 'Volunteering';

  const [activeTab, setActiveTab] = useState<TabType>('Education');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // State for dropdown visibility
  const imageControls = useAnimation();
  const experienceImageControls = useAnimation();

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    setActiveDropdown(null); // Close dropdown when changing tabs
  };

  const handleDropdownClick = (project: string) => {
    setActiveDropdown(activeDropdown === project ? null : project); // Toggle dropdown
  };

  // Image animation for the "Education" tab (left side transition)
  useEffect(() => {
    if (activeTab === 'Education') {
      imageControls.start({
        x: '0',
        opacity: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      });
    }
  }, [activeTab, imageControls]);

  // Image animation for the "Experience" tab (right side transition)
  useEffect(() => {
    if (activeTab === 'Experience') {
      experienceImageControls.start({
        x: '0', // Brings the image to its original position
        opacity: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      });
    } else {
      experienceImageControls.start({
        x: '100%', // Moves the image off-screen to the right
        opacity: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      });
    }
  }, [activeTab, experienceImageControls]);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-left">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Profile Image Section */}
        <motion.img
          src={AboutImage}
          alt="Profile"
          className="rounded-lg w-80 h-auto shadow-lg"
          initial={{ x: '-100%', opacity: 0 }}
          animate={imageControls}
          style={{ marginLeft: '5%', border: '3px solid #3B82F6', marginRight: '5%' }} // Border stays
        />

        {/* About Me Content */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About <span className="text-blue-400">Me</span></h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            I am a dedicated Information Technology undergraduate at the University of Moratuwa with strong problem-solving skills,
            attention to detail, and proficiency in multiple programming languages and technologies. I excel in project management and
            full-stack development, allowing me to efficiently address challenges across the entire software development lifecycle with
            creativity and innovation.
          </p>

          {/* Tabs */}
          <div className="flex space-x-6 mb-4">
            {['Education', 'Experience', 'Certificates', 'Other Skills', 'Volunteering'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab as TabType)}
                className={`px-4 py-2 border-b-2 ${
                  activeTab === tab
                    ? 'border-blue-400 dark:border-blue-400 text-blue-400  dark:text-blue-400 '
                    : 'border-transparent text-gray-500 dark:text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'Education' && (
              <div>
                <ul className="list-disc pl-5 text-gray-900 dark:text-gray-300">
                  B.Sc. Information Technology (Hons)<br />
                  Faculty of Information Technology<br />
                  University of Moratuwa <br />
                  (2022 - present)
                </ul>
              </div>
            )}
            {activeTab === 'Experience' && (
              <div className="container mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                 <ul className="list-disc pl-5 text-gray-900 dark:text-gray-300 mr-4">
                  <li>Activity Coordinator - UoM Leos (2023 - 2024)</li>
                  <li>Chief Activity Coordinator - UoM Leos (2024 - 2025)</li>
                 </ul>
                 <motion.img
                  src={ExperienceImage}
                  alt="Profile"
                  className="rounded-lg w-80 h-auto shadow-lg"
                  initial={{ x: '100%', opacity: 0 }} // Start off-screen to the right
                  animate={experienceImageControls}
                  style={{ marginRight: 'auto', border: '3px solid #3B82F6' }} // Border stays
                />
              </div>
            )}
            {activeTab === 'Certificates' && (
              <div>
                <ul className="list-disc pl-5 text-gray-900 dark:text-gray-300">
                  <li>15th place : CodeRush 2023 - Hackathon Organized by Information Technology of University of Moratuwa</li>
                  <li>Front-end Web Development - Open UoM</li>
                  <li>Web Design for Beginners - Open UoM</li>
                </ul>
              </div>
            )}
            {activeTab === 'Other Skills' && (
              <div>
                <ul className="list-disc pl-5 text-gray-900 dark:text-gray-300">
                  <li>Project Management</li>
                  <li>Team Work</li>
                  <li>Leadership</li>
                  <li>Analytical Skills</li>
                  <li>Graphic Design</li>
                </ul>
              </div>
            )}
            {activeTab === 'Volunteering' && (
              <div>
                <ul className="list-disc pl-5 text-gray-900 dark:text-gray-300">
                  <li>
                    <button
                      onClick={() => handleDropdownClick('DevThon')}
                      className="flex items-center text-gray-900 dark:text-white"
                    >
                      Dev&#123;thon&#125;
                      <FontAwesomeIcon
                        icon={activeDropdown === 'DevThon' ? faChevronUp : faChevronDown}
                        className="ml-10"
                      />
                    </button>
                    {activeDropdown === 'DevThon' && (
                      <div className="container mx-auto flex flex-col md:flex-row">
                        <div className="pl-5 mt-2">
                          Web development competition organized by Leo club of University of Moratuwa and Leo club of Sri Lanka Technological Campus. Is a committee member.
                          <img
                            src={DevthonImage}
                            alt="Devthon"
                            className="rounded-lg w-80 h-auto shadow-lg"
                            style={{ margin: '10px', border: '3px solid #3B82F6' }}
                          />
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <button
                      onClick={() => handleDropdownClick('Tharka')}
                      className="flex items-center text-gray-900 dark:text-white"
                    >
                      Tharka
                      <div className='ml-16'>
                        <FontAwesomeIcon
                          icon={activeDropdown === 'Tharka' ? faChevronUp : faChevronDown}
                        />
                      </div>
                    </button>
                    {activeDropdown === 'Tharka' && (
                      <div className="container mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                        <div className="pl-5 mt-2">
                          Debate competition organized by Leo club of University of Moratuwa and Helakuru software company. Is a committee member.
                          <img
                            src={MAMDCImage}
                            alt="Tharka"
                            className="rounded-lg w-80 h-auto shadow-lg"
                            style={{ margin: '10px', marginTop: '5', border: '3px solid #3B82F6' }}
                          />
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <div>
                      <button
                        onClick={() => handleDropdownClick('FutureWave')}
                        className="flex items-center text-gray-900 dark:text-white"
                      >
                        Future - Wave
                        <div className='ml-3'>
                          <FontAwesomeIcon
                            icon={activeDropdown === 'FutureWave' ? faChevronUp : faChevronDown}
                          />
                        </div>
                      </button>
                      {activeDropdown === 'FutureWave' && (
                        <div className="container mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                          <div className="pl-5 mt-2">
                            Robotic camp organized by Leo club of University of Moratuwa and Gavesha Labs. Is a committee member.
                            <img
                              src={FutureWaveImage}
                              alt="Future Wave"
                              className="rounded-lg w-80 h-auto shadow-lg"
                              style={{ margin: '10px', border: '3px solid #3B82F6' }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
