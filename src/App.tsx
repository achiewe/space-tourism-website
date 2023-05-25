import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App(): JSX.Element {
  return (
    <Router>
      <MainContainer>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Destination/:planets" element={<Destination />} />
          <Route path="Crew/:person" element={<Crew />} />
          <Route path="Technology/:rocket" element={<Technology />} />
        </Routes>
        <hr className="hr-app" />
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
  .hr-app {
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
