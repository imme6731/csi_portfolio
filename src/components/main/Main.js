import { styled } from "styled-components";
// import "./main.css";
import TypewriterComponent from "typewriter-effect";

const Wrap = styled.div`
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 80vh;
`;
const MainTyping = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h1 {
    font-size: 1.8rem;
    &:first-child {
      margin-bottom: 25px;
    }
  }
`;
const Type = styled.div`
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 25px;
`;

export const Main = () => {
  return (
    <Wrap>
      <Container>
        <MainTyping>
          <h1>안녕하세요</h1>
          <Type>
            <TypewriterComponent
              options={{
                strings: [
                  "끊임없이 성장하는",
                  "사용자 친화적인",
                  "도전에 두려움 없는",
                  "프론트엔드",
                ],
                autoStart: true,
                delay: "natural",
                deleteSpeed: "natural",
                pauseFor: "1000",
                loop: true,
              }}
            />
            개발자
          </Type>
          <h1>최성임입니다.</h1>
        </MainTyping>
      </Container>
    </Wrap>
  );
};
