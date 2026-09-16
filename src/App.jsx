import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";

import technologiesData from "./data/technologies.json";

function App() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    setTechnologies(technologiesData);
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="technologies-section" id="technologies">

          <div className="technologies-container">

            <div className="technologies-heading">

              <h2>
                Explore the{" "}
                <span>Technologies</span>
              </h2>

              <p>
                Pick one technology per category to build your ideal stack.
              </p>

            </div>

            <TechnologyGrid
              technologies={technologies}
              onAdd={() => {}}
            />

          </div>

        </section>

      </main>
    </>
  );
}

export default App;
