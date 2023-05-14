import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import OurTeam from "./routes/OurTeam";
import Pickle from "./routes/Pickle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/service" element = {<Service />}/>
        <Route path = "/contact" element = {<Contact />}/>
        <Route path = "/ourteam" element= {<OurTeam />} />
        <Route path = "/pickleform" element={<Pickle />} />
      </Routes>
  
     
    

      
    </div>
  );
}

export default App;
