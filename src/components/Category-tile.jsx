import React from "react"
import { Link } from "react-router-dom"

export default function CategoryTile({ category }) {

    return (
        <Link to={`/categories/${category.name}`} style={{ textDecoration: 'none' }}>
            <div className="category-tile">{category.name}</div>
        </Link>

    )


}