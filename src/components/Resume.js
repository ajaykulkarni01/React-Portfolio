// Link to a downloadable resume
// a list of the developer’s proficiencies

import React from "react";

function Resume() {
  return (
    <div>
      <div>
          <p className="content is-medium">Resume</p>
          <hr />
          <p className="content">
            Click on this button to download my <a className="button is-primary" href={process.env.PUBLIC_URL + "/ResumeAK.pdf"} target="_blank"
            rel="noreferrer" > <span className="icon"> <i className="fas fa-download"></i></span><span>   Resume</span> </a>
          </p>
      </div>
        <div><br></br>
          <p className="content is-medium">Skills</p>
              <hr />
        </div>
        <div className="columns has-text-left">
            <div className="column is-mobile">
              <p className="has-text-weight-bold">Browser Based Technologies</p><br></br>
                <ul>
                    <li>HTML: <progress className="progress is-info" value="90" max="100"></progress></li>
                    <li>CSS: <progress className="progress is-info" value="90" max="100"></progress></li>
                    <li>JavaScript: <progress className="progress is-info" value="80" max="100"></progress></li>
                    <li>jQuery: <progress className="progress is-info" value="80" max="100"></progress></li>
                    <li>Responsive Design: <progress className="progress is-info" value="90" max="100"></progress></li>
                    <li>Bootstrap: <progress className="progress is-info" value="85" max="100"></progress></li>
                    <li>Handlebars: <progress className="progress is-info" value="80" max="100"></progress></li>
                    <li>Local Storage, Session Storage, IndexedDB: <progress className="progress is-info" value="75" max="100"></progress></li>
                    <li>React.js: <progress className="progress is-info" value="70" max="100"></progress></li>
                </ul><br></br>
              <p className="has-text-weight-bold">Server Side Development</p><br></br>
                <ul>
                    <li>Node.js: <progress className="progress is-info" value="70" max="100"></progress></li>
                    <li>Express: <progress className="progress is-info" value="70" max="100"></progress></li>
                    <li>User Authentication: <progress className="progress is-info" value="60" max="100"></progress></li>
                    <li>Progressive Web Applications (PWAs): <progress className="progress is-info" value="60" max="100"></progress></li>
                    <li>MERN Stack (MongoDB, Express.js, React.js, Node.js): <progress className="progress is-info" value="60" max="100"></progress></li>
                </ul><br></br>
            </div>
            <div className="column is-mobile">
              <p className="has-text-weight-bold">API Interaction</p><br></br>
                <ul>
                    <li>API: <progress className="progress is-info" value="60" max="100"></progress></li>
                    <li>JSON: <progress className="progress is-info" value="65" max="100"></progress></li>
                    <li>AJAX: <progress className="progress is-info" value="60" max="100"></progress></li>
                </ul><br></br>
              <p className="has-text-weight-bold">Databases</p><br></br>
                <ul>
                    <li>MySQL: <progress className="progress is-info" value="70" max="100"></progress></li>
                    <li>MongoDB: <progress className="progress is-info" value="65" max="100"></progress></li>
                </ul><br></br>
              <p className="has-text-weight-bold">Deployment/Command-Line Fundamentals</p><br></br>
                <ul>
                    <li>Heroku: <progress className="progress is-info" value="80" max="100"></progress></li>
                    <li>Git: <progress className="progress is-info" value="90" max="100"></progress></li>
                </ul>
            </div>
</div>
    </div>
  );
}

export default Resume;
