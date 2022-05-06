export default function Start(props) {
    const { handleStart } = props
    console.log(handleStart)

    return (
        <>
            <h2>Start a New Game</h2>
            <button onClick={ handleStart }>Start</button>
        </>
    )
}