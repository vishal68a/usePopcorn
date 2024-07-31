import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
// import "./responsive.css";
// import App from "./App";
import App2v from "./App2v";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={5} color="blue" onRating={setMovieRating} />
      <p>this movie was rated {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={10}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
      defaultRating={3}
    />

    <Test /> */}
    <App2v />
  </React.StrictMode>
);
