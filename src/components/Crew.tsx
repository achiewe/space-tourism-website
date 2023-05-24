import styled from "styled-components";
import Header from "./Header/Header";
import BgMobile from "../../public/photoes/crew/background-crew-mobile.jpg";
import BgTablet from "../../public/photoes/crew/background-crew-tablet.jpg";
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
        </div>
        <div className="main-info">
          <NavDiv className="switch-commander">
            <Link to="/Crew/douglas" className="douglas"></Link>
            <Link to="/Crew/mark" className="mark"></Link>
            <Link to="/Crew/victor" className="victor"></Link>
            <Link to="/Crew/anousheh" className="annousheh"></Link>
          </NavDiv>
          <div className="commander-div">
            <div className="commander-name">
              <h2>{crewInfo?.role} </h2>
              <h1> {crewInfo?.name}</h1>
            </div>
            <p>{crewInfo?.bio}</p>
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
  @media (min-width: 768px) {
    padding: 0px;
    background-image: url(${BgTablet});
    padding: 0;
  }

  .meet-crew {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 24px;
    margin-bottom: 32px;
    gap: 16px;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      margin-top: 64px;
      margin-bottom: 60px;
      justify-content: flex-start;
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

    .meet-text {
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

  .main-crew {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 33px;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: column-reverse;
      gap: 40px;
    }

    .image-div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 177.12px;
        height: 222px;

        @media (min-width: 768px) {
          width: 456.37px;
          height: 572px;
        }
      }
      .hr-image {
        width: 100%;
        height: 1px;
        background: #383b4b;
        opacity: 0.2;

        @media (min-width: 768px) {
          display: none;
        }
      }
    }

    .main-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;
      @media (min-width: 768px) {
        flex-direction: column-reverse;
        gap: 40px;
      }

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

            @media (min-width: 768px) {
              font-size: 24px;
              font-weight: 400;
              line-height: 28px;
              letter-spacing: 0px;
              text-align: center;
            }
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

            @media (min-width: 768px) {
              font-size: 40px;
              font-weight: 400;
              line-height: 46px;
              letter-spacing: 0px;
              text-align: center;
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
          @media (min-width: 768px) {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0px;
            text-align: center;
            width: 458px;
          }
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

  a {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffffff;
  }
`;
export default Crew;
