import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  technologies: string[];
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link, technologies }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={imageUrl } alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
        {link && (
          <a href={link} className="block mt-4 text-blue-500 hover:underline">
            Learn more
          </a>
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
