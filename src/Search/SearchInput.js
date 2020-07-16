import React from 'react';

function SearchInput(props) {

    return (
        <label>Cocktails that contains:
            <input type="text" value={props.cocktailSearched} readOnly />
        </label>
    );
}

export default SearchInput;