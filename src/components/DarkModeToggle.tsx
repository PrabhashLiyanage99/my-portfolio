import React, { useEffect, useState } from 'react';

const DarkModeToggle: React.FC = () => {
  // Initialize dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode !== null) {
      // If dark mode is stored in localStorage, use that value
      return savedMode === 'true';
    } else {
      // Otherwise, use the system preference or default to dark mode
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark || true; // Default to dark mode if no preference
    }
  });

  // Apply dark mode classes and save preference to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-200 dark:bg-gray-800 p-2 rounded"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
