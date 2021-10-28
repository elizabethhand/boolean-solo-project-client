import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CafeDisplayTile from "../components/Category-cafe-display-tile";

export default function CategoryDisplay() {
    const [restaurants, setRestaurants] = useState([])
    const { category } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3030/categories/${category}`)
            .then(response => response.json())
            .then(data => setRestaurants(data.data))

    }, []);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // console.log(restaurants)

    const capitalizedCategory = capitalizeFirstLetter(category)

    if (restaurants.length > 0) {

        return (
            <div className="category-display-container">
                <p className="category-name">Displaying results for: {capitalizedCategory}</p>
                <div className="cafe-tile-container">
                    {/* {restaurants.restuarants.map(restaurant =>
                    console.log(restaurant)
                    <CafeDisplayTile restaurant={restaurant} />
                )} */}
                    <CafeDisplayTile />
                    <CafeDisplayTile />
                    <CafeDisplayTile />
                    <CafeDisplayTile />
                    <CafeDisplayTile />
                    <CafeDisplayTile />
                </div>
            </div>
        )
    } return null
}
