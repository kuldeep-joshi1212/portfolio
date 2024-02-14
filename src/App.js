import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Background from "./components/background/Background"
import Contact from "./components/contact me/Contact";

function App() {
  return (
      <>
          <div className="background">
              <Background/>
          </div>

          <section><Hero/></section>
          <section><Skills/></section>
          <section>a</section>
          <section><Contact/></section>
      </>

)
    ;
}

export default App;
