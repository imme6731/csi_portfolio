import { styled } from "styled-components";
import { pcLayoutSize } from "../../GlobalStyled";
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
  padding: ${pcLayoutSize.padding};
`;
const SectionTitle = styled.div`
  margin-top: 120px;
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 80px;
`;
export const Project = () => {
  return (
    <Wrap>
      <Container>
        <SectionTitle>Project</SectionTitle>
      </Container>
    </Wrap>
  );
};
