import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Members from './components/Members';
import Domains from './components/Domains';
import Gallery from './components/Gallery';
import Rights from './components/Rights';
import Blog from './components/Blog';
import Calendar from './components/Calendar';
import Volunteers from './components/Volunteers';
import News from './components/News';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const activeSection = useScrollSpy();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 min-h-screen">
        <Navbar activeSection={activeSection} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Hero />
          <Mission />
          <Members />
          <Domains />
          <Gallery />
          <Rights />
          <Blog />
          <Calendar />
          <Volunteers />
          <News />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;