import React, { useState, useEffect } from "react"
import SearchSuggestions from "../components/Search-suggestions"
import SearchBar from "../components/SearchBar"

export default function SearchPage({ cafes, categories }) {
    const [filteredSuggestions, setFilteredSuggestions] = useState()
    const [userInput, setUserInput] = useState()
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [cafesandCategories, setCafesandCategories] = useState()

    useEffect(() => {
        let combine = [...cafes, ...categories]
        setCafesandCategories(combine)
    }, []);

    return (
        <div className="search-container">
            <SearchBar
                cafesandCategories={cafesandCategories}
                setFilteredSuggestions={setFilteredSuggestions}
                setShowSuggestions={setShowSuggestions}
                setUserInput={setUserInput}
            />
            {showSuggestions &&
                <SearchSuggestions
                    filteredSuggestions={filteredSuggestions}
                    userInput={userInput} />
            }
        </div>
    )
}