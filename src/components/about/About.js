import { styled } from "styled-components";
import { pcLayoutSize, tabLayoutSize } from "../../GlobalStyled";
import { ReactComponent as Html } from "../../asserts/images/html5.svg";
import { ReactComponent as Css } from "../../asserts/images/css3.svg";
import { ReactComponent as Javascript } from "../../asserts/images/javascript.svg";
import { ReactComponent as Typescript } from "../../asserts/images/typescript.svg";
import { ReactComponent as React } from "../../asserts/images/react.svg";
import { ReactComponent as ReactQuery } from "../../asserts/images/reactQuery.svg";
import { ReactComponent as Node } from "../../asserts/images/node.svg";
import { ReactComponent as Github } from "../../asserts/images/github.svg";
import { ReactComponent as Figma } from "../../asserts/images/figma.svg";
import profil01 from "../../asserts/images/profile_img1.jpg";
import "../../asserts/css/skill.css";
import { forwardRef } from "react";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f8f8f8;
  color: rgb(32, 33, 36);
`;
const Container = styled.div`
  padding: ${pcLayoutSize.padding};
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 1320px) {
    padding: ${tabLayoutSize.padding};
  }
  @media screen and (max-width: 760px) {
    padding: 80px 60px;
  }
  @media screen and (max-width: 430px) {
    padding: 80px 20px;
  }
`;
const SectionTitle = styled.div`
  font-size: 48px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  @media screen and (max-width: 1000px) {
    margin-bottom: 80px;
  }
  @media screen and (max-width: 760px) {
    font-size: 36px;
  }
`;
const ContainBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ImgBox = styled.img`
  width: 30%;
  height: 530px;
  object-fit: cover;
  object-position: bottom;
  border-radius: 50%;
  @media screen and (max-width: 1200px) {
    height: 530px;
  }
  @media screen and (max-width: 1000px) {
    width: 300px;
    height: 300px;
    margin-bottom: 40px;
  }
  /* @media screen and (max-width: 760px) {
    display: none;
  } */
`;
const TxtBox = styled.ul`
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const Txt = styled.ul`
  & > li {
    font-size: 22px;
    line-height: 34px;
    b {
      font-weight: 700;
    }
    @media screen and (max-width: 1000px) {
      font-size: 18px;
      line-height: 24px;
    }
    @media screen and (max-width: 430px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
const ButtonWrap = styled.ul`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  margin-top: 40px;
  @media screen and (max-width: 1000px) {
    margin-bottom: 60px;
    margin-top: 60px;
  }
  @media screen and (max-width: 430px) {
    margin-bottom: 40px;
    margin-top: 40px;
  }

  & > li {
    padding: 10px;
    width: fit-content;
    height: fit-content;
    border: 2px solid #000;
    margin-right: 20px;
    a {
      color: rgb(32, 33, 36);
      font-weight: 500;
    }
    & :hover {
      cursor: pointer;
    }
  }
`;
const SKillWrap = styled.div`
  width: 100%;
`;
const SkillTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  @media screen and (max-width: 430px) {
    font-size: 24px;
  }
`;
const SkillBtn = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 30px;
`;

export const About = forwardRef((props, ref) => {
  //985 or 984

  return (
    <Wrap>
      <Container ref={ref}>
        <SectionTitle>About</SectionTitle>
        <ContainBox>
          <ImgBox src={profil01} />
          <TxtBox>
            <Txt>
              <li>안녕하세요. 프론트엔드 개발자 최성임입니다.</li>
              <li>
                저는 <b>새로운 기술과 지식을 배우는 것</b>에 대한 두려움이
                없으며, 오히려 그것에 대한 <b>열정과 호기심</b>을 가지고
                있습니다. 원활한 소통을 중요하게 여기며, 팀원들과
                <b> 적극적으로 의사소통</b>
                하여 프로젝트를 진행할 수 있도록 노력합니다.
                <b> 지속적인 자기계발과 성장</b>을 추구하여 전문성을 쌓아가고
                있습니다. 다양한 도전과 경험을 토대로 <b>최선의 UX를 제공</b>
                하는 프론트엔드 개발자가 되고 싶습니다.
              </li>
            </Txt>
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
                <Html className="size" />
                <Css className="size" />
                <Javascript className="size" />
                <Typescript className="size" />
                <React className="size" />
                <ReactQuery className="size" />
                <Node className="size" />
                <Github className="size" />
                <Figma className="size" />
              </SkillBtn>
            </SKillWrap>
          </TxtBox>
        </ContainBox>
      </Container>
    </Wrap>
  );
});
