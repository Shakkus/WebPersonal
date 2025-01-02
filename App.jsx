import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import MyProjects from "./sections/MyProjects";
import Presentation from "./sections/Presentation";
import Header from "./Header";
import styled from "styled-components";
import "./App.css";

const Main = styled.div`
  background-color: #f5f5f5;
  padding: 0;
  margin: 0;
`;
const Container = styled.div`
  padding: 0 30px;
`;

function App() {
  return (
    <Main>
      <Header />
      <Container>
        <Presentation />
        <AboutMe />
        <MyProjects />
        <Contact />
      </Container>
    </Main>
  );
}

export default App;
