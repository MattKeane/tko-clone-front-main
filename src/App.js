import './App.css';
import { 
  useRef, 
  useEffect,
  useState 
} from 'react'
import { io } from 'socket.io-client'
import Start from './Start'

function App() {
  const socket = useRef(null)
  const [roomCode, setRoomCode] = useState(null)
  const { REACT_APP_API_URL } = process.env

  useEffect(() => {
    socket.current = io(REACT_APP_API_URL)
    socket.current.on('accessCode', accessCode => setRoomCode(accessCode))
  }, [REACT_APP_API_URL])



  return (
    <>
    {
      roomCode
      ?
      <p>{ roomCode }</p>
      :
      <div className="App">
        <Start socket={ socket } />
      </div>
    }
    </>
  );
}

export default App;
