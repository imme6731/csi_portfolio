import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Project } from "./components/projects/Project";

const App = () => {
  const handlerScroll = () => {
    const pageY = window.pageYOffset;
    console.log(pageY);
  };
  window.addEventListener("scroll", handlerScroll);
  return (
    <>
      <Header />
      <Main />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

/* 반응형 작업 
슬라이드 기준 >> 1600, 1350, 1200, 760
about >> 1600, 1200, 1000
헤더 >> 1200, 1000, 760
contact >> 760
*/
