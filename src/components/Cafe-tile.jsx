import React from "react"

export default function CafeTile({ category }) {
    console.log(category)

    return (
        <div className="cafe-tiles">{category.name}
        </div>

    )


}