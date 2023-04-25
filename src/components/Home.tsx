import ProjectCard from './reusables/ProjectCard';
import { ProjectInfo } from 'utils/types';
import githubIcon from '../../assets/icons/github-mark-white.png';
import linkedInIcon from '../../assets/icons/LI-In-Bug.png';

import styled from 'styled-components';
import selfImg from '../../assets/Khalid-picture.jpg';
export default function Home() {
  return (
    <div className="page-container">
      <h1 className="main-heading">Welcome!</h1>
      <div className="img-container">
        <div id="self-picture-div">
          <img src={selfImg} alt="me" width="600" height="700" />
        </div>
        <div className="para-container">
          <p className="content-paragraph">
            Hi! I’m Khalid Jameer. I’m a software engineer and comedian based in New York City. I
            primarily use React, TypeScript, and Node.js for front end development. One of my goals
            is to build tools that lifelong learners can use to more directly engage with the
            content that they are trying to master. Check out my newest small projects in the
            Experiments tab, and check out the Projects tab to see my bigger undertakings.
          </p>
        </div>
      </div>
      <div className="logo">
        <a href="https://github.com/kjameer0">
          <img src={githubIcon} width={'65'} height={'65'} alt="github" />
        </a>
        <a href="https://linkedin.com/in/khalidjameer">
          <img src={linkedInIcon} width={'75'} height={'75'} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}
