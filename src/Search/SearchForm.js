import React, { useState } from 'react';

function SearchForm(props) {
    const [inputSearch, setInputSearch] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.passInputToSearch(inputSearch);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter a cocktail name:
                <input type="text" name="inputSearch" value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
            </label>
            <br />
            <button type="submit">Find My Drink!</button>
        </form >
    )
}

export default SearchForm;