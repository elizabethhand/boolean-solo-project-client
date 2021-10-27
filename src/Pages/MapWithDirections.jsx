import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import React, { useRef, useEffect } from "react"
// eslint-disable-next-line import/no-webpack-loader-syntax
var mapboxgl = require('!mapbox-gl');
// var MapboxDirections = require('@mapbox/mapbox-gl-directions');



export default function MapWithDirections() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    mapboxgl.accessToken = 'pk.eyJ1IjoibGl6emllaGFuZCIsImEiOiJja3Y0NnEwdG0yYXBzMzFxdzRyc3hrdW1lIn0.43AQ7KfSybeTpzMJl_RuZA';

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [7.32, 60.44],
            zoom: 6,
        })
    }, []);

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );

}
