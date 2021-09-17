import styled from "styled-components";

const App = styled.div`
  width: 310px;
  height: 600px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
`;

const Camera = styled.div`
  position: relative;
  left: 30%;
  top: 12px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #e6e6e6;
`;

const Speaker = styled.div`
  position: relative;
  left: 40%;
  top: 4px;
  width: 50px;
  height: 3px;
  border-radius: 70px 70px 70px 70px;
  border: 1.3px solid white;
  background: #e6e6e6;
`;

const Flashlight = styled.div`
  position: relative;
  left: 75%;
  top: -1%;
  top: -4px;
  width: 7px;
  height: 6px;
  border-radius: 50%;
  background: #e6e6e6;
`;

const Volume = styled.div`
  position: relative;
  left: 100.3%;
  width: 3px;
  background: white;
  border-radius: 50px 50px 50px 50px;
  top: 15%;
  height: 70px;
`;

const Power = styled.div`
  position: relative;
  left: 100.3%;
  width: 3px;
  background: white;
  border-radius: 50px 50px 50px 50px;
  top: 18%;
  height: 35px;
`;

const Content = styled.div`
  position: relative;
  left: 5px;
  top: -95px;
  width: 296px;
  height: 520px;
  border: 2px solid #e6e6e6;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  padding: 0 12px;
  background: ${(props) => props.theme.background};
`;

export { App, Camera, Speaker, Flashlight, Volume, Power, Content };
