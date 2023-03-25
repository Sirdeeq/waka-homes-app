// import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Pricing from './component/Pricing';
import Header from './component/Layout/Header';
import './App.css'
import "./index.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <Pricing />
      </ErrorBoundary>
    </div>
  );
}

export default App;
