import { About } from "./components/about/About";
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
    </>
  );
};

export default App;
