import React from 'react';
import './about.css';
const AboutPage = () => {
  return (
    <div>
      <h1>About App</h1>
      <div>
        <video controls width="400">
          <source src="/project.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AboutPage;
