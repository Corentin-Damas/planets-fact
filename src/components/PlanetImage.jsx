function PlanetImage({ step, planet }) {
  return (
    <div className="planets-imgs">
      {step == 1 && (
        <img className="planet-image" src={`${planet.images.planet}`} alt="" />
      )}
      {step == 2 && (
        <img
          className="planet-image"
          src={`${planet.images.internal}`}
          alt=""
        />
      )}
      {step == 3 && (
        <div className="planet-images-stack">
          <img
            className="planet-image"
            src={`${planet.images.planet}`}
            alt=""
          />
          <img
            className="planet-image-geo"
            src={`${planet.images.geology}`}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default PlanetImage;
