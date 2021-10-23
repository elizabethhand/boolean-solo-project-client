import React, { useState, useEffect } from "react"
import DealTile from "../components/Deal-tile"
import CategoryTile from "../components/Category-tile";
import ReactMapGL, {
    Marker,
    Popup
} from "react-map-gl";

export default function Homepage() {
    const [categories, setCategories] = useState([])
    const [deals, setdeals] = useState([])
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
    }, []);

    const MAPBOX_TOKEN = 'pk.eyJ1IjoibGl6emllaGFuZCIsImEiOiJja3Y0NnEwdG0yYXBzMzFxdzRyc3hrdW1lIn0.43AQ7KfSybeTpzMJl_RuZA';

    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var crd = pos.coords;
        console.log(crd.latitude)
        console.log(crd.longitude)
        setViewport({
            ...viewport,
            latitude: crd.latitude,
            longitude: crd.longitude
        })
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    function renderMarkers() {

    }

    if (categories && deals) {
        return (
            <div>
                <ReactMapGL
                    {...viewport}
                    width="360px"
                    height="300px"
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    onViewportChange={setViewport}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                />
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
            </div>
        )
    }
    return null
}