import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import {MyProvider} from "./data/AppContext";

function App() {
  const[isSelected, setIsSelected] = useState(1)
  
  return (
    <div className="app-container">
      <MyProvider>
        <Header setIsSelected={setIsSelected} />
        <Main isSelected={isSelected} />
      </MyProvider>
    </div>
  );
}

export default App;
