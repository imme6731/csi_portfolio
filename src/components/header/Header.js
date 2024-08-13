import { styled } from "styled-components";
import { moLayoutSize, pcLayoutSize, tabLayoutSize } from "../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import "./mobileMenu.css";

const Sheader = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 900;
  padding: 25px 0;
  opacity: 1;
  color: #fff;

  @media screen and (max-width: 1200px) {
    padding: ${tabLayoutSize.padding};
  }
  @media screen and (max-width: 760px) {
    padding: 0;
  }
`;
const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pcLayoutSize.padding};
  @media screen and (max-width: 760px) {
    padding: 20px;
  }
`;
const Logo = styled.div`
  font-family: "Roboto Slab", serif;
  font-weight: 700;
  font-size: 36px;
  @media screen and (max-width: 760px) {
    font-size: 24px;
  }
`;
const Nav = styled.ul`
  display: flex;
  font-size: 18px;
  li {
    margin-left: 50px;
    cursor: pointer;
    &:first-child {
      margin-left: unset;
    }
  }
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const MenuBtn = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }
`;

const DropMenu = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    width: -webkit-fill-available;
    position: absolute;
    top: 100%;
    left: 0;
    padding: ${moLayoutSize.padding};
    background-color: gray;
  }
`;
const SubMenu = styled.ul`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    li {
      padding: 20px;
      cursor: pointer;
      font-size: 16px;
    }
  }
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef();
  const onClickMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const outSideClick = (e) => {
      const { target } = e;
      if (
        isOpen &&
        dropDownRef.current &&
        !dropDownRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", outSideClick);
  }, [isOpen]);

  return (
    <Sheader>
      <HeaderWrap>
        <Logo>Choi SeongIm</Logo>
        <Nav>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </Nav>

        {/* 모바일 */}
        <MenuBtn ref={dropDownRef} onClick={() => onClickMenu()}>
          <FontAwesomeIcon icon={faBars} />
        </MenuBtn>

        {isOpen && (
          <DropMenu
            className={
              isOpen ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown"
            }
          >
            <SubMenu>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </SubMenu>
          </DropMenu>
        )}
      </HeaderWrap>
    </Sheader>
  );
};
