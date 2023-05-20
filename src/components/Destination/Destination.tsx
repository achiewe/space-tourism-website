import styled from "styled-components";
import Header from "../Header/Header";
import DestinationMobile from "../../../public/photoes/destination/background-destination-mobile.jpg";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../../data.json";

const Destination = (): JSX.Element => {
  const [saveInfo, setSaveInfo] = useState<any>(null);

  const param = useParams();
  const planetInfo = data.destinations.find(
    (item) => item.name.toLowerCase() === param.planets
  );

  const imageAdrress = `.${planetInfo?.images.png}`;

  console.log(planetInfo);

  return (
    <DestionationMain>
      <Header />
      <div className="pick-destionation">
        <h3>01</h3>
        <p className="pick-text"> pick your destination</p>
      </div>
      <div className="choose-planet">
        <img src={imageAdrress} />
        <div className="switch-planet">
          <div className="planets">
            <Link to="/Destination/moon"> MOON </Link>
            <div className="planets-downward"> </div>
          </div>
          <div className="planets">
            <Link to="/Destination/mars"> MARS </Link>
            <div className="planets-downward"> </div>
          </div>
          <div className="planets">
            <Link to="/Destination/europa"> EUROPA </Link>
            <div className="planets-downward"> </div>
          </div>
          <div className="planets">
            <Link to="/Destination/titan"> TITAN </Link>
            <div className="planets-downward"> </div>
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

const DestionationMain = styled.div`
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

  .pick-destionation {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 18px;
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

    .pick-text {
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

  .choose-planet {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 26px;

    img {
      width: 170px;
      height: 170px;
    }

    .switch-planet {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 26px;

      .planets {
        display: flex;
        flex-direction: column;
        gap: 8px;
        justify-content: center;
        align-items: center;

        a {
          font-family: "Barlow Condensed";
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          letter-spacing: 2.362499952316284px;
          text-align: left;
          text-decoration: none;
          color: #d0d6f9;
        }

        .planets-downward {
          height: 3px;
          width: 36px;
          background-color: #ffffff;
          display: none;
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

    h1 {
      font-family: "Bellefair";
      font-size: 56px;
      font-weight: 400;
      line-height: 64px;
      letter-spacing: 0px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }

    .info-text {
      font-family: "Barlow";
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: center;
      color: #d0d6f9;
    }
  }

  hr {
    height: 1px;
    width: 100%;
    background: #383b4b;
    opacity: 0.2;
  }

  .time-distance {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

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
