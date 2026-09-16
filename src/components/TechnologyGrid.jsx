import TechnologyCard from "./TechnologyCard";

function TechnologyGrid({ technologies, onAdd }) {
  return (
    <div className="technology-grid">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default TechnologyGrid;
