import React from "react";
import {HeroSection} from "./home.styled";
import heroImg from "../../assets/hero.jpg";

const HeroSec = () => {
  return (
    <HeroSection>
      <div
        className="hero-img"
        style={{
          background: `url("${heroImg}") no-repeat center center`,
          backgroundSize: "cover",
          width: "100%",
          minHeight: "600px",
        }}
      >
        <div className="hero-txt mt-5">
          <p><span>70%</span> OFF!</p>
          <h1>Look Our new <br/>Collections </h1>
          <p>
            The best of global brands, at your doorstep!
          </p>
        </div>
      </div>
    </HeroSection>
  );
};

export default HeroSec;
