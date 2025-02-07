import React from "react";
import "./QuantumContent.css"; // Import the CSS file

function QuantumContent() {
  return (
    <section className="quantum">
      <h2 className="quantum-title">Quantum Content</h2>
      <div className="quantum-cards">
        {/* Card 1 */}
        <div className="quantum-card">
          <h3 className="card-title">Book Recommendation</h3>
          <p className="card-description">
            <b>"Quantum Computation and Quantum Information"</b> by Michael A. Nielsen and Isaac L. Chuang. 
            A must-read for anyone diving into the foundations of quantum computing.
          </p>
        </div>

        {/* Card 2 */}
        <div className="quantum-card">
          <h3 className="card-title">The Quantum World</h3>
          <p className="card-description">
            The Quantum World is a website I launched to explain and consolidate the knowledge required to understand Quantum Computing and Quantum Communication.
            Check it out here: 
            <a 
                href="https://thequantumworld5.wordpress.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >The Quantum World</a>
          </p>
        </div>

        {/* Card 3 */}
        <div className="quantum-card">
          <h3 className="card-title">Learning Resource</h3>
          <p className="card-description">
            Here are a few resources I found extremely resourceful when I wandered into the world of Quantum Cryptography & Security:
          </p>
          <ul className="resource-list">
          <li>
              <a 
                href="https://www.youtube.com/playlist?list=PLWt5FuzgdX4nLn__pXyUBB5Gbwu7L-G5K" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Quantum Computing Basics - A playlist | Professor Nano
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/playlist?list=PLxhaPrr4aQ9lnBEOoy7r6KNlrTG_obLgr" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Quantum Gates and Circuits - A playlist
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/watch?v=8hNQyTdNil4" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Quantum Key Distribution, BB84 - simply explained | Quantum 1x1
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/watch?v=uE_Y1C4QPU8" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                What is Post Quantum Cryptography? | NIST
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/watch?v=lVXJgn3fDkg" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Quantum Key Distribution | QuTech Academy
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/watch?v=QDdOoYdb748" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Lattice-based cryptography: The tricky math of dots
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/playlist?list=PLOFEBzvs-VvrgHZt3exM_NNiNKtZlHvZi" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Qiskit Tutorials by IBM
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/playlist?list=PL0nX4ZoMtjYH-6jH82HTtiaeO8pNE_iJK" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Quantum Computing Programming with Qiskit
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/watch?v=N-93yBZV-aw" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Post Quantum Cryptography using liboqs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default QuantumContent;
