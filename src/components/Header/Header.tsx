import styled from "styled-components";
import Logo from "../../../public/photoes/shared/logo.svg";
import BurgerMenu from "./BurgerMenu";

const Header = (): JSX.Element => {
  return (
    <HeaderMain>
      <img src={Logo} alt="home logo" />
      <BurgerMenu />
    </HeaderMain>
  );
};

const HeaderMain = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    width: 40px;
    height: 40px;

    @media (min-width: 768px) {
      width: 48px;
      height: 48px;
      margin-left: 39px;
      margin-top: 24px;
    }
  }
`;
export default Header;
