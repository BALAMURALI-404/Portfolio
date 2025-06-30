import Header from "./components/Header";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Trial from "./pages/trial";

export default function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Education/>
      <Skill/>
      <Project/>
      <Trial/>
    </>
  )
}