import React from "react"

export default function CategoryTile({ category }) {
    console.log(category)

    return (
        <div className="category-tile">{category.name}
        </div>

    )


}