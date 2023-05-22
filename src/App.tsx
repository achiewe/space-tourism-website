import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Destination from "./components/Destination";
import Crew from "./components/Crew";

function App(): JSX.Element {
  return (
    <Router>
      <MainContainer>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Destination/:planets" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
        </Routes>
        <hr />
      </MainContainer>
    </Router>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  hr {
    @media (min-width: 1024px) {
      position: absolute;
      top: 300px;
      height: 1px;
      width: 473px;
      left: 167px;
      top: 88px;
      border-radius: 0px;
      background: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.25;
      z-index: 1;
    }
  }
`;

export default App;
