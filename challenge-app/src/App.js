import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/landing/landing.jsx";
import HomePage from "./components/home/home";
import MainLayout from "./components/layout/main-layout";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
