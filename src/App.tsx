import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home /HomePage";
function App(): JSX.Element {
  return (
    <Router>
      <MainContainer>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
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
`;

export default App;
