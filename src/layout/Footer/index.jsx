import React from "react";
import {Container} from "reactstrap";
import {StyledFooter} from "./footer.styled";
import {LinkContainer} from "react-router-bootstrap";
import SocialList from "../../components/SocialList";
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <SocialList />
        <ul className="footer-links">
          <LinkContainer to={"/"}>
            <li>Home</li>
          </LinkContainer>
          <LinkContainer to={"/shop"}>
            <li>Shop</li>
          </LinkContainer>
          <LinkContainer to={"/cart"}>
            <li>Cart</li>
          </LinkContainer>
        </ul>
        <p>
          Made By{" "}
          <a
            href="https://www.linkedin.com/in/shoaib-memon"
            target={"_blank"}
            rel="noreferrer"
          >
            Shoaib Memon
          </a>
        </p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
