import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/ajaykulkarni01" target="_blank" rel="noreferrer">
            Ajay Kulkarni
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/ajay-kulkarni-b9138018/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://ajaykulkarni01.github.io/Portfolio-2/" target="_blank" rel="noreferrer">
            My full portfolio
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
