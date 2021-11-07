import React from "react"
import { Link } from "react-router-dom"

export default function CafeDisplayTile({ cafe }) {
    console.log(cafe)
    return (
        <div className="cafe-tile">
            <div className="cafe-title">{cafe.name}</div>
            <div className="cafe-info">
                <div className="cafe-img">
                    <img className="cafe-tile-img" src={cafe.image} />
                </div>
                <div className="deal-info">
                    <p> {cafe.deal.name}</p>
                    <p> £{cafe.deal.price}</p>
                </div>
            </div>
            <div className="go-to-cafe-container">
                <Link to={`/cafe/${cafe.id}`} style={{ textDecoration: 'none' }}>
                    <div className="go-to-cafe-btn tile-cafe-btn">Go to cafe</div>
                </Link>
            </div>
        </div>
    )
}