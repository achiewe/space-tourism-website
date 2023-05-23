import styled from "styled-components";
import Header from "./Header/Header";
import BgMobile from "../../public/photoes/crew/background-crew-mobile.jpg";
import { useParams } from "react-router-dom";
import douglasMobile from "../../public/photoes/crew/image-douglas-hurley.webp";
import data from "../../data.json";

const Crew = (): JSX.Element => {
  const param = useParams();
  const crewInfo = data.crew.find((item) => item.name.toLowerCase());
  return (
    <CrewMain>
      <Header />
      <div className="meet-crew">
        <h3>02</h3>
        <p className="meet-text"> Meet your crew</p>
      </div>
      <div className="main-crew">
        <img src={douglasMobile} alt="douglas image" />
      </div>
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
  padding: 24px 24px 0 24px;
  justify-content: flex-start;

  .meet-crew {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 24px;
    margin-bottom: 32px;
    gap: 16px;
    justify-content: center;
    align-items: center;

    h3 {
      font-family: "Barlow Condensed";
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 2.700000047683716px;
      text-align: left;
      color: #ffffff;
      opacity: 0.25;
    }

    .meet-text {
      font-family: "Barlow Condensed";
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 2.700000047683716px;
      text-align: left;
      color: #ffffff;
      text-transform: uppercase;
    }
  }

  .main-crew {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 33px;
    justify-content: center;
    align-items: center;

    img {
      width: 177.12px;
      height: 222px;
    }
  }
`;
export default Crew;
