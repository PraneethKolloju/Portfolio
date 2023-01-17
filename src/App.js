import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Projects from './pages/projects'
import Home from './pages/Home';
import ProjectDisplay from './pages/projectDisplay';
import Experience from './pages/experience';
import Navbar from './components/navbar';
import Footer from './components/footer'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato&family=Ubuntu:wght@300&display=swap');
</style>
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
