import React from "react"
import CafeTile from "../components/Cafe-tile"

export default function Homepage() {
    return (
        <div>
            <div className="map"></div>
            <h2 className="cafe-title"> Categories</h2>
            <CafeTile />
            <h2 className="cafe-title"> Cafes</h2>
            <CafeTile />

        </div>
    )
}