import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Navbar from './componants/Navbar';
import Footer from './componants/Footer';
import TopScroll from './componants/TopScroll';
function App() {
  return (
      <div className="App">
        <div className="noise"></div>
        <BrowserRouter>
        <TopScroll/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Work" element={<Work/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </div>
   
  );
}


export default App;
