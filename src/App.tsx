
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header.tsx";
import About from "./Components/About.tsx";
import Project from "./Components/Projects.tsx";



function App() {
  return(
    <>
      <Header/>
        <About/>
        <Project/>
      </>
  )
}

export default App;
