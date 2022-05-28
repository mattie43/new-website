import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const [pageNum, setPageNum] = useState(1);

  return (
    <div className="App">
      <NavBar setPageNum={setPageNum} />
      <Home pageHidden={pageNum === 1} />
      <AboutMe pageHidden={pageNum === 2} />
      <Resume pageHidden={pageNum === 3} />
    </div>
  );
}

export default App;
