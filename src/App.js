import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Project } from "./components/projects/Project";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Project />
      <Contact />
    </>
  );
};

export default App;
