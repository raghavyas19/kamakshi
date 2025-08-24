import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Mission from './pages/Mission';
import Members from './pages/Members';
import Domains from './pages/Domains';
import Gallery from './pages/Gallery';
import Rights from './pages/Rights';
import Blogs from './pages/Blogs';
import Calendar from './pages/Calendar';
import Volunteers from './pages/Volunteers';
import News from './pages/News';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mission" element={<Mission />} />
            <Route path="members" element={<Members />} />
            <Route path="domains" element={<Domains />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="rights" element={<Rights />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="volunteers" element={<Volunteers />} />
            <Route path="news" element={<News />} />
          </Route>
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;