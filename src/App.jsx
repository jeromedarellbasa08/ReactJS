import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./pages/home/Home";
import Work from "./pages/work/Work";
import Education from "./pages/education/Education";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/education" element={<Education />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
