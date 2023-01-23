import Experties from "./compontents/Experties/Experties";
import Header from "./compontents/header/header";
import Hero from "./compontents/hero/Hero";
import Works from "./compontents/works/works";
import Portfolio from "./compontents/Portfolio/Portfolio";
import css from "./styles/app.module.scss";
import People from "./compontents/People/People";
import Footer from "./compontents/Footer/Footer";
const App = () => {
  //don't forget to add font link in index.html
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Experties/>
    <Works/>
    <Portfolio/>
    <People/>
    <Footer/>
  </div>;
};

export default App;
