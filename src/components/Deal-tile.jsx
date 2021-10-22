import React from "react"
import { Link } from "react-router-dom"

export default function DealTile({ deal }) {

    return (
        <Link to={`/cafe/${deal.id}`}>
            <div className="deal-tile">{deal.name}
            </div>
        </Link>

    )


}