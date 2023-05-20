import styled from "styled-components";
import BackgroundMobile from "../../../public/photoes/home/background-home-mobile.jpg";
import BackgroundTablet from "../../../public/photoes/home/background-home-tablet.jpg";
import Header from "../Header/Header";

const Home = (): JSX.Element => {
  return (
    <HomeMain>
      <Header />
      <div className="space-div">
        <h3> SO, YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="explore-circle"> EXPLORE</div>
    </HomeMain>
  );
};

const HomeMain = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px 24px 0 24px;
  align-items: center;
  position: relative;
  background-image: url(${BackgroundMobile});
  gap: 48px;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    background-image: url(${BackgroundTablet});
    gap: 130px;
    padding: 0 0 90px 0;
  }

  .space-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media (min-width: 768px) {
      gap: 24px;
    }

    h3 {
      font-family: "Barlow Condensed";
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 2.700000047683716px;
      text-align: center;
      color: #d0d6f9;

      @media (min-width: 768px) {
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 3.375px;
        text-align: center;
      }
    }

    h1 {
      font-family: "Bellefair";
      font-size: 80px;
      font-weight: 400;
      line-height: 100px;
      letter-spacing: 0px;
      text-align: center;
      color: #ffffff;

      @media (min-width: 768px) {
        font-size: 150px;
        font-weight: 400;
        line-height: 150px;
        letter-spacing: 0px;
        text-align: left;
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
        width: 444px;
      }
    }
  }

  .explore-circle {
    margin-top: 33px;
    height: 150px;
    width: 150px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    font-family: "Bellefair";
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 1.25px;
    text-align: center;
    color: #0b0d17;

    @media (min-width: 768px) {
      margin-top: 156px;
      height: 242px;
      width: 242px;
      font-size: 32px;
      font-weight: 400;
      line-height: 37px;
      letter-spacing: 2px;
      text-align: left;
    }
  }
`;
export default Home;
