import styled from "styled-components";
import Header from "./Header/Header";
import DestinationMobile from "../../public/photoes/destination/background-destination-mobile.jpg";
import DestinationTablet from "../../public/photoes/destination/background-destination-tablet.jpg";
import { useParams, Link } from "react-router-dom";
import data from "../../data.json";

const Destination = (): JSX.Element => {
  const param = useParams();
  const planetInfo = data.destinations.find(
    (item) => item.name.toLowerCase() === param.planets
  );

  const line = param.planets;

  const imageAdrress = `.${planetInfo?.images.webp}`;

  console.log(planetInfo);

  return (
    <DestionationMain line={line}>
      <Header />
      <div className="pick-destionation">
        <h3>01</h3>
        <p className="pick-text"> pick your destination</p>
      </div>
      <div className="choose-planet">
        <img src={imageAdrress} />
        <div className="switch-planet">
          <div className="planets">
            <Link className="moon-text" to="/Destination/moon">
              MOON
            </Link>
            <div className="downward moon"> </div>
          </div>
          <div className="planets">
            <Link to="/Destination/mars"> MARS </Link>
            <div className="downward mars"> </div>
          </div>
          <div className="planets">
            <Link to="/Destination/europa"> EUROPA </Link>
            <div className="downward europa"> </div>
          </div>
          <div className="planets">
            <Link to="/Destination/titan"> TITAN </Link>
            <div className="downward titan"> </div>
          </div>
        </div>
      </div>
      <div className="planet-info">
        <h1>{planetInfo?.name}</h1>
        <p className="info-text">{planetInfo?.description}</p>
      </div>
      <hr />
      <div className="time-distance">
        <div className="distance-km">
          <h3 className="avg-est"> AVG. DISTANCE</h3>
          <h2 className="quantity-distance"> {planetInfo?.distance}</h2>
        </div>
        <div className="travel-time">
          <h3 className="avg-est"> EST. TRAVEL TIME</h3>
          <h2 className="quantity-distance"> {planetInfo?.travel}</h2>
        </div>
      </div>
    </DestionationMain>
  );
};

const DestionationMain = styled.div<{ line: string | undefined }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px 24px 0 24px;
  align-items: center;
  background-image: url(${DestinationMobile});
  gap: 32px;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    padding: 0px;
    gap: 64px;
    background-image: url(${DestinationTablet});
    padding-bottom: 62px;
  }

  .pick-destionation {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 18px;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      justify-content: flex-start;
      align-items: center;
      padding-left: 38.5px;
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
    }

    .pick-text {
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
    }
  }

  .choose-planet {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 26px;
    @media (min-width: 768px) {
      gap: 53px;
    }

    img {
      width: 170px;
      height: 170px;
      @media (min-width: 768px) {
        width: 300px;
        height: 300px;
      }
    }

    .switch-planet {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 26px;
      @media (min-width: 768px) {
        gap: 35px;
      }
      .planets {
        display: flex;
        flex-direction: column;
        gap: 8px;
        justify-content: center;
        align-items: center;
        position: relative;

        .moon-text {
          color: ${(props) => (props.line === "moon" ? "#ffffff" : "#d0d6f9")};
        }

        a {
          font-family: "Barlow Condensed";
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          letter-spacing: 2.362499952316284px;
          text-align: left;
          text-decoration: none;
          color: #d0d6f9;

          @media (min-width: 768px) {
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 2.700000047683716px;
            text-align: left;
          }

          :focus {
            color: #ffffff;
          }
        }

        .downward {
          position: absolute;
          height: 3px;
          right: 0;
          left: 0;
          bottom: -8px;
          width: 36px;
          background-color: #ffffff;
          display: none;
          @media (min-width: 768px) {
            width: 41px;
          }
        }

        .moon {
          display: ${(props) => (props.line === "moon" ? "flex" : "none")};
        }

        .mars {
          display: ${(props) => (props.line === "mars" ? "flex" : "none")};
        }

        .europa {
          width: 50px;
          display: ${(props) => (props.line === "europa" ? "flex" : "none")};
        }

        .titan {
          display: ${(props) => (props.line === "titan" ? "flex" : "none")};
        }
      }
    }
  }

  .planet-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      gap: 8px;
    }

    h1 {
      font-family: "Bellefair";
      font-size: 56px;
      font-weight: 400;
      line-height: 64px;
      letter-spacing: 0px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      @media (min-width: 768px) {
        font-size: 80px;
        font-weight: 400;
        line-height: 92px;
        letter-spacing: 0px;
        text-align: center;
      }
    }

    .info-text {
      font-family: "Barlow";
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: center;
      color: #d0d6f9;
      @media (min-width: 768px) {
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0px;
        text-align: center;
        width: 573px;
      }
    }
  }

  hr {
    height: 1px;
    width: 100%;
    background: #383b4b;
    opacity: 0.2;
    @media (min-width: 768px) {
      max-width: 573px;
    }
  }

  .time-distance {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    @media (min-width: 768px) {
      flex-direction: row;
      gap: 11px;
      max-width: 573px;
    }

    .avg-est {
      font-family: "Barlow Condensed";
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 2.362499952316284px;
      text-align: center;
      color: #d0d6f9;
    }

    .quantity-distance {
      font-family: "Bellefair";
      font-size: 28px;
      font-weight: 400;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: center;
      color: #ffffff;
      text-transform: uppercase;
    }

    .distance-km {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
    }

    .travel-time {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
    }
  }
`;
export default Destination;
