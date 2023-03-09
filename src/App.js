import Navbar from "./Components/NavBar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from './Components/Routes/Home';
import About from "./Components/Routes/About"
import Service from "./Components/Routes/Service";
import Contact from "./Components/Routes/Contact";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    </div>
  );
}

export default App;
