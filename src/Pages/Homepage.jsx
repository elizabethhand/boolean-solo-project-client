import React, { useState, useEffect } from "react"
import DealTile from "../components/Deal-tile"
import CategoryTile from "../components/Category-tile";

export default function Homepage() {
    const [categories, setCategories] = useState([])
    const [deals, setdeals] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/categories')
            .then(response => response.json())
            .then(data => setCategories(data.data))

        fetch('http://localhost:3030/deals')
            .then(response => response.json())
            .then(data => setdeals(data.data))
    }, []);


    if (categories && deals) {
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