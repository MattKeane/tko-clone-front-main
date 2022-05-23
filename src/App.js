import './App.css';
import { 
  useRef, 
  useEffect,
  useState 
} from 'react'
import { io } from 'socket.io-client'
import Start from './Start'
import Room from './Room'

function App() {
  const socket = useRef(null)
  const [roomCode, setRoomCode] = useState(null)
  const [room, setRoom] = useState(null)
  const { REACT_APP_API_URL } = process.env

  useEffect(() => {
    socket.current = io(REACT_APP_API_URL)
    socket.current.on('accessCode', accessCode => setRoomCode(accessCode))
    socket.current.on('updateRoom', updatedRoom => setRoom(updatedRoom))
  }, [REACT_APP_API_URL])


  return (
    <>
    {
      room
      ?
      <Room room={ room } />
      :
      <div className="App">
        <Start socket={ socket } />
      </div>
    }
    </>
  );
}

export default App;
