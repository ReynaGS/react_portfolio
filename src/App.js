import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Project from "./Components/Project";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Components/Projects';
import { Link, Route, Switch } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <div>
      <Header/>
      </div>
      <div>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
