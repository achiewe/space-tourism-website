import styled from "styled-components";
import BgMobile from "../../public/photoes/technology/background-technology-mobile.jpg";
import BgTablet from "../../public/photoes/technology/background-technology-tablet.jpg";
import BgDesktop from "../../public/photoes/technology/background-technology-desktop.jpg";
import Header from "./Header/Header";
import { useParams, Link, useLocation } from "react-router-dom";
import data from "../../data.json";
import { useEffect, useState } from "react";

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
  const imageLandscape = `.${TechnologyInfo?.images?.landscape}`;
  const imagePortrait = `.${TechnologyInfo?.images?.portrait}`;
  const [currentPage, setCurrentPage] = useState<string>("vehicle");
  const location = useLocation();
  useEffect(() => {
    const address = location.pathname;
    const PagePresent = address.split("/")[2];
    setCurrentPage(PagePresent);
  }, [location]);
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
        <img
          className="landscape"
          src={imageLandscape}
          alt="spacecraft image"
        />
        <img className="portrait" src={imagePortrait} alt="spacecraft image" />
        <div className="bottom-div">
          <NavDiv currentPage={currentPage}>
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
  @media (min-width: 768px) {
    background-image: url(${BgTablet});
    padding-bottom: 98px;
  }

  @media (min-width: 1024px) {
    background-image: url(${BgDesktop});
    padding-bottom: 120px;
  }

  .header-div {
    width: 100%;
    display: flex;
    padding: 24px 24px 0 24px;
    @media (min-width: 768px) {
      padding: 0;
    }
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
    @media (min-width: 768px) {
      justify-content: flex-start;
      padding-left: 38.5px;
      margin-top: 64px;
      margin-bottom: 60px;
    }
    @media (min-width: 1024px) {
      padding-left: 166.5px;
      margin-top: 100px;
      margin-bottom: 137px;
    }

    h3 {
      font-family: "Barlow Condensed";
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 2.700000047683716px;
      text-align: left;
      color: #ffffff;
      opacity: 0.25;
      @media (min-width: 768px) {
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 3.375px;
        text-align: left;
      }

      @media (min-width: 1024px) {
        font-size: 28px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 4.724999904632568px;
        text-align: left;
      }
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
      @media (min-width: 768px) {
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 3.375px;
        text-align: left;
      }

      @media (min-width: 1024px) {
        font-size: 28px;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 4.724999904632568px;
        text-align: left;
      }
    }
  }

  .main-technology {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 34px;
    @media (min-width: 768px) {
      gap: 45px;
    }

    @media (min-width: 1024px) {
      flex-direction: row-reverse;
      justify-content: space-between;
    }

    .landscape {
      width: 100%;
      height: 170px;
      @media (min-width: 768px) {
        height: 310px;
      }
      @media (min-width: 1024px) {
        display: none;
      }
    }

    .portrait {
      display: none;
      width: 100%;
      @media (min-width: 1024px) {
        display: block;
        max-width: 515px;
        height: 527px;
      }
    }

    .bottom-div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 26px;
      @media (min-width: 768px) {
        gap: 44px;
      }
      @media (min-width: 1024px) {
        flex-direction: row;
        gap: 80px;
      }

      .terminology-main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        @media (min-width: 1024px) {
          gap: 17px;
          justify-content: flex-start;
          align-items: flex-start;
          max-width: 470px;
        }

        .terminology-name {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 9px;
          @media (min-width: 768px) {
            gap: 16px;
          }

          @media (min-width: 1024px) {
            gap: 11px;
            justify-content: flex-start;
            align-items: flex-start;
          }

          h2 {
            font-family: "Barlow Condensed";
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            letter-spacing: 2.362499952316284px;
            text-align: center;
            color: #d0d6f9;
            @media (min-width: 768px) {
              font-size: 16px;
              font-weight: 400;
              line-height: 19px;
              letter-spacing: 2.700000047683716px;
              text-align: left;
            }
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
            @media (min-width: 768px) {
              font-size: 40px;
              font-weight: 400;
              line-height: 46px;
              letter-spacing: 0px;
              text-align: center;
            }

            @media (min-width: 1024px) {
              font-size: 56px;
              font-weight: 400;
              line-height: 64px;
              letter-spacing: 0px;
              text-align: left;
            }
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
          @media (min-width: 768px) {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0px;
            text-align: center;
            width: 458px;
          }

          @media (min-width: 1024px) {
            font-size: 18px;
            font-weight: 400;
            line-height: 32px;
            letter-spacing: 0px;
            text-align: left;
            width: 444px;
          }
        }
      }
    }
  }
`;

const NavDiv = styled.nav<{ currentPage: string }>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: column;
    max-width: 80px;
    gap: 32px;
  }

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
    @media (min-width: 768px) {
      width: 60px;
      height: 60px;
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 1.5px;
      text-align: center;
    }

    @media (min-width: 1024px) {
      width: 80px;
      height: 80px;
      font-size: 32px;
      font-weight: 400;
      line-height: 37px;
      letter-spacing: 2px;
      text-align: center;
    }
  }

  a:hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }

  .vehicle {
    background-color: ${(props) =>
      props.currentPage === "vehicle" ? "#FFFFFF" : ""};
    color: ${(props) => (props.currentPage === "vehicle" ? "#0B0D17" : "")};
  }

  .spaceport {
    background-color: ${(props) =>
      props.currentPage === "spaceport" ? "#FFFFFF" : ""};
    color: ${(props) => (props.currentPage === "spaceport" ? "#0B0D17" : "")};
  }

  .capsule {
    background-color: ${(props) =>
      props.currentPage === "capsule" ? "#FFFFFF" : ""};
    color: ${(props) => (props.currentPage === "capsule" ? "#0B0D17" : "")};
  }
`;

export default Technology;
