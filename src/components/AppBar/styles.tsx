import styled from "styled-components";

export const AppBar = styled.div`
  background: ${(props) => props.theme.appBar};
  min-height: 32px;
  height: 32px;
  width: calc(100% + 40px);
  z-index: 2;
  box-shadow: 0 0 8px rgb(0 0 0 / 20%);
  transform: translateX(-20px);
`;
