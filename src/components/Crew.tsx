import styled from "styled-components";
import Header from "./Header/Header";
import BgMobile from "../../public/photoes/crew/background-crew-mobile.jpg";
import { Link, useParams } from "react-router-dom";
import data from "../../data.json";

const Crew = (): JSX.Element => {
  const param = useParams();
  const crewInfo = data.crew.find(
    (item) => item.name.split(" ")[0].toLowerCase() === param.person
  );
  console.log(crewInfo);

  const imageAddress = `.${crewInfo?.images.webp}`;
  console.log(crewInfo);
  return (
    <CrewMain>
      <Header />
      <div className="meet-crew">
        <h3>02</h3>
        <p className="meet-text"> Meet your crew</p>
      </div>
      <div className="main-crew">
        <div className="image-div">
          <img src={imageAddress} alt="douglas image" />
          <hr className="hr-image" />
          <div className="main-info">
            <NavDiv className="switch-commander">
              <Link to="/Crew/douglas" className="douglas"></Link>
              <Link to="/Crew/mark" className="mark"></Link>
              <Link to="/Crew/victor" className="victor"></Link>
              <Link to="/Crew/anousheh" className="annousheh"></Link>
            </NavDiv>
            <div className="commander-div">
              <div className="commander-name">
                <h2>Commander </h2>
                <h1> {crewInfo?.name}</h1>
              </div>
              <p>{crewInfo?.bio}</p>
            </div>
          </div>
        </div>
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

    .image-div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 177.12px;
        height: 222px;
      }
      .hr-image {
        width: 100%;
        height: 1px;
        background: #383b4b;
        opacity: 0.2;
      }
    }

    .main-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;

      .commander-div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;

        .commander-name {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 8px;

          h2 {
            font-family: "Bellefair";
            font-size: 16px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0px;
            text-align: center;
            text-transform: uppercase;
            color: #ffffff;
            mix-blend-mode: normal;
            opacity: 0.5;
          }

          h1 {
            font-family: "Bellefair";
            font-size: 24px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0px;
            text-align: center;
            color: #ffffff;
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
        }
      }
    }
  }
`;

const NavDiv = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 33px;

  a {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffffff;
  }
`;
export default Crew;
