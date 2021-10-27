import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import walkingIcon from "../assets/walking-icon.png"

export default function CafeDisplayPage({ viewport }) {
    const { id } = useParams();
    const [cafe, setCafe] = useState()
    const [tripDuration, setTripDuration] = useState()

    const mapbox_token = "pk.eyJ1IjoibGl6emllaGFuZCIsImEiOiJja3Y0NnEwdG0yYXBzMzFxdzRyc3hrdW1lIn0.43AQ7KfSybeTpzMJl_RuZA"


    useEffect(() => {
        fetch(`http://localhost:3030/cafe/${id}`)
            .then(response => response.json())
            .then(data => {
                setCafe(data.data)
                console.log(viewport.longitude)
                console.log(viewport.latitude)
                console.log(data.data.longitude)
                console.log(data.data.latitude)
                return data
            })
            .then((data) => {
                return fetch(`https://api.mapbox.com/directions/v5/mapbox/walking/${viewport.longitude},${viewport.latitude};${data.data.longitude},${data.data.latitude}?steps=true&geometries=geojson&access_token=${mapbox_token}`) // make a 2nd request and return a promise
            })
            .then(response => response.json())
            .then(data => setTripDuration(Math.round(data.routes[0].duration % 60)))

    }, []);

    // useEffect(() => {
    //     async function fetchFromAPI() {
    //         let response = await fetch(`http://localhost:3030/cafe/${id}`)
    //         response = await response.json()
    //         setCafe(response.data)
    //         console.log(cafe.longitude)

    //         let data = await fetch(`https://api.mapbox.com/directions/v5/mapbox/walking/${viewport.longitude},${viewport.latitude};${cafe.longitude},${cafe.latitude}?steps=true&geometries=geojson&access_token=${mapbox_token}`)
    //         data = await data.json()
    //         setTripDuration(Math.round(data.routes[0].duration % 60))
    //         console.log(tripDuration)
    //     }

    //     fetchFromAPI()
    // }, [])



    // if (cafe) {

    //     useEffect(() => {
    //         fetch(`https://api.mapbox.com/directions/v5/mapbox/walking/${viewport.longitude},${viewport.latitude};${cafe.longitude},${cafe.latitude}?steps=true&geometries=geojson&access_token=${mapbox_token}`)
    //             .then(response => response.json())
    //             .then(data => setTripDuration(data))

    //     }, []);
    // }

    if (cafe && tripDuration) {
        return (
            <>
                <div className="cafe-information-container">
                    <h1> {cafe.name}</h1>
                    <img className="cafe-img" src={cafe.image}></img>
                    <div className="trip-duration">
                        <img className="walking-icon" src={walkingIcon} />
                        <p>{tripDuration} mins </p>
                    </div>
                </div>
                <div className="deal-container">
                    <h1 className="deal-title"> Deal of the Day</h1>
                    <div className="deal-tile">
                        <p> {cafe.deal.name}</p>
                        <p> {cafe.deal.price}</p>
                    </div>
                    <Link to="/cafe/1/qrcode" style={{ textDecoration: 'none' }}>
                        <div className="qr-link"> Get QR code</div>
                    </Link>
                </div>
            </>

        )
    }
    return null
}