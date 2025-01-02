import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  background-color: rgb(183, 0, 219);
  padding: 10px 20px;
`;

const Name = styled.h3`
  color: #fff;
  margin: 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const Item = styled.a`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font: bold;
  font-weight: 500;
`;

const Theme = styled.button`
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 100px;
`;

const Header = () => {
  return (
    <Main>
      <Name>Sebastian Albornoz</Name>

      <Box>
        <Item href="#">About Me</Item>
        <Item href="#">My Projects</Item>
        <Item href="#">Contact</Item>
      </Box>
      <Theme>Change Theme</Theme>
    </Main>
  );
};
export default Header;
