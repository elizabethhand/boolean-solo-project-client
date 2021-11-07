import React from "react"
import { Link } from "react-router-dom"

export default function SearchSuggestions({ filteredSuggestions }) {
    return (
        <div className="suggestions-box">
            {filteredSuggestions.map((suggestion) => (
                <Link to={`/cafe/${suggestion.id}`} style={{ textDecoration: 'none' }}>
                    < ul > {suggestion.name}</ul>
                </Link >
            ))
            }
        </div >
    )
}