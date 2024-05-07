import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import TypewriterComponent from "typewriter-effect";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const MainTxtWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 140px;
  font-size: 90px;
  font-weight: 800;
`;
const Scroll = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -20.2px;
  text-align: center;
  & > p {
    margin-bottom: 8px;
  }
  animation: bounce 2s infinite;
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
export const Main = () => {
  return (
    <Wrap>
      <Container>
        <MainTxtWrap>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("Front-End")
                .pauseFor(200)
                .typeString("<br/>Developer")
                .pauseFor(200)
                .typeString("<br/>Choi SeongIm")
                .start()
                .pauseFor(200);
            }}
          />
        </MainTxtWrap>
        <Scroll>
          <p>scroll</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </Scroll>
      </Container>
    </Wrap>
  );
};
