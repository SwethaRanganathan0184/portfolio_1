import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Education</h2>
      <p className="uniname"><b>PES University</b> | Bangalore, India</p>
      <p className="desc"><i>Bachelor of Technology in Computer Science and Engineering</i></p>
      <p className="awards">Awards: <ul>
                                        <li>Distinction Award Scholarship - Sem 1</li>
                                        <li>Prof. MRD Scholarship - Sem 2 (awarded to top 20%) </li>
                                        <li>Distinction Award Scholarship - Sem 3</li>
                                        <li>Prof. CNR Rao Scholarship - Sem 4 (awarded to top 20%)</li>
                                    </ul></p>
    </section>
  );
}

export default Contact;
