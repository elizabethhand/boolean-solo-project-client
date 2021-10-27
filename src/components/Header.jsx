import { Button } from "@material-ui/core"
import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Header({ currentUser }) {
    return (
        <div className="header">
            <Link to="/" className="header-btn" style={{ textDecoration: 'none' }}>
                <h1 className="app-heading">Meal-a-deal</h1>
            </Link>
            <div className="login">
                {!currentUser.username && (
                    <div className="login-register-">
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Button style={{ backgroundColor: '#FFFD98', padding: '5px' }} variant="contained">
                                Login
                            </Button>
                        </Link>
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                            <Button style={{ backgroundColor: '#FFFD98', padding: '5px', margin: '0px 5px' }} variant="contained">
                                Register
                            </Button>
                        </Link>
                    </div>
                )}
                {currentUser && (
                    <Button className="logBtn" >
                        Log Out
                    </Button>
                )}
            </div>
        </div>
    )
}