import { useState } from 'react';

function Login(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[user, setUser] = useState(null);

    const handleSubmit = event => {
        // following is to prevent page reload on submit
        event.preventDefault()
        const userData = {
            username,
            password
        }
        setUser(userData);
    }

    return(
        <div style={{ textAlign:'center' }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={event => setUsername(event.target.value)}></input>
            <input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
        {/* Following displays user and pass, if any */}
        {/* The null and 2 are just for formatting*/}
        {user && JSON.stringify(user, null, 2)}
        </div>
    )
}

export default Login;