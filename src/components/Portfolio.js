//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "AJ's Boutique",
    technologies: "MERN stack (MongoDB, Express, React, Node), Apollo-client, Bcrypt, Boostrap, Concurrently, Dotenv, GraphQL, JWT-decode, Mongoose, Heroku",
    image: "/img/final-project.png",
    description: "This website allows users to either sign up or login. Logged-in users can see their order history details. The website uses Stripe payment platform for accepting payments.",
    repo: "https://github.com/ajaykulkarni01/Ajs-Boutique",
    live: "https://ajs-boutique-final.herokuapp.com",
  },
  {
    id: 1,
    title: "The Book Was Better",
    technologies: "HTML, JavaScript & CSS (bootstrap/bootswatch), Express.js, Node.js, MYSQL, Sequelize, Handlebars and Authentication (crypt, cookies and express-session), Heroku",
    image: "/img/thebookwasbetter.png",
    description: "This is a online book club (blog) which allows users to interact with each other by reading/posting the feedback of the book on the month.",
    repo: "https://github.com/ajaykulkarni01/The-Book-Was-Better",
    live: "https://the-book-was-better-book-club.herokuapp.com/",
  },
  {
    id: 2,
    title: "MOODVIES",
    technologies: "html, css, javascript, Materalized framework, IMDB API",
    image: "/img/moodvies.png",
    description: "This is a minimalist film and tv based application that picks suggestions for the user based on their current mood!",
    repo: "https://github.com/ajaykulkarni01/ideal-telegram",
    live: "https://rhjeffries.github.io/ideal-telegram/",
  },
  {
    id: 3,
    title: "Social Network API",
    technologies: "Express.js, Moment, Mongoose, Nodemon, Insomnia, Regex",
    image: "/img/social-network-API.png",
    description: "This is the API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    repo: "https://github.com/ajaykulkarni01/Social-Network-API",
    live: "https://github.com/ajaykulkarni01/Social-Network-API#Application-Demo",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    technologies: "html, css, javascript, Server side API",
    image: "/img/weather-dashboard.jpg",
    description: "This app allows users to search for a city to return the current weather, as well as a forecast of the next 5 days.",
    repo: "https://github.com/ajaykulkarni01/Weather-Dashboard",
    live: "https://ajaykulkarni01.github.io/Weather-Dashboard/",
  },
  {
    id: 5,
    title: "Text-Editor",
    technologies: "Nodemon, Express, Concurrently, idb, babel-loader, workbox-window, service-worker, InjectManifest, WebpackPwaManifest, HtmlWebpackPlugin",
    image: "/img/text-editor.png",
    description: "This is a single-page application that meets the PWA criteria. It features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser.",
    live: "https://ajay-pwa-text-editor.herokuapp.com/",
    repo: "https://github.com/ajaykulkarni01/PWA-Text-Editor",
  },
 
  {
    id: 6,
    title: "Work Day Scheduler",
    technologies: "html, css, javascript, Moment.js",
    image: "/img/work-day-schedular.png",
    description: "A simple calendar application that allows a user to save events for each hour of the day.",
    repo: "https://github.com/ajaykulkarni01/Work-Day-Scheduler",
    live: "https://ajaykulkarni01.github.io/Work-Day-Scheduler/",
  },
  {
    id: 7,
    title: "Code Quiz",
    technologies: "html, css, js",
    image: "/img/code-quiz.jpg",
    description: "This is a timed coding quiz application with multiple-choice questions",
    repo: "https://github.com/ajaykulkarni01/Code-Quiz",
    live: "https://ajaykulkarni01.github.io/Code-Quiz/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
