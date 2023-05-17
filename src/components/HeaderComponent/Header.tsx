import { styled } from "styled-components";

const Header = (): JSX.Element => {
  return <HeaderMain></HeaderMain>;
};

const HeaderMain = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export default Header;
