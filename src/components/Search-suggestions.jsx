import React from "react"
import { Link } from "react-router-dom"

export default function SearchSuggestions({ filteredSuggestions, userInput }) {

    function makeBold(suggestion) {
        let re = new RegExp("(" + userInput + ")", 'gi')
        return (
            suggestion.replace(re, '<b>$1</b>')
        )
    }

    function CafeSearchResult({ suggestion }) {
        return (
            <Link to={`/cafe/${suggestion.id}`} style={{ textDecoration: 'none' }}>
                < li dangerouslySetInnerHTML={{ __html: makeBold(suggestion.name) }} />
            </Link>
        )
    }

    function CategorySearchResult({ suggestion }) {
        return (
            <Link to={`/categories/${suggestion.name}`} style={{ textDecoration: 'none' }}>
                < li dangerouslySetInnerHTML={{ __html: makeBold(suggestion.name) }} />
            </Link>
        )
    }

    return (
        <div className="suggestions-box">
            {filteredSuggestions.map((suggestion) => (
                suggestion.address ?
                    <CafeSearchResult suggestion={suggestion} /> :
                    <CategorySearchResult suggestion={suggestion} />
            ))}
        </div >
    )
}