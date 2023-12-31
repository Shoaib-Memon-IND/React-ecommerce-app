import styled from "styled-components";
export const StyledSignInSection = styled.section`
  position: relative;
  display: flex;
  background-color: #6CB4EE;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #6CB4EE;
    z-index: 1;
  }
  //SignInFormBlock
  .signin-form-block {
    z-index: 2;
    min-width: 350px;
    background: #002D62;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 2px 4px 0px,
      rgba(0, 0, 0, 0.8) 0px 2px 16px 0px;
    padding: 30px 20px;
    h3 {
      font-weight: 900;
      font-size: 25px;
      margin-bottom: 35px;
      text-align: center;
      color: var(--es-identity-color);
      -webkit-text-stroke: 1px var(--es-identity-color);
      -webkit-text-fill-color: #fff;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      input {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 10px;
        &:focus {
          outline: 1px solid var(--es-identity-color);
        }
      }
      button {
        background: #6CB4EE;
        border-radius: 10px;
        margin-top: 15px;
        border: none;
        color: white;
        font-size: 18px;
        font-weight: 600;
        &:hover {
          background: #c1631e;
        }
      }
    }
  }
`;
