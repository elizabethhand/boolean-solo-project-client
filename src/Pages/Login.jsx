import React from "react"
import { useHistory } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export default function Login({ setCurrentUser }) {
    let history = useHistory()

    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target

        const loginData = {
            username: form.username.value,
            password: form.password.value
        }

        fetch('http://localhost:3030/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ loginData })
        })
            .then(response => response.json())
            .then(userFromServer => {
                setCurrentUser({ ...userFromServer })
                history.push("/")
            })
    }


    return (
        <main className="main-div">
            <div className="login-container">
                <h1 className="login-title"> Login</h1>
                <form className="login-form" onSubmit={handleSubmit} >
                    <TextField
                        className="input"
                        name="username"
                        type="text"
                        placeholder="Username"
                        variant="outlined"
                    ></TextField>
                    <TextField
                        className="input"
                        name="password"
                        type="text"
                        placeholder="Password"
                        variant="outlined"
                    ></TextField>
                    <Button type="submit"> Log In</Button>
                </form>
            </div>
        </main>
    )
}