import { Button } from "@material-ui/core"
import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Header() {
    const [currentUser, setCurrentUser] = useState(false)
    return (
        <div className="header">
            {/* <img src={logo} alt="Hotelable" /> */}
            <Link to="/" className="header-btn">
                <h1>Hotelable</h1>
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