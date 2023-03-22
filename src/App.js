import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Pricing from './component/Pricing';
// import Pricing from './component/Pricing';
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Pricing />
      </ErrorBoundary>
    </div>
  );
}

export default App;
