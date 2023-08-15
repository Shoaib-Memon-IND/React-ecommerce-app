import styled from "styled-components";

//HERO_SEC
export const HeroSection = styled.section`
  .hero-img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
    .hero-txt {
      text-align: left;
      h1 {
        color: #111;
        letter-spacing: 2px;
        font-size: 35px;
      }
      p {
        color: #111;
        font-size: 55px;
        font-weight: 300;
        span {
          font-weight: 700;
          font-size: 55px;
          -webkit-text-fill-color: #002D62;
        }
      }
    }
  }
`;
