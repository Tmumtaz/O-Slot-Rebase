
import "./App.css";
import { Route, Routes } from "react-router";
import Home from './Components/Routes/Home';
import About from "./Components/Routes/About/About";
import Service from "./Components/Routes/Service";
import Contact from "./Components/Routes/Contact/Contact";
import SignUp from "./Components/Sign-up/SignUp";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
      
    </div>
  );
}

export default App;
