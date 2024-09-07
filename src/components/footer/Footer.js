import { styled } from "styled-components";

const Wrap = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  border-top: 0.5px solid #fff;
  padding: 60px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CopyRight = styled.div`
  font-size: 14px;
  font-weight: 300;
`;
export const Footer = () => {
  return (
    <Wrap>
      <Container>
        <CopyRight>© 2024 Front-end developer portfolio by CSI</CopyRight>
      </Container>
    </Wrap>
  );
};
