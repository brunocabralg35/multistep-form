import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import StepMenu from "./components/StepMenu";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <BrowserRouter>
          <div className="container">
            <StepMenu />
            <Rotas />
          </div>
        </BrowserRouter>
      </FormProvider>
    </div>
  );
}

export default App;
