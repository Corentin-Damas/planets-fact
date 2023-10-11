function Step({setStep}) {
  return (
    <div className="stepper">
      <div className="step-box" onClick={()=>setStep(1)}>
        <h3 className="u-grey">01</h3>
        <h3 className="step-title">Overview</h3>
      </div>
      <div className="step-box" onClick={()=>setStep(2)}>
        <h3 className="u-grey">02</h3>
        <h3 className="step-title">Internal Structure</h3>
      </div>
      <div className="step-box" onClick={()=>setStep(3)}>
        <h3 className="u-grey">03</h3>
        <h3 className="step-title">Surface Geology</h3>
      </div>
    </div>
  );
}

export default Step;
