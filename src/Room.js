export default function Room({ room }) {
    const displayUsers = room.users.map(user => <li key={ user._id }>{ user.displayName }</li>)

    return (
        <>
            <h2>{ room.accessCode }</h2>
            <ul>
                { displayUsers }
            </ul>
        </>
    )
}