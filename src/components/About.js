// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">UI/UX Designer and an aspiring Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Ajay Kulkarni"/>
      <p className="content is-italic mt-4">
        I'm Ajay, a Multimedia specialist with hands on experience in e-Learning, Graphic/Web design, Animation. I'm currently studying the full stack to enhance my coding skills which will compliment my designing expertise.
      </p>
      <p className="content">
        Throughout my career, I was fortunate to have worked on a diverse range of global employers from small businesses to fortune 500 companies. As a result, I bring a unique combination of skillset to the table that enables me to manage multi-disciplinary projects and to navigate complex challenges.
      </p>
    </div>
  );
}

export default About;
