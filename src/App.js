import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Publications from "./components/Publications";
import FavouriteReads from "./components/FavouriterReads";
import QuantumContent from "./components/QuantumContent";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Route for the home page */}
          <Route 
            path="/" 
            element={
              <main>
                <AboutMe />
                <Interests />
                <Contact />
              </main>
            } 
          />
          {/* Route for the publications page */}
          <Route path="/publications" element={<Publications />} />
          <Route path="/favourite-reads" element={<FavouriteReads />} />
          
          <Route path="/quantum-content" element={<QuantumContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
