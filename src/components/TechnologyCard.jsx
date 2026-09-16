function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <article className="technology-card">
      <div className="technology-card-top">
        <div className="technology-icon-wrapper">
          <img
            src={technology.icon}
            alt={technology.name}
            className="technology-icon"
          />
        </div>

        {technology.badge && (
          <span className="technology-badge">
            {technology.badge}
          </span>
        )}
      </div>

      <h3 className="technology-name">{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-info">
        <span className="technology-category">
          {technology.category}
        </span>

        <span className="technology-difficulty">
          {technology.difficulty}
        </span>

        <span className="technology-rating">
          <span className="star">★</span>
          {technology.rating}
        </span>
      </div>

      <button
        className={`technology-add-button ${
          isAdded ? "added" : ""
        }`}
        onClick={() => onAdd(technology)}
        // disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;
