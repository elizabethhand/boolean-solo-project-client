import React, { useState } from "react"
import { Link } from "react-router-dom"
import search from "../assets/search.png"

export default function SearchBar({ cafes, setUserInput, setShowSuggestions, setFilteredSuggestions }) {

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
        setFilteredSuggestions(filteredCafes.slice(0, 10))

    }

    return (
        <div className="search-bar-container">
            <input type="text" onChange={handleChange} className="search-bar" placeholder="Search..." />
            <input className="search-submit-btn" type="image" src={search} />
        </div>
    )
}