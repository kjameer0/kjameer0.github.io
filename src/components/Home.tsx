import { baseUrl } from 'utils/url';

export default function Home() {
  return (
    <div className="page-container">
      <h1 className="main-heading" style={{ fontSize: '3rem' }}>
        Welcome!
      </h1>
      <div className="img-container">
        <div id="self-picture-div">
          <img src="/Khalid-picture.jpg" alt="me" width="600" height="700" />
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
