
import "./App.css";
import { Route, Routes } from "react-router";
import Home from './Components/Routes/Home';
import About from "./Components/Routes/About/About";
import Service from "./Components/Routes/Service";
import Contact from "./Components/Routes/Contact/Contact";
import SignIn from "./Components/Sign-in/SignIn";
import Privacy from "./Components/Routes/Privacy/Privacy";
import Cookies from "./Components/Routes/Cookies/Cookies";
import Terms from "./Components/Routes/TermsAndConditions";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/cookies" element={<Cookies/>} />
        <Route path="/terms" element={<Terms/>} />
      </Routes>
      
    </div>
  );
}

export default App;
