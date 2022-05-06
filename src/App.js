import './App.css';
import Start from './Start'

function App() {
  const handleStart = () => {
    console.log('starting game')
  }

  return (
    <div className="App">
      <Start handleStart={ handleStart } />
    </div>
  );
}

export default App;
