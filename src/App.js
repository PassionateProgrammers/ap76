import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News';
import Purpose from './components/Purpose';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Live from './components/articles/Live';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/what-we-do' element={<Purpose />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/live' element={<Live />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
