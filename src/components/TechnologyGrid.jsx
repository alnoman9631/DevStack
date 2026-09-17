import TechnologyCard from "./TechnologyCard";

function TechnologyGrid({ technologies, stack, onAdd }) {
  return (
    <div className="technology-grid">
      {technologies.map((technology) => {
        const isAdded = stack.some(
          (item) => item.id === technology.id
        );

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={onAdd}
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
}

export default TechnologyGrid;