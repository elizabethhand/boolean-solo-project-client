import React from "react"
import { Link } from "react-router-dom"

export default function SearchSuggestions({ filteredSuggestions, userInput }) {

    function makeBold(suggestion) {
        let re = new RegExp("(" + userInput + ")", 'gi')
        return (
            suggestion.replace(re, '<b>$1</b>')
        )

    }

    return (
        <div className="suggestions-box">
            {filteredSuggestions.map((suggestion) => (
                <Link to={`/cafe/${suggestion.id}`} style={{ textDecoration: 'none' }}>
                    < li dangerouslySetInnerHTML={{ __html: makeBold(suggestion.name) }} />
                </Link>
            ))
            }
        </div >
    )
}