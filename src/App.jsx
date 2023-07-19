import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import StepMenu from './components/StepMenu'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StepMenu />
        <Rotas />
      </BrowserRouter>
    </div>
  );
}

export default App;
