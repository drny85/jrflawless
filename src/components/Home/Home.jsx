import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__top_container">
        <div className="top_container__img">
          <img
            src="https://i.pinimg.com/originals/41/79/61/417961be9857e821f36d17c3d0508288.png"
            alt="img"
          />
        </div>
        <div className="info">
          <h1>JR Flawless</h1>
          <p>Hair Extensions</p>
        </div>
      </div>
    </div>
  );
}
