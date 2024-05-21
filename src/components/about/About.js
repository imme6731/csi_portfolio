import { styled } from "styled-components";
import { pcLayoutSize } from "../../GlobalStyled";
import { ReactComponent as Html } from "../../asserts/images/html5.svg";
import { ReactComponent as Css } from "../../asserts/images/css3.svg";
import { ReactComponent as Javascript } from "../../asserts/images/javascript.svg";
import { ReactComponent as Typescript } from "../../asserts/images/typescript.svg";
import { ReactComponent as React } from "../../asserts/images/react.svg";
import { ReactComponent as ReactQuery } from "../../asserts/images/reactQuery.svg";
import { ReactComponent as Node } from "../../asserts/images/node.svg";
import { ReactComponent as Github } from "../../asserts/images/github.svg";
import { ReactComponent as Figma } from "../../asserts/images/figma.svg";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #f8f8f8;
  color: rgb(32, 33, 36);
`;
const Container = styled.div`
  padding: ${pcLayoutSize.padding};
  height: 100%;
  overflow: hidden;
`;
const SectionTitle = styled.div`
  margin-top: 100px;
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 80px;
`;
const ContainBox = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  justify-content: space-between;
`;
const ImgBox = styled.div`
  width: 30%;
  height: 100%;
  background-color: aliceblue;
`;
const TxtBox = styled.div`
  width: 60%;
  height: 100%;
  box-sizing: border-box;
`;
const ButtonWrap = styled.ul`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  & > li {
    padding: 10px;
    width: fit-content;
    height: fit-content;
    border: 1px solid #fff;
    margin-right: 20px;
    & :hover {
      cursor: pointer;
    }
  }
`;
const SKillWrap = styled.div`
  width: 80%;
`;
const SkillTitle = styled.div`
  font-size: 24px;
  margin-bottom: 30px;
`;
const SkillBtn = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 20px;
`;

export const About = () => {
  return (
    <Wrap>
      <Container>
        <SectionTitle>About</SectionTitle>
        <ContainBox>
          <ImgBox />
          <TxtBox>
            <li>안녕하세요. 프론트엔드 개발자 최성임입니다.</li>
            <li>머시기저시기</li>
            <li>머시기저시기</li>
            <li>머시기저시기</li>
            <ButtonWrap>
              <li>
                <a href="/">E-mail</a>
              </li>
              <li>
                <a href="/">Resume</a>
              </li>
              <li>
                <a
                  href="https://github.com/imme6731"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ButtonWrap>
            <SKillWrap>
              <SkillTitle>Skill</SkillTitle>
              <SkillBtn>
                <Html style={{ width: "60px", height: "60px" }} />
                <Css style={{ width: "60px", height: "60px" }} />
                <Javascript style={{ width: "60px", height: "60px" }} />
                <Typescript style={{ width: "60px", height: "60px" }} />
                <React style={{ width: "60px", height: "60px" }} />
                <ReactQuery style={{ width: "60px", height: "60px" }} />
                <Node style={{ width: "60px", height: "60px" }} />
                <Github style={{ width: "60px", height: "60px" }} />
                <Figma style={{ width: "60px", height: "60px" }} />
              </SkillBtn>
            </SKillWrap>
          </TxtBox>
        </ContainBox>
      </Container>
    </Wrap>
  );
};
