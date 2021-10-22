import React, { useState, useEffect } from "react"
import CafeTile from "../components/Cafe-tile"
import CategoryTile from "../components/Category-tile";

export default function Homepage() {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch('http://localhost:3030/categories')
            .then(response => response.json())
            .then(data => setCategories(data.data))
    }, []);

    if (categories) {
        return (
            <div>
                <div className="map"></div>
                <h2 className="category-title"> Categories</h2>
                <div className="tile-container">
                    {categories.map((category) => (
                        <CategoryTile category={category} />
                    )
                    )}
                </div>
                <h2 className="cafe-title"> Cafes</h2>
                {/* <CafeTile /> */}

            </div>
        )
    }
    return null
}