import styled from "styled-components";
import { animated } from "@react-spring/web";

export const Home = styled(animated.div)`
  flex: 1;
  padding-bottom: 20px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  font-size: 0.9rem;

  h2 {
    padding: 0;
    margin: 0;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: normal;
    text-transform: uppercase;
    color: ${(props) => props.theme.palette.subtitle};
  }
`;

export const Task = styled.div`
  background: ${(props) => props.theme.list.item.background};
  border-radius: ${(props) => props.theme.list.item.borderRadius};
  color: ${(props) => props.theme.palette.text};
  font-size: 0.7rem;

  display: flex;
  align-items: center;
  padding: 12px;

  & ~ div {
    margin-top: 8px;
  }
`;

export const TaskCheck = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 2px #ccc;
  margin-right: 8px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${(props) => props.theme.palette.text};
`;
