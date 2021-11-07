import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DealTile from "../components/Deal-tile"
import CategoryTile from "../components/Category-tile";
import ReactMapGL, {
    Marker,
    Popup
} from "react-map-gl";
import locationPin from "../assets/pin.svg"
import SearchBar from "../components/SearchBar";

export default function Homepage({ viewport, setViewport }) {
    const [categories, setCategories] = useState([])
    const [deals, setdeals] = useState([])
    const [cafes, setCafes] = useState([])
    const [showPopup, togglePopup] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3030/categories')
            .then(response => response.json())
            .then(data => setCategories(data.data))

        fetch('http://localhost:3030/deals')
            .then(response => response.json())
            .then(data => setdeals(data.data))

        fetch('http://localhost:3030/cafe')
            .then(response => response.json())
            .then(data => setCafes(data.data))

    }, []);

    const MAPBOX_TOKEN = 'pk.eyJ1IjoibGl6emllaGFuZCIsImEiOiJja3Y0NnEwdG0yYXBzMzFxdzRyc3hrdW1lIn0.43AQ7KfSybeTpzMJl_RuZA'

    if ((categories.length > 0) && (deals.length > 0) && (cafes.length > 0)) {
        return (
            <div>
                <SearchBar cafes={cafes}/>
                <ReactMapGL
                    {...viewport}
                    width="370px"
                    height="310px"
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    onViewportChange={(viewport) => setViewport(viewport)}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                >
                    {cafes.map((cafe, index) => (
                        <Marker key={index} latitude={cafe.latitude} longitude={cafe.longitude} offsetLeft={-20} offsetTop={-10} onClick={() => togglePopup({ cafe })} >
                            <img className="location-pin" src={locationPin}></img>
                        </Marker>
                    ))}
                    {showPopup && <Popup
                        latitude={showPopup.cafe.latitude}
                        longitude={showPopup.cafe.longitude}
                        closeButton={true}
                        closeOnClick={false}
                        onClose={() => togglePopup(false)}
                        anchor="top" >
                        <div className="popup-box">
                            <div>{showPopup.cafe.name}</div>
                            <div className="go-to-cafe-btn">
                                <Link to={`/cafe/${showPopup.cafe.id}`} style={{ textDecoration: 'none' }}>
                                    Go to cafe
                                </Link>
                            </div>
                        </div>
                    </Popup>}
                </ReactMapGL>

                <h2 className="category-title"> Categories</h2>
                <div className="tile-container">
                    {categories.map((category) => (
                        <CategoryTile category={category} />
                    )
                    )}
                </div>
                <h2 className="deals-title"> Deals</h2>
                <div className="tile-container">
                    {deals.map((deal) => (
                        <DealTile deal={deal} />
                    ))}
                </div>
            </div >
        )
    }
    return null
}