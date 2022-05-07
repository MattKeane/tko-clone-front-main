export default function Start(props) {
    const { socket } = props
    const handleStart = () => {
        console.log('starting...')
        socket.current.emit('createRoom')
    }

    return (
        <>
            <h2>Start a New Game</h2>
            <button onClick={ handleStart }>Start</button>
        </>
    )
}