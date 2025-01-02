import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

const Name = styled.div`
  margin: 0;
  color: #000;
  font-size: 24px;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 48px;
  color:rgb(183, 0, 219);
  margin: 5px 0;
  
`;


const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  background-color: rgb(183, 0, 219);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: rgb(130, 0, 156);
  }
`;

const Presentation = () => {
  return (
    <MainContainer>
      <Name>Sebastian Albornoz</Name>
      <Title>
        FRONT END <br /> WEB DEVELOPER
      </Title>
      <Button>Contactame</Button>
    </MainContainer>
  );
};

export default Presentation;
