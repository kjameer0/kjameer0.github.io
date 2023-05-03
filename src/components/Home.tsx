//images and styles
import styled from 'styled-components';
import selfImg from '../../assets/Khalid-picture.jpg';
export default function Home() {
  return (
    <div className="page-container">
      <h1 className="main-heading">Khalid Jameer</h1>
      <h1
        className="main-heading"
        style={{
          display: new Date().getMinutes() === 0 && new Date().getHours() === 2 ? '' : 'none',
        }}
      >
        (BerjermaineHeadass)
      </h1>
      <h2 className="sub-heading">Software Engineer</h2>
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
    </div>
  );
}
