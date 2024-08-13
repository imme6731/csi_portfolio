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
