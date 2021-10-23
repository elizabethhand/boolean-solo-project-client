import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export default function Register() {
    return (
        <main className="main-register-div">
            <div className="signup-container">
                <h1 className="signup-title"> Sign up</h1>
                <form className="signup-form">
                    <TextField
                        className="input"
                        variant="outlined"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                    ></TextField>
                    <TextField
                        className="input"
                        variant="outlined"
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                    ></TextField>
                    <TextField
                        className="input"
                        variant="outlined"
                        name="email"
                        type="text"
                        placeholder="Email"
                    ></TextField>
                    <TextField
                        className="input"
                        variant="outlined"
                        name="username"
                        type="text"
                        placeholder="Username"
                    ></TextField>
                    <TextField
                        className="input"
                        variant="outlined"
                        name="password"
                        type="text"
                        placeholder="Password"
                    ></TextField>
                    <Button
                        className="signup-button"
                        color="secondary"
                        variant="contained"
                        type="submit"
                    >
                        {" "}
                        Submit
                    </Button>
                </form>
            </div>
        </main>
    )
}