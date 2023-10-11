function Step({ setStep, step, planet }) {

  return (
    <div className="stepper">
      <div
        className={`step-box ${step == 1 ? `u-active-${planet.name}` : ""}`}
        onClick={() => setStep(1)}
      >
        <h3 className="u-grey">01</h3>
        <h3 className="step-title">Overview</h3>
      </div>
      <div
        className={`step-box ${step == 2 ? `u-active-${planet.name}` : ""}`}
        onClick={() => setStep(2)}
      >
        <h3 className="u-grey">02</h3>
        <h3 className="step-title">Internal Structure</h3>
      </div>
      <div
        className={`step-box ${step == 3 ? `u-active-${planet.name}` : ""}`}
        onClick={() => setStep(3)}
      >
        <h3 className="u-grey">03</h3>
        <h3 className="step-title">Surface Geology</h3>
      </div>
    </div>
  );
}

export default Step;
