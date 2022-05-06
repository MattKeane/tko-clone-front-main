import './App.css';
import { useRef, useEffect } from 'react'
import { io } from 'socket.io-client'
import Start from './Start'

function App() {
  const socket = useRef(null)
  const { REACT_APP_API_URL } = process.env

  useEffect(() => {
    socket.current = io(REACT_APP_API_URL)
  }, [REACT_APP_API_URL])



  return (
    <div className="App">
      <Start socket={ socket } />
    </div>
  );
}

export default App;
