import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import BgAnime from "./components/BgAnime";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import About from "./pages/About";
import History from "./pages/History";

function App() {
  return (
    <div className="App container secp home-overflow">
      <BgAnime />
      <div className="row align-items-center">
        <Router>
          <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 navbar-center py-lg-5 py-0">
            <Navbar />
          </div>
          <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 cp-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
