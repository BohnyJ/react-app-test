import Header from "./Header";
import { Component } from "react";
import "./App.css";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Results from "./Results";
import Team from "./Team";
import Partners from "./Partners";
import Footer from "./Footer";

class App extends Component {
  openMenu() {
    let menu = document.getElementById("dropdown-menu");
  }
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <About />
        <Projects />
        <Results />
        <Team />
        <Partners />
        <Footer />
      </div>
    );
  }
}

export default App;
