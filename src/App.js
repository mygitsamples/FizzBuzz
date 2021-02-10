import "./App.css";
import Header from "../src/components/header/header";
import InputForm from "../src/components/inputform/inputform";
import ErrorBoundary from "../src/components/errorboundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header title="FizzBuzz" />
        <InputForm />
      </ErrorBoundary>
    </div>
  );
}

export default App;
