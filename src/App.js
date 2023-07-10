import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Konstantina Boua and is open sourced on{" "}
          <a
            href="https://github.com/KonsBo/weather-app-react"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-w3ather-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
