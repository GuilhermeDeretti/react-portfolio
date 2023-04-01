import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Stripe from './components/Stripe';
import Home from './components/pages/Home';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="react-portfolio/" element={<Home />} />
          <Route path="react-portfolio/projectgallery" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="react-portfolio/contact" element={<Contact />} />
        </Routes>
        <Stripe />
      </div>
    </Router>
  );
}

export default App;
