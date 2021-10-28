import React from "react"

export default function CafeDisplayTile({ restaurant }) {
    console.log(restaurant)
    return (
        <div className="cafe-tile">
            <div className="cafe-title">Cafe Name </div>
            <div className="cafe-info">
                <div className="cafe-img">
                    <div> Image</div>
                </div>
                <div className="deal-info">
                    <p> Deal information</p>
                    <p> Deal Price</p>
                </div>
            </div>
            <div className="go-to-cafe-container">
                <div className="go-to-cafe-btn tile-cafe-btn">Go to cafe</div>
            </div>
        </div>
    )
}