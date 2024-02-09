// src/pages/Home.js
import React from "react";

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Speed Sudoku</h1>
      <p>
        Speed Sudoku brings you the classic puzzle game with a twist: race
        against the clock to complete puzzles before the numbers vanish! Find it
        in the app store, download and play today This game was made solely by
        myself using the Unity Game Engine. If you have any suggestions or want
        to connect reach out by email at berniejr01@gmail.com or
        <a href="https://www.linkedin.com/in/bernie-graves/"> LinkedIn</a>
      </p>

      <div className="image-grid">
        <img src="BlueMode.png" alt="Description1" className="grid-image" />
        <img src="DarkMode.png" alt="Description1" className="grid-image" />
        <img src="LightMode.png" alt="Description1" className="grid-image" />
        <img src="RedMode.png" alt="Description1" className="grid-image" />
        <img src="GreenMode.png" alt="Description1" className="grid-image" />
        <img src="YellowMode.png" alt="Description1" className="grid-image" />
      </div>
    </div>
  );
}

export default Home;
