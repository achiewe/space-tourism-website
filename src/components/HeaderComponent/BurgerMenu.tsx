import { styled } from "styled-components";
import BurgerSvg from "../../photoes/shared/icon-hamburger.svg";
import CloseSvg from "../../photoes/shared/icon-close.svg";

const BurgerMenu = (): JSX.Element => {
  return (
    <BurgerDiv>
      <img className="burger-svg" src={BurgerSvg} alt="svg burger" />
      <MenuDiv>
        <img className="close-svg" src={CloseSvg} alt="close svg" />
        <div className="pages-div">
          <div className="page-names">
            <h2> 00</h2>
            <h1>HOME </h1>
          </div>
          <div className="page-names">
            <h2> 01</h2>
            <h1>DESTINATION </h1>
          </div>
          <div className="page-names">
            <h2> 02</h2>
            <h1>CREW </h1>
          </div>
          <div className="page-names">
            <h2> 03</h2>
            <h1>TECHNOLOGY </h1>
          </div>
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
  }
`;

const MenuDiv = styled.div`
  width: 254px;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 33px 33px 0 33px;
  background: rgba(255, 255, 255, 0.04);
  gap: 65px;
  backdrop-filter: blur(40.7742px);

  .close-svg {
    width: 19.09px;
    height: 19.09px;
  }

  .pages-div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    .page-names {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 11px;
      align-items: center;
      justify-content: flex-start;

      h2 {
        font-family: "Barlow Condensed";
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 2.700000047683716px;
        text-align: left;
        color: #ffffff;
      }

      h1 {
        font-family: "Barlow Condensed";
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 2.700000047683716px;
        text-align: left;
        color: #ffffff;
      }
    }
  }
`;
export default BurgerMenu;
