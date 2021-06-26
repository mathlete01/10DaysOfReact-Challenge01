import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App({person}) {
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <img className="user-deets" src={person.avatar}></img>
        <h3 className="user-deets">
          <a href={`https://www.twitter.com/${person.twitterUsername}`}>
            {person.name}
          </a>
        </h3>
        <strong className="user-deets">Location</strong>
        {person.location}
        <br></br>
        <br></br>
        <strong className="user-deets">Eats</strong>
        {person.foodType}
        <br></br>
        <br></br>
        <strong className="user-deets">Age</strong>
        {person.age}
        <br></br>
        <br></br>
        <strong className="user-deets">Likes</strong>
        {person.likes}
        <br></br>
        <br></br>
        <strong className="user-deets">Twitter</strong>
        <a href={`https://www.twitter.com/${person.twitterUsername}`}>
          @{person.twitterUsername}
        </a>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App person={user} />, rootElement);
