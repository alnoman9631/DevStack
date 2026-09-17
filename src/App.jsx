import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import technologiesData from "./data/technologies.json";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  /* Load technology data */
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setTechnologies(technologiesData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  /* Add technology to stack */
  const handleAddToStack = (technology) => {
    setStack((currentStack) => {
      const alreadyAdded = currentStack.some(
        (item) => item.id === technology.id
      );

      if (alreadyAdded) {
        toast.warning(
          `${technology.name} is already in your stack.`
        );

        return currentStack;
      }

      toast.success(
        `${technology.name} added to your stack!`
      );

      return [...currentStack, technology];
    });
  };

  /* Remove one technology */
  const handleRemoveFromStack = (id) => {
    setStack((currentStack) => {
      const removedTechnology = currentStack.find(
        (technology) => technology.id === id
      );

      if (removedTechnology) {
        toast.info(
          `${removedTechnology.name} removed from your stack.`
        );
      }

      return currentStack.filter(
        (technology) => technology.id !== id
      );
    });
  };

  /* Remove all technologies */
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          className="technologies-section"
          id="technologies"
        >
          <div className="technologies-container">

            {/* Section heading */}
            <div className="technologies-heading">
              <h2>
                Explore the{" "}
                <span>Technologies</span>
              </h2>

              <p>
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            {/* Technology content */}
            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>

                <p>Loading technologies...</p>
              </div>
            ) : (
              <div className="technologies-layout">

                {/* Left side */}
                <TechnologyGrid
                  technologies={technologies}
                  stack={stack}
                  onAdd={handleAddToStack}
                />

                {/* Right side */}
                <YourStack
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />

              </div>
            )}

          </div>
        </section>
      </main>

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

      <Footer />
    </>
  );
}

export default App;