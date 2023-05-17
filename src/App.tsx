import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import BackgroundImage from "../src/photoes/home/background-home-mobile.jpg";
import Header from "./components/HeaderComponent/Header";

function App(): JSX.Element {
  return (
    <MainContainer>
      <GlobalStyles />
      <Header />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default App;
