import React from 'react';
import { SiJavascript, SiTypescript, SiC, SiCsharp, SiPostman } from 'react-icons/si';
import { FaReact, FaGithub, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJira, SiReactbootstrap, SiDotnet } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen py-12">
      <h1 className="text-5xl text-center font-bold mb-12">
        My <span className="text-blue-400">Skills</span>
      </h1>

      <div className="container mx-auto px-4">
        {/* Programming Languages */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">Programming Languages</h2>
          <div className="flex justify-center space-x-8">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <FaJava size={60} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <SiJavascript size={60} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <SiTypescript size={60} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <SiC size={60} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <SiCsharp size={60} />
            </div>
          </div>
        </section>

        {/* Frameworks */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">Web Development</h2>
          <div className="flex justify-center space-x-8">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <FaReact size={60} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <SiDotnet size={60} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <SiNextdotjs size={60} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <SiTailwindcss size={60} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <SiReactbootstrap size={60} />
            </div>
          </div>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Tools</h2>
          <div className="flex justify-center space-x-8">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <SiFigma size={60} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <FaGithub size={60} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <SiJira size={60} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-400">
              <SiPostman size={60} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
