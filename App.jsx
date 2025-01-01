import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import MyProjects from "./sections/MyProjects";
import Presentation from "./sections/Presentation";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 0 ;
  margin: 0;
`;
function App() {
  return (
    <Container>
      <Presentation />
      <AboutMe />
      <MyProjects />
      <Contact />
    </Container>
  );
}

export default App;
