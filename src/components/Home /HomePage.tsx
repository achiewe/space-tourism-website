import styled from "styled-components";
import BackgroundMobile from "../../photoes/home/background-home-mobile.jpg";
import Header from "../Header/Header";

const Home = (): JSX.Element => {
  return (
    <HomeMain>
      <Header />
    </HomeMain>
  );
};

const HomeMain = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px;
  align-items: center;
  position: relative;
  background-image: url(${BackgroundMobile});
  padding: 24px;
  background-repeat: no-repeat;
  background-size: cover;
`;
export default Home;
