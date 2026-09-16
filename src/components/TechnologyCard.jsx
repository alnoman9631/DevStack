function TechnologyCard({ technology, onAdd }) {
  return (
    <article className="technology-card">

      {/* Top section */}
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

      {/* Technology name */}
      <h3 className="technology-name">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="technology-description">
        {technology.description}
      </p>

      {/* Information */}
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

      {/* Add button */}
      <button
        className="technology-add-button"
        onClick={() => onAdd(technology)}
      >
        Add to Stack
      </button>

    </article>
  );
}

export default TechnologyCard;
