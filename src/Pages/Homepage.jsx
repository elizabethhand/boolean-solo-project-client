import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DealTile from "../components/Deal-tile"
import CategoryTile from "../components/Category-tile";
import ReactMapGL, {
    Marker,
    Popup
} from "react-map-gl";

export default function Homepage() {
    const [categories, setCategories] = useState([])
    const [deals, setdeals] = useState([])
    const [cafes, setCafes] = useState([])
    const [showPopup, togglePopup] = useState(false);

    const [viewport, setViewport] = useState({
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
        bearing: 0,
        pitch: 0
    });

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

        navigator.geolocation.getCurrentPosition(success, error);
    }, []);

    const MAPBOX_TOKEN = 'pk.eyJ1IjoibGl6emllaGFuZCIsImEiOiJja3Y0NnEwdG0yYXBzMzFxdzRyc3hrdW1lIn0.43AQ7KfSybeTpzMJl_RuZA'


    function success(pos) {
        var crd = pos.coords;
        setViewport({
            ...viewport,
            latitude: crd.latitude,
            longitude: crd.longitude
        })
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    if ((categories.length > 0) && (deals.length > 0) && (cafes.length > 0)) {
        return (
            <div>
                <ReactMapGL
                    {...viewport}
                    width="360px"
                    height="300px"
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    onViewportChange={(viewport) => setViewport(viewport)}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                >
                    {cafes.map((cafe, index) => (
                        <Marker key={index} latitude={cafe.latitude} longitude={cafe.longitude} offsetLeft={-20} offsetTop={-10} onClick={() => togglePopup({ cafe })} >
                            <div>Cafe</div>
                        </Marker>
                    ))}
                    {showPopup && <Popup
                        latitude={showPopup.cafe.latitude}
                        longitude={showPopup.cafe.longitude}
                        closeButton={true}
                        closeOnClick={false}
                        onClose={() => togglePopup(false)}
                        anchor="top" >
                        <div>{showPopup.cafe.name}
                            <Link to={`/cafe/${showPopup.cafe.id}`}>
                                Go to cafe
                            </Link>
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