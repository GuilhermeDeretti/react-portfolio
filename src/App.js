import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projectgallery" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
