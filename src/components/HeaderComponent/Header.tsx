import { styled } from "styled-components";
import Logo from "../../photoes/shared/logo.svg";

const Header = (): JSX.Element => {
  return (
    <HeaderMain>
      <img src={Logo} alt="home logo" />
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
  }
`;
export default Header;
