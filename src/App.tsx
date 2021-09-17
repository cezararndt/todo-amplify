import AppBar from "./components/AppBar";
import Home from "./pages/home";
import * as S from "./styles";

function App() {
  return (
    <S.App>
      <S.Camera />
      <S.Speaker />
      <S.Flashlight />
      <S.Volume />
      <S.Power />
      <S.Content>
        <AppBar title={""} />
        <Home />
      </S.Content>
    </S.App>
  );
}

export default App;
