import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

const AppContext = createContext();

const initialState = {
  planets: {},
  isLoading: true,
  currentPlanet: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "planets/loaded":
      return { ...state, isLoading: false, planets: action.payload };
    case "planet/loaded":
      return { ...state, isLoading: false, currentPlanet: action.payload };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:

  }
}

function MyProvider({ children }) {
  const [{ planets, isLoading, currentPlanet, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getDataPlanet() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch("http://localhost:9000/data");
        const data = await res.json();
        dispatch({ type: "planets/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading planets...",
        });
      }
    }
    getDataPlanet();
  }, []);

  return (
    <AppContext.Provider
      value={{
        planets,
        isLoading,
        currentPlanet,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function usePlanet() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("planets was used outside the planets Provider");
  return context;
}

export { MyProvider, usePlanet };
