import { styled } from "styled-components";
import { pcLayoutSize } from "../../GlobalStyled";
import cinemaz from "../../asserts/images/cinemaz_scrennshot.png";
import colorcast from "../../asserts/images/colorcast_screenshot.png";
import seoulMetro from "../../asserts/images/seoulmetro_screenshot.png";
import songwol from "../../asserts/images/songwoltowel_screenshot.jpg";
import romand from "../../asserts/images/romand_screenshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../asserts/css/project.css";

import { Pagination, Navigation } from "swiper/modules";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div``;
const SectionTitle = styled.div`
  padding: ${pcLayoutSize.padding};
  margin-top: 100px;
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 80px;
`;
const ConWrap = styled.div`
  padding: 0 60px;
`;
const ProjectCon = styled.div`
  width: 100%;
  height: 660px;
  border: 1.5px solid #fff;
  border-radius: 30px;
  padding: 0 10px;
`;
const ImgBox = styled.img`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
  height: 320px;
  border-radius: 30px 30px 0 0;
  object-fit: cover;
  object-position: top;
`;
const TextBox = styled.div`
  padding: 0 20px;
`;
const ProjectTitle = styled.div`
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UrlBtn = styled.div`
  font-size: 28px;
  & a {
    &:first-child {
      margin-right: 20px;
    }
  }
`;
const Desc = styled.div`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 30px;
`;
const Skill = styled.div`
  margin-bottom: 30px;
  & h2 {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 10px;
    & li {
      margin-right: 15px;
      font-size: 16px;
      font-weight: 300;
    }
  }
`;

export const Project = () => {
  return (
    <Wrap>
      <Container>
        <SectionTitle>Project</SectionTitle>
        <ConWrap>
          <Swiper
            slidesPerView={3}
            spaceBetween={80}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <ProjectCon>
                <ImgBox src={cinemaz}></ImgBox>
                <TextBox>
                  <ProjectTitle>
                    <h1>CINEMAZ</h1>
                    <UrlBtn>
                      <a
                        href="https://github.com/imme6731/movie_app_cinemaz/tree/master"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        href="https://imme6731.github.io/movie_app_cinemaz/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faHouseChimney} />
                      </a>
                    </UrlBtn>
                  </ProjectTitle>
                  <Desc>
                    The Movie Database (TMDB) Api를 사용하여 제작한 영화 소개
                    사이트입니다. 인기영화, 최신작 등 슬라이드 형태로 영화들을
                    볼 수 있으며 상세페이지에서 해당 영화의 정보와 관련 영화,
                    추천 영화를 볼 수 있습니다.
                  </Desc>
                  <Skill>
                    <h2>Skill</h2>
                    <ul>
                      <li>react</li>
                      <li>javascript</li>
                      <li>styled-components</li>
                      <li>router</li>
                      <li>react hook</li>
                    </ul>
                  </Skill>
                </TextBox>
              </ProjectCon>
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCon>
                <ImgBox src={colorcast}></ImgBox>
                <TextBox>
                  <ProjectTitle>
                    <h1>ColorCast</h1>
                    <UrlBtn>
                      <a
                        href="https://github.com/imme6731/weather_app_colorcast"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        href="https://imme6731.github.io/weather_app_colorcast/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faHouseChimney} />
                      </a>
                    </UrlBtn>
                  </ProjectTitle>
                  <Desc>
                    기상청 api를 활용하여 제작된 날씨 예보 모바일페이지입니다.
                    초단기예보 api, 단기예보 api를 사용하여 현재 날씨와
                    일기예보를 받아왔습니다. 한국환경공단 에어코리아 api로 주변
                    대기오염 측정소를 받아와 현재 대기오염 수치를
                    구현하였습니다.
                  </Desc>
                  <Skill>
                    <h2>Skill</h2>
                    <ul>
                      <li>react</li>
                      <li>javascript</li>
                      <li>styled-components</li>
                      <li>router</li>
                      <li>node fetch</li>
                    </ul>
                  </Skill>
                </TextBox>
              </ProjectCon>
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCon>
                <ImgBox src={seoulMetro}></ImgBox>
                <TextBox>
                  <ProjectTitle>
                    <h1>서율교통공사 리뉴얼</h1>
                    <UrlBtn>
                      <a
                        href="https://github.com/imme6731/SeoulMetro"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        href="https://imme6731.github.io/SeoulMetro/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faHouseChimney} />
                      </a>
                    </UrlBtn>
                  </ProjectTitle>
                  <Desc>
                    서울교통공사 웹페이지를 리뉴얼한 반응형 사이트입니다.
                    react를 사용하여 메인페이지만 구성하엿습니다.
                  </Desc>
                  <Skill>
                    <h2>Skill</h2>
                    <ul>
                      <li>react</li>
                      <li>javascript</li>
                      <li>styled-components</li>
                    </ul>
                  </Skill>
                </TextBox>
              </ProjectCon>
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCon>
                <ImgBox src={songwol}></ImgBox>
                <TextBox>
                  <ProjectTitle>
                    <h1>송월타월 리뉴얼</h1>
                    <UrlBtn>
                      <a
                        href="https://github.com/imme6731/songwoltowel_renewal"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        href="https://imme6731.github.io/songwoltowel_renewal/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faHouseChimney} />
                      </a>
                    </UrlBtn>
                  </ProjectTitle>
                  <Desc>
                    송월타월 웹페이지를 리뉴얼한 반응형 사이트입니다. html,
                    css를 사용하여 메인페이지만 구성하엿습니다.
                  </Desc>
                  <Skill>
                    <h2>Skill</h2>
                    <ul>
                      <li>html</li>
                      <li>css</li>
                      <li>javascript</li>
                    </ul>
                  </Skill>
                </TextBox>
              </ProjectCon>
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCon>
                <ImgBox src={romand}></ImgBox>
                <TextBox>
                  <ProjectTitle>
                    <h1>롬앤 리뉴얼</h1>
                    <UrlBtn>
                      <a
                        href="https://github.com/imme6731/romand_renewal"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        href="https://imme6731.github.io/romand_renewal/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faHouseChimney} />
                      </a>
                    </UrlBtn>
                  </ProjectTitle>
                  <Desc>
                    롬앤 웹페이지를 리뉴얼한 반응형 사이트입니다. html, css를
                    사용하여 메인페이지만 구성하엿습니다.
                  </Desc>
                  <Skill>
                    <h2>Skill</h2>
                    <ul>
                      <li>html</li>
                      <li>css</li>
                      <li>javascript</li>
                    </ul>
                  </Skill>
                </TextBox>
              </ProjectCon>
            </SwiperSlide>
          </Swiper>
        </ConWrap>
      </Container>
    </Wrap>
  );
};
