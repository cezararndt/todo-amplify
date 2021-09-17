import AppBar from "./components/AppBar";
import Home from "./pages/home";
import * as S from "./styles";
import { withAuthenticator } from '@aws-amplify/ui-react'

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

export default withAuthenticator(App);
