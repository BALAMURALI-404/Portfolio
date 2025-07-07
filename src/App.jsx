import BackgroundCanvas from "./components/Background";
import Header from "./components/Header";
import Social_pnal from "./components/Social_pnal";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Highlights from "./pages/Highlights";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skill from "./pages/Skill";

export default function App() {
  return (
      <div className="relative min-h-screen">
        <BackgroundCanvas />
        <main className="relative z-10">
          <Header/>
          <Social_pnal/>
          <Home />
          <Education/>
          <Skill />
          <Project />
          <Highlights />
          <Contact/>
        </main>
    </div>
  )
}