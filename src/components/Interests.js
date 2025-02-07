import React from "react";
import { Link } from "react-router-dom";
import "./Interests.css";

function Interests() {
  return (
    <section id="interests" className="interests">
      <h1>Interests</h1>
      <div className="h3">
        <p>I truly believe reading brings peace. As an avid reader myself, I have found great solace in reading books of various genre each different from the other allowing me to explore multiple worlds, fictional yet fun and adventurous. Do find my <Link to="/FavouriteReads">favourite reads</Link>, listed by genre. I also love to read papers and quantum computing related tech innovations,helping me learn more about the quantum world.</p>
        <p>I am a trained Bharatnatyam Dancer and disciple of Guru Smt. Kousalya Nivas. I have performed in multiple prestigious stages, such as Mysuru Dusshera, Uchila Dushera, Chowdiah Memorial Hall, ICCR and much more. I have completed 8 grades from Annamalai University, Chidambaram.</p>
        <p>I have trained in the instruments guitar and keyboard and am also a trained Carnatic singer. Totally love to jam to new songs and totally adore pop songs. An Ed Sheeran and Taylor Swift fan through and through.</p>
        
      </div>
    </section>
  );
}

export default Interests;
