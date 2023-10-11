function PlanetDescription({ planet }) {
  return (
    <div className="description-container">
      <div className="description-box">
        <h3 className="description-title">rotation time</h3>
        <h2 className="description-info">{planet.rotation}</h2>
      </div>
      <div className="description-box">
        <h3 className="description-title">revolution time</h3>
        <h2 className="description-info">{planet.revolution}</h2>
      </div>
      <div className="description-box">
        <h3 className="description-title">radius</h3>
        <h2 className="description-info">{planet.radius}</h2>
      </div>
      <div className="description-box">
        <h3 className="description-title">Average temp.</h3>
        <h2 className="description-info">{planet.temperature}</h2>
      </div>
    </div>
  );
}

export default PlanetDescription;
