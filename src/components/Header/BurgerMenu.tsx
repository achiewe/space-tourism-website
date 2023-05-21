import styled from "styled-components";
import BurgerSvg from "../../../public/photoes/shared/icon-hamburger.svg";
import CloseSvg from "../../../public/photoes/shared/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onSvgClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <BurgerDiv>
      <img
        onClick={onSvgClick}
        className="burger-svg"
        src={BurgerSvg}
        alt="svg burger"
      />
      <MenuDiv isclicked={isClicked.toString()}>
        <img
          onClick={onSvgClick}
          className="close-svg"
          src={CloseSvg}
          alt="close svg"
        />
        <div className="pages-div">
          <Link to="/">
            <h2> 00</h2>
            <h1>HOME </h1>
            <div className="page home"> </div>
          </Link>
          <Link to="/Destination/moon">
            <h2> 01</h2>
            <h1>DESTINATION </h1>
            <div className="page destination"> </div>
          </Link>
          <Link to="../../App">
            <h2> 02</h2>
            <h1>CREW </h1>
            <div className="page crew"> </div>
          </Link>
          <Link to="../../App">
            <h2> 03</h2>
            <h1>TECHNOLOGY </h1>
            <div className="page technology"> </div>
          </Link>
        </div>
      </MenuDiv>
    </BurgerDiv>
  );
};

const BurgerDiv = styled.div`
  width: 24px;

  .burger-svg {
    width: 24px;
    height: 21px;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const MenuDiv = styled.div<{ isclicked: string }>`
  width: 254px;
  height: 100vh;
  position: ${(props) => (props.isclicked == "true" ? "absolute" : "fixed")};
  right: ${(props) => (props.isclicked == "true" ? "0" : "-300%")};
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: 1;
  padding: 33px 33px 0 33px;
  background: rgba(255, 255, 255, 0.04);
  gap: 65px;
  backdrop-filter: blur(40.7742px);
  @media (min-width: 768px) {
    width: 450px;
    height: 96px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 48px;
    right: 0;
  }

  .close-svg {
    width: 19.09px;
    height: 19.09px;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .pages-div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 37px;
    }

    a {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 11px;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      @media (min-width: 768px) {
        gap: 0px;
        flex-direction: column;
        position: relative;
      }

      .page {
        @media (min-width: 768px) {
          position: absolute;
          background-color: #ffffff;
          width: 36px;
          height: 3px;
          bottom: -40px;
          display: none;
        }
      }

      /* .home {
        display: ;
      } */

      h2 {
        font-family: "Barlow Condensed";
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 2.700000047683716px;
        text-align: left;
        color: #ffffff;
        @media (min-width: 768px) {
          display: none;
        }
      }

      h1 {
        font-family: "Barlow Condensed";
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 2.700000047683716px;
        text-align: left;
        color: #ffffff;
        @media (min-width: 768px) {
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          letter-spacing: 2.362499952316284px;
          text-align: left;
        }
      }
    }
  }
`;
export default BurgerMenu;
