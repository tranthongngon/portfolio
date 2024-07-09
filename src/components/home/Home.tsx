import React from "react";
import me from "../../assets/images/me.png";
import "./style.scss";
export default function Home() {
  return (
    <div className="home__wrap">
      <div className="container">
        <div className="home__content">
        <div className="home__text">
          <span className="home__text-hello">👋 Hello All</span>
          <h4 className="home__text-title">
            I’m Tran Thong Ngon, A Frontend Developer
          </h4>
        </div>
        <div className="home__thumbnail">
          <img src={me} alt="ngontt" />
        </div>
        </div>
      </div>
    </div>
  );
}
