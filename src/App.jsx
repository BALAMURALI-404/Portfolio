import BackgroundCanvas from "./components/Background";
import Header from "./components/Header";
import Education from "./pages/Education";
import Highlights from "./pages/Highlights";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Trial from "./pages/trial";

export default function App() {
  return (
      <div className="relative min-h-screen">
        <BackgroundCanvas />
        <main className="relative z-10">
          <Header/>
          <Home />
          <Education/>
          <Skill />
          <Project />
          <Highlights />
          <Trial/>
        </main>
    </div>
  )
}