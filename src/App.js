import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [pageNum, setPageNum] = useState(1);

  return (
    <div className="App">
      <NavBar setPageNum={setPageNum} />
      <Home pageHidden={pageNum === 1} />
      <Resume pageHidden={pageNum === 2} />
      <Projects pageHidden={pageNum === 3} />
      <Footer />
    </div>
  );
}
