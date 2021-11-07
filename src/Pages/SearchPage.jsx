import React, { useState } from "react"
import SearchSuggestions from "../components/Search-suggestions"
import SearchBar from "../components/SearchBar"

export default function SearchPage({ cafes }) {
    const [filteredSuggestions, setFilteredSuggestions] = useState()
    const [userInput, setUserInput] = useState()
    const [showSuggestions, setShowSuggestions] = useState(false)

    return (
        <div className="search-container">
            <SearchBar
                cafes={cafes}
                setFilteredSuggestions={setFilteredSuggestions}
                setShowSuggestions={setShowSuggestions}
                setUserInput={setUserInput}
            />
            {showSuggestions &&
                <SearchSuggestions
                    filteredSuggestions={filteredSuggestions} />
            }
        </div>
    )
}