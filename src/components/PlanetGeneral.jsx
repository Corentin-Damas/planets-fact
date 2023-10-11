import Step from "./Step";

function PlanetGeneral({ step, setStep, planet }) {
  return (
    <div className="right-content">
      <div className="main-text">
        <h1 className="u-white">{planet.name}</h1>
        { step == 1 && <p className="u-white planet-text-content">{planet.overview.content}</p> }
        { step == 2 && <p className="u-white planet-text-content">{planet.structure.content}</p> }
        { step == 3 && <p className="u-white planet-text-content">{planet.geology.content}</p> }

        <div className="source">
          <p className="u-grey">Source:</p>
          { step == 1 && 
          <a href={planet.overview.source} target="_blank" className="link">
            Wikipedia
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path
                fill="#FFF"
                d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                opacity=".5"
                />
            </svg>
          </a>
          }
          { step == 2 && 
          <a href={planet.structure.source} target="_blank" className="link">
            Wikipedia
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path
                fill="#FFF"
                d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                opacity=".5"
                />
            </svg>
          </a>
          }
          { step == 3 && 
          <a href={planet.geology.source} target="_blank" className="link">
            Wikipedia
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path
                fill="#FFF"
                d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                opacity=".5"
                />
            </svg>
          </a>
          }
        </div>
      </div>
      <Step setStep={setStep} step={step} planet={planet} />
    </div>
  );
}

export default PlanetGeneral;
