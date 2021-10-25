import { Button } from "@material-ui/core"
import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Header({ currentUser }) {
    return (
        <div className="header">
            <Link to="/" className="header-btn">
                <h1>Meal-a-deal</h1>
            </Link>
            <div className="login">
                {!currentUser.username && (
                    <Link to="/login">
                        <Button variant="contained">
                            Login
                        </Button>
                    </Link>
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