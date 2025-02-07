import React from "react";
import { Link } from "react-router-dom"; // Import Link for client-side navigation
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="home-link">Home</Link>
      </div>
      <div className="navbar-right">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <Link to="/publications">Publications</Link>
        <Link to="/quantum-content">Quantum Content</Link>
        <Link to="/favourite-reads">My Reads</Link> {/* New link for My Reads */}
        
      </div>
    </nav>
  );
}

export default Navbar;
