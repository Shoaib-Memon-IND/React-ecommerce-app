import styled, {css} from "styled-components";

const resetBtnStyle = css`
  transition: all 0.4s;
  background: var(--es-identity-color-2);
  color: white;
  border: none;
  padding: 2px 10px;
  font-size: 17px;
  text-transform: uppercase;
  padding: 9px 18px;
`;
const outlineBtnStyle = css`
  border: 2px solid #002D62;
  color: #002D62;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #002D62;
  }
`;
const fillBtnStyle = css`
  background-color: #002D62;
  border: 2px solid #002D62;
  color: white;
  font-weight: 700;
  width: 100%;
  &:hover {
    color: #002D62;
    background-color: white;
  }
`;

export const CustomButtonStyled = styled.button`
  ${resetBtnStyle}
  ${(props) => {
    switch (props.type) {
      case "outline-btn":
        return outlineBtnStyle;
      case "fill-btn":
        return fillBtnStyle;
      default:
        return;
    }
  }}
`;
