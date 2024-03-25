import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News';
import Purpose from './components/Purpose';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Live from './components/articles/Live';
import Sidebar from './components/Sidebar';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
      <meta property="og:url" content="https://www.ap76.org/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ap76.org" />
      <meta property="og:description" content="Amor Patriae 1776" />
      <meta property="og:image" content="https://ap76.org/ap76logo.jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="ap76.org" />
      <meta property="twitter:url" content="https://www.ap76.org/" />
      <meta name="twitter:title" content="ap76.org" />
      <meta name="twitter:description" content="Amor Patriae 1776" />
      <meta name="twitter:image" content="https://ap76.org/ap76logo.jpeg" />
      <meta name="twitter:site" content="@SupportAp76" />
      </Helmet>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/what-we-do' element={<Purpose />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/news/welcome-to-our-new-website' element={<Live />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
