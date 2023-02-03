import React, { useState } from 'react';

const Autocomplete = ({ suggestions }) => {
    const [inputValue, setInputValue] = useState('');
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setInputValue(value);

        // Filter the suggestions based on the input value
        const filtered = suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions(filtered);
    };

    const handleKeyDown = (e) => {
        switch (e.keyCode) {
            case 13: // Enter
                setInputValue(filteredSuggestions[activeSuggestion]);
                setFilteredSuggestions([]);
                break;
            case 38: // Up arrow
                if (activeSuggestion === 0) {
                    return;
                }
                setActiveSuggestion(activeSuggestion - 1);
                break;
            case 40: // Down arrow
                if (activeSuggestion - 1 === filteredSuggestions.length) {
                    return;
                }
                setActiveSuggestion(activeSuggestion + 1);
                break;
            default:
                break;
        }
    };

    const handleClick = (suggestion) => {
        setInputValue(suggestion);
        setFilteredSuggestions([]);
    };

    return (
        <div>
            <input style={{width:100, height:50}}
                type="text"  
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <ul>
                {filteredSuggestions.map((suggestion, index) => (
                    <li
                        key={suggestion}
                        className={index === activeSuggestion ? 'active' : ''}
                        onClick={() => handleClick(suggestion)}
                    >
                        {suggestion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Autocomplete;
