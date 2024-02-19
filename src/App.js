import "./App.scss";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Background from "./components/background/Background"
import Contact from "./components/contact me/Contact";
import Projects from "./components/projects/Projects";

function App() {
  return (
      <>
          <div className="background">
              <Background/>
          </div>
          <section><Hero/></section>
          <section><Skills/></section>
          <section><Projects/> </section>
          <section><Contact/></section>
      </>

)

}

export default App;
