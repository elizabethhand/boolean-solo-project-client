import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CafeDisplayTile from "../components/Category-cafe-display-tile";

export default function CategoryDisplay() {
    const [categories, setCategories] = useState([])
    const { category } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3030/categories/${category}`)
            .then(response => response.json())
            .then(data => setCategories(data.data))

    }, []);

    // function capitalizeFirstLetter(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    // }

    console.log(categories)

    let cafeArray = categories.map(category =>
        category.restaurants.map((restaurant) => {
            return restaurant.restaurant
        })
    )

    console.log(cafeArray)

    // const capitalizedCategory = capitalizeFirstLetter(cafeCategory)

    if (cafeArray.length > 0) {

        return (
            <div className="category-display-container">
                <p className="category-name">Displaying results for: {category}</p>
                <div className="cafe-tile-container">
                    {cafeArray[0].map((cafe, index) =>
                        <CafeDisplayTile cafe={cafe} />
                    )}
                </div>
            </div>
        )
    } return null
}
