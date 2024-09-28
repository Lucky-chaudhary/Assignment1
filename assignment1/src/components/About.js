import React from 'react';
import myImage from '../assets/mypic.jpg'; 

const About = () => {
  return (
    <div>
    <div className="container">
      <img className="myPic" src={myImage} alt="Lakhwinder Chaudhary" />
      <div className="text">
        <h2>LAKHWINDER CHAUDHARY</h2>
        <p>
          My name is Lakhwinder Chaudhary, and I am a dedicated software engineering student in my second year at Centennial College in Toronto, Ontario. Originally from Chandigarh, India, I have a passion for coding and enjoy creating innovative software solutions. I am proficient in several programming languages and technologies, including C#, Java, Python, HTML, CSS, JavaScript, and the MERN stack, as well as SQL for database management. In my free time, I love painting, gardening, and diving into a good book. I also enjoy watching movies and anime, traveling to new places, and playing badminton. I believe that my diverse interests not only enrich my life but also inspire my work in technology.
        </p>
        <h4>My Resume</h4>
        <a href="https://drive.google.com/file/d/1Lvez5Hr9osLdfedZsDN3crq63gRBnGnt/view?usp=sharing" target="blank" rel="noopener noreferrer">View My Resume</a>
      </div>
    </div>
  </div>

  );
};
export default About;