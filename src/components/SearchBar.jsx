import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function SearchBar({ cafes }) {
    const [userInput, setUserInput] = useState()
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [filteredSuggestions, setFilteredSuggestions] = useState()

    function handleChange(e) {
        let inputValue = e.currentTarget.value

        setUserInput(inputValue)

        if (inputValue) {
            setShowSuggestions(true)
        }
        else {
            setShowSuggestions(false)
        }

        let filteredCafes = cafes.filter(cafe =>
            cafe.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
        )
        setFilteredSuggestions(filteredCafes.slice(0, 5))

    }

    function Autocomplete() {
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

    return (
        <div className="search-bar-container">
            <input type="text" onChange={handleChange} className="search-bar" placeholder="Search..." />
            {showSuggestions && <Autocomplete />
            }
        </div>
    )
}