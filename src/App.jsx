// App.jsx (with Lazy Loading Implemented)

import { Suspense, lazy } from 'react';
import BackgroundCanvas from "./components/Background";
import Header from "./components/Header";
import Social_pnal from "./components/Social_pnal";
import Home from "./pages/Home";

// Lazy loaded pages
const Education = lazy(() => import('./pages/Education'));
const Skill = lazy(() => import('./pages/Skill'));
const Project = lazy(() => import('./pages/Project'));
const Highlights = lazy(() => import('./pages/Highlights'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundCanvas />
      <main className="relative z-10">
        <Header />
        <Social_pnal />
        <Home />

        {/* Lazy Load Below-the-Fold Sections */}
        <Suspense fallback={<div className="text-white text-center py-10">Loading Education...</div>}>
          <Education />
        </Suspense>

        <Suspense fallback={<div className="text-white text-center py-10">Loading Skills...</div>}>
          <Skill />
        </Suspense>

        <Suspense fallback={<div className="text-white text-center py-10">Loading Projects...</div>}>
          <Project />
        </Suspense>

        <Suspense fallback={<div className="text-white text-center py-10">Loading Highlights...</div>}>
          <Highlights />
        </Suspense>

        <Suspense fallback={<div className="text-white text-center py-10">Loading Contact...</div>}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}
