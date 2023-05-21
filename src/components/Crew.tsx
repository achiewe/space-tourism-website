import styled from "styled-components";
import Header from "./Header/Header";
import BgMobile from "../../public/photoes/crew/background-crew-mobile.jpg";

const Crew = (): JSX.Element => {
  return (
    <CrewMain>
      <Header />
    </CrewMain>
  );
};

const CrewMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${BgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: flex-start;
`;
export default Crew;
