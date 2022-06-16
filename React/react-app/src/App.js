import logo from './logo.svg';
import './App.css';
import CounterClass from './components/Counter/CounterClass'
import CounterFn from './components/Counter/CounterFn'
function App() {
  return (
    <div className="App" hello="hello">
      <CounterClass />
      <CounterFn />
    </div>
  );
}

export default App;
