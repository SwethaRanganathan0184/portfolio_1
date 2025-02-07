import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <div className="photo-container">
        <img src="/IMG-20241108-WA0179~3.jpg" alt="Your Portrait" className="photo" />
        <div className="social-links">
          <a href="https://www.linkedin.com/in/swetha-ranganathan-7034a925a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/SwethaRanganathan0184" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:swetharanganathan0184@gmail.com">Email</a>
        </div>
      </div>
      <div className="details">
        <h1>Swetha Ranganathan</h1>

        <p>I’m a computer science and engineering student at <a href="https://pes.edu/">PES University</a>, Bangalore.</p>

        <p>This summer, I interned at the <a href="https://research.pes.edu/center-for-computer-networks-and-cyber-security-ccncs/">Center for Computer Networks and Cyber Security</a> as a research intern, researching on Safer communications protocols using quantum methods for higher security. Our team of two members, under the guidance of our professors, <a href="https://staff.pes.edu/nm1538/">Dr. Chandrashekhar Pomu Chavan</a> and Dr. Shantala P T, successfully developed a Hybrid Communication Protocol which combines Quantum Key Distribution(BB84) along with the highly researched Post Quantum Cryptography (Kyber) to provide highly secure and theoretically unbreakable security.</p>

        <p>We successfully developed a simulation of the protocol using <a href="https://www.ibm.com/quantum/qiskit">IBM’s Qiskit</a> library and Python’s <a href="https://openquantumsafe.org/liboqs/">liboqs</a> library and have a low time complexity for the encryption process for a key size of up to 20 qubits. As a result of our research, we have <Link to="/publications">published</Link> a paper at the 4th IEEE International Conference on ICT in Business, Industry and Government (ICTBIG2024) in December 2024, with appreciative comments from the panel for our work.</p>
      
        <p>I have worked on a plethora of projects, including various domains but majorly using the C language, which can be found in my resume. I love to explore new domains and am very interested in Data Structures, Cryptography, Quantum Cryptography & Security and Robotics.</p>
      </div>
    </section>
  );
}

export default AboutMe;
