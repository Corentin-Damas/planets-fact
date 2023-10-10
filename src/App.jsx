import Header from "./components/Header";
import Main from "./components/Main";
import {MyProvider} from "./data/AppContext";

function App() {
  
  return (
    <div className="app-container">
      <MyProvider>
        <Header />
        <Main />
      </MyProvider>
    </div>
  );
}

export default App;
