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
import profil01 from "../../asserts/images/profile_img1.jpg";

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
const ImgBox = styled.img`
  width: 30%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  border-radius: 50%;
`;
const TxtBox = styled.ul`
  width: 60%;
  height: 100%;
  box-sizing: border-box;

  & > li {
    font-size: 22px;
    line-height: 34px;
    b {
      font-weight: 700;
    }
  }
`;
const ButtonWrap = styled.ul`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  margin-top: 40px;

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
  //985 or 984
  return (
    <Wrap>
      <Container>
        <SectionTitle>About</SectionTitle>
        <ContainBox>
          <ImgBox src={profil01} />
          <TxtBox>
            <li>안녕하세요. 프론트엔드 개발자 최성임입니다.</li>
            <li>
              저는 <b>새로운 기술과 지식을 배우는 것</b>에 대한 두려움이 없으며,
              오히려 그것에 대한 <b>열정과 호기심</b>을 가지고 있습니다. 원활한
              소통을 중요하게 여기며, 팀원들과
              <b> 적극적으로 의사소통</b>
              하여 프로젝트를 진행할 수 있도록 노력합니다.
              <b> 지속적인 자기계발과 성장</b>을 추구하여 전문성을 쌓아가고
              있습니다. 다양한 도전과 경험을 토대로 <b>최선의 UX를 제공</b>하는
              프론트엔드 개발자가 되고 싶습니다.
            </li>
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
