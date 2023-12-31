import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #222222;
  color: #6a6c6a;
  height: 250px;
  padding: 40px 0;
  .footer-links {
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      cursor: pointer;
      margin-inline: 10px;
      transition: all 0.3s;
      font-size: 17px;
      font-weight: 800;
      &:hover {
        color: #6CB4EE;
      }
    }
  }
  p {
    text-align: center;
    margin: 0;
    a {
      text-decoration: underline;
      color: #6CB4EE;
    }
  }
`;
