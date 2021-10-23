import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export default function Login() {
    return (
        <main className="main-div">
            <div className="login-container">
                <h1 className="login-title"> Login</h1>
                <form className="login-form" >
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
                    <Button> Log In</Button>
                </form>
            </div>
        </main>
    )
}