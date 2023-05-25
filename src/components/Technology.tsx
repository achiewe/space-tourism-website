import styled from "styled-components";
import BgMobile from "../../public/photoes/technology/background-technology-mobile.jpg";
import Header from "./Header/Header";
import { useParams, Link } from "react-router-dom";
import data from "../../data.json";

interface technoType {
  name?: string;
  images?: {
    portrait?: string;
    landscape?: string;
  };
  description?: string;
}

let TechnologyInfo: technoType | undefined;

const Technology = (): JSX.Element => {
  const param = useParams();
  if (param.rocket === "vehicle") {
    TechnologyInfo = data.technology.find(
      (item) => item.name === "Launch vehicle"
    );
  } else if (param.rocket === "spaceport") {
    TechnologyInfo = data.technology.find((item) => item.name === "Spaceport");
  } else if (param.rocket === "capsule") {
    TechnologyInfo = data.technology.find(
      (item) => item.name === "Space capsule"
    );
  }
  const imageAddress = `.${TechnologyInfo?.images?.landscape}`;
  return (
    <TechnologyMain>
      <div className="header-div">
        <Header />
      </div>
      <div className="space-launch">
        <h3>03</h3>
        <p className="space-text"> SPACE LAUNCH 101</p>
      </div>
      <div className="main-technology">
        <img src={imageAddress} alt="spacecraft image" />
        <NavDiv>
          <Link to="/Technology/vehicle" className="vehicle">
            1
          </Link>
          <Link to="/Technology/spaceport" className="spaceport">
            2
          </Link>
          <Link to="/Technology/capsule" className="capsule">
            3
          </Link>
        </NavDiv>
        <div className="terminology-main">
          <div className="terminology-name">
            <h2>THE TERMINOLOGY… </h2>
            <h1> {TechnologyInfo?.name}</h1>
          </div>
          <p>{TechnologyInfo?.description} </p>
        </div>
      </div>
    </TechnologyMain>
  );
};

const TechnologyMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-image: url(${BgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: flex-start;

  .header-div {
    width: 100%;
    display: flex;
    padding: 24px 24px 0 24px;
  }

  .space-launch {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
    margin-bottom: 32px;

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

    .space-text {
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

  .main-technology {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 34px;

    img {
      width: 100%;
      height: 170px;
    }

    .terminology-main {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;

      .terminology-name {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 9px;

        h2 {
          font-family: "Barlow Condensed";
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          letter-spacing: 2.362499952316284px;
          text-align: center;
          color: #d0d6f9;
        }

        h1 {
          font-family: "Bellefair";
          font-size: 24px;
          color: #ffffff;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: 0px;
          text-align: center;
          text-transform: uppercase;
        }
      }

      p {
        font-family: "Barlow";
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0px;
        text-align: center;
        color: #d0d6f9;
        width: 327px;
      }
    }
  }
`;

const NavDiv = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  align-items: center;

  a {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.25);

    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Bellefair";
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 1px;
    text-align: center;
  }
`;

export default Technology;
