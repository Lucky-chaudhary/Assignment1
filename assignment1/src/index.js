import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import NotFound from './components/NotFound';
import Contact from "./components/Contact";
import Services from "./components/Services";


import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./index.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/js/all.min.js"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="services" element={<Services/>} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);