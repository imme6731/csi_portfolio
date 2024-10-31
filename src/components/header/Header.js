import { styled } from "styled-components";
import { moLayoutSize } from "../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import "./mobileMenu.css";

const Sheader = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 900;
  padding: 25px 0;
  opacity: 1;
  color: #fff;

  @media screen and (max-width: 760px) {
    padding: 0;
  }
`;
const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 250px;
  @media screen and (max-width: 1200px) {
    padding: 0 150px;
  }
  @media screen and (max-width: 1000px) {
    padding: 0 40px;
  }
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
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const MenuBtn = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }
`;

const DropMenu = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
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
  @media screen and (max-width: 1000px) {
    display: block;
    li {
      padding: 20px;
      cursor: pointer;
      font-size: 16px;
    }
  }
`;

export const Header = ({ aboutRef, projectRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef();
  const headerRef = useRef();

  const scrollHandler = () => {
    const pageY = window.scrollY;

    if (pageY > 100) {
      headerRef.current.style.backgroundColor = "rgba(32,33,36,0.8)";
    } else {
      headerRef.current.style.backgroundColor = "transparent";
    }
  };

  const onClickMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    (async () => {
      try {
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
        return window.addEventListener("scroll", scrollHandler);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, [isOpen]);

  return (
    <Sheader ref={headerRef}>
      <HeaderWrap>
        <Logo>Choi SeongIm</Logo>
        <Nav>
          <li
            onClick={() => {
              aboutRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            ABOUT
          </li>
          <li
            onClick={() => {
              projectRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            PROJECTS
          </li>
          <li
            onClick={() => {
              contactRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            CONTACT
          </li>
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
              <li
                onClick={() => {
                  aboutRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                ABOUT
              </li>
              <li
                onClick={() => {
                  projectRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                PROJECTS
              </li>
              <li
                onClick={() => {
                  contactRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                CONTACT
              </li>
            </SubMenu>
          </DropMenu>
        )}
      </HeaderWrap>
    </Sheader>
  );
};
