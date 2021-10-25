import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { useHistory } from "react-router-dom";

export default function Register({ setCurrentUser }) {
    let history = useHistory();

    function handleSubmit(event) {
        event.preventDefault()

        const form = event.target

        let loginData = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            username: form.username.value,
            password: form.password.value
        }

        fetch("http://localhost:3030/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
            credentials: "include",
        }).then(() => {
            history.push("/");
        });
    }



    return (
        <main className="main-register-div">
            <div className="signup-container">
                <h1 className="signup-title"> Sign up</h1>
                <form className="signup-form" onSubmit={handleSubmit}>
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