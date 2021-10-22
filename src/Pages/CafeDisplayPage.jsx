import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function CafeDisplayPage() {
    const { id } = useParams();
    const [cafe, setCafe] = useState()

    useEffect(() => {
        fetch(`http://localhost:3030/cafe/${id}`)
            .then(response => response.json())
            .then(data => setCafe(data.data))

    }, []);

    if (cafe) {
        return (
            <>
                <div className="cafe-information-container">
                    <h1> {cafe.name}</h1>
                    <img className="cafe-img" src={cafe.image}></img>
                    <div className="directions"> Directions will go here</div>
                </div>
                <div className="deal-container">
                    <h1 className="deal-title"> Deal of the Day</h1>
                    <div className="deal-tile">
                        <p> {cafe.deal.name}</p>
                        <p> {cafe.deal.price}</p>
                    </div>
                    <div className="qr-link"> Get QR code</div>
                </div>
            </>

        )
    }
    return null
}