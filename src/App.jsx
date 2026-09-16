import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import technologiesData from "./data/technologies.json";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    setTechnologies(technologiesData);
  }, []);

  const handleAddToStack = (technology) => {
    setStack((currentStack) => {
      const alreadyAdded = currentStack.some(
        (item) => item.id === technology.id
      );

      if (alreadyAdded) {
        return currentStack;
      }

      return [...currentStack, technology];
    });
  };

  const handleRemoveFromStack = (id) => {
    setStack((currentStack) =>
      currentStack.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="technologies-section" id="technologies">
          <div className="technologies-container">
            <div className="technologies-heading">
              <h2>
                Explore the <span>Technologies</span>
              </h2>

              <p>
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            <div className="technologies-layout">
              <TechnologyGrid
                technologies={technologies}
                stack={stack}
                onAdd={handleAddToStack}
              />

              <YourStack
                stack={stack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </section>
      </main>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;